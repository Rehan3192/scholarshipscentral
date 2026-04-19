// FILE: src/app/sitemap.ts

import type { MetadataRoute } from "next";
import { scholarships } from "@/data/scholarships";
import { toSegment } from "@/lib/helpers";
import { getSiteUrl, isVercelProduction } from "@/lib/site";
import {
  getWordPressAllPostSlugs,
  isWordPressConfigured,
} from "@/lib/wordpress";

const STATIC_LAST_MODIFIED = new Date("2026-02-09T00:00:00Z");

function isoDateOrNow(value: string | undefined) {
  if (!value) return new Date();
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return new Date();
  return d;
}

function maxDate(current: Date, candidate: Date) {
  return candidate > current ? candidate : current;
}

function toFundingSlug(fundingType: string) {
  const v = fundingType.trim().toLowerCase();
  if (v === "fully funded") return "fully-funded";
  if (v === "partially funded") return "partially-funded";
  if (v === "self funded") return "self-funded";
  return "";
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!isVercelProduction()) {
    return [];
  }

  const siteUrl = getSiteUrl();
  const latestScholarshipModified = scholarships.reduce(
    (latest, scholarship) => maxDate(latest, isoDateOrNow(scholarship.lastUpdated)),
    STATIC_LAST_MODIFIED,
  );
  const scholarshipPages = scholarships.map((s) => ({
    url: `${siteUrl}/scholarships/${s.slug}`,
    lastModified: isoDateOrNow(s.lastUpdated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const uniqueCountries = Array.from(new Set(scholarships.map((s) => s.country))).sort(
    (a, b) => a.localeCompare(b)
  );
  const uniqueDegrees = Array.from(new Set(scholarships.map((s) => s.degreeLevel))).sort(
    (a, b) => a.localeCompare(b)
  );
  const uniqueFunding = Array.from(new Set(scholarships.map((s) => s.fundingType)))
    .map((f) => ({ label: f, slug: toFundingSlug(f) }))
    .filter((x) => Boolean(x.slug))
    .sort((a, b) => a.label.localeCompare(b.label));

  const lastUpdatedByCountry = new Map<string, Date>();
  const lastUpdatedByDegree = new Map<string, Date>();
  const lastUpdatedByFunding = new Map<string, Date>();

  for (const s of scholarships) {
    const updated = isoDateOrNow(s.lastUpdated);

    const prevCountry = lastUpdatedByCountry.get(s.country);
    if (!prevCountry || updated > prevCountry) lastUpdatedByCountry.set(s.country, updated);

    const prevDegree = lastUpdatedByDegree.get(s.degreeLevel);
    if (!prevDegree || updated > prevDegree) lastUpdatedByDegree.set(s.degreeLevel, updated);

    const prevFunding = lastUpdatedByFunding.get(s.fundingType);
    if (!prevFunding || updated > prevFunding) lastUpdatedByFunding.set(s.fundingType, updated);
  }

  const blogEntries: MetadataRoute.Sitemap = [];
  let latestBlogModified = STATIC_LAST_MODIFIED;
  if (isWordPressConfigured()) {
    try {
      const posts = await getWordPressAllPostSlugs({
        maxPosts: 500,
        revalidateSeconds: 60 * 60,
      });
      latestBlogModified = posts.reduce(
        (latest, post) => maxDate(latest, isoDateOrNow(post.modified)),
        STATIC_LAST_MODIFIED,
      );
      blogEntries.push({
        url: `${siteUrl}/blog`,
        lastModified: latestBlogModified,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      });
      blogEntries.push(
        ...posts.map((p) => ({
          url: `${siteUrl}/blog/${p.slug}`,
          lastModified: isoDateOrNow(p.modified),
          changeFrequency: "weekly" as const,
          priority: 0.5,
        })),
      );
    } catch {
      // If WordPress is temporarily unavailable, keep sitemap stable.
      blogEntries.push({
        url: `${siteUrl}/blog`,
        lastModified: STATIC_LAST_MODIFIED,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      });
    }
  }

  const homepageLastModified = maxDate(
    latestScholarshipModified,
    latestBlogModified,
  );

  return [
    {
      url: siteUrl,
      lastModified: homepageLastModified,
      priority: 1,
    },
    ...blogEntries,
    {
      url: `${siteUrl}/contact`,
      lastModified: STATIC_LAST_MODIFIED,
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: STATIC_LAST_MODIFIED,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: STATIC_LAST_MODIFIED,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/loughborough-global-impact-scholarship-application-guide`,
      lastModified: STATIC_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/scholarships`,
      lastModified: latestScholarshipModified,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/europe-scholarships-2026`,
      lastModified: latestScholarshipModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/fully-funded-scholarships-2026`,
      lastModified: latestScholarshipModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/scholarships-still-open-2026`,
      lastModified: latestScholarshipModified,
      changeFrequency: "daily" as const,
      priority: 0.85,
    },
    {
      url: `${siteUrl}/scholarship-results-2026`,
      lastModified: latestBlogModified,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    },
    {
      url: `${siteUrl}/countries`,
      lastModified: latestScholarshipModified,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/degrees`,
      lastModified: latestScholarshipModified,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/funding`,
      lastModified: latestScholarshipModified,
      priority: 0.7,
    },
    ...uniqueCountries.map((country) => {
      const slug = toSegment(country);
      const lastModified = lastUpdatedByCountry.get(country) ?? STATIC_LAST_MODIFIED;
      return {
        url: `${siteUrl}/countries/${slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      };
    }),
    ...uniqueDegrees.map((degree) => {
      const slug = toSegment(degree);
      const lastModified = lastUpdatedByDegree.get(degree) ?? STATIC_LAST_MODIFIED;
      return {
        url: `${siteUrl}/degrees/${slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      };
    }),
    ...uniqueFunding.map((f) => {
      const lastModified = lastUpdatedByFunding.get(f.label) ?? STATIC_LAST_MODIFIED;
      return {
        url: `${siteUrl}/funding/${f.slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      };
    }),
    ...scholarshipPages,
  ];
}
