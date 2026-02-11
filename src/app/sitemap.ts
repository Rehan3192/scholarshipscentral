// FILE: src/app/sitemap.ts

import type { MetadataRoute } from "next";
import { scholarships } from "@/data/scholarships";
import { toSegment } from "@/lib/helpers";
import { getSiteUrl, isVercelProduction } from "@/lib/site";
import {
  getWordPressAllPostSlugs,
  isWordPressConfigured,
} from "@/lib/wordpress";

function isoDateOrNow(value: string | undefined) {
  if (!value) return new Date();
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return new Date();
  return d;
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
  if (isWordPressConfigured()) {
    blogEntries.push({
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.6,
    });

    try {
      const posts = await getWordPressAllPostSlugs({
        maxPosts: 500,
        revalidateSeconds: 60 * 60,
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
    }
  }

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      priority: 1,
    },
    ...blogEntries,
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${siteUrl}/loughborough-global-impact-scholarship-application-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/scholarships`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${siteUrl}/countries`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${siteUrl}/degrees`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${siteUrl}/funding`,
      lastModified: new Date(),
      priority: 0.7,
    },
    ...uniqueCountries.map((country) => {
      const slug = toSegment(country);
      const lastModified = lastUpdatedByCountry.get(country) ?? new Date();
      return {
        url: `${siteUrl}/countries/${slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      };
    }),
    ...uniqueDegrees.map((degree) => {
      const slug = toSegment(degree);
      const lastModified = lastUpdatedByDegree.get(degree) ?? new Date();
      return {
        url: `${siteUrl}/degrees/${slug}`,
        lastModified,
        changeFrequency: "weekly" as const,
        priority: 0.6,
      };
    }),
    ...uniqueFunding.map((f) => {
      const lastModified = lastUpdatedByFunding.get(f.label) ?? new Date();
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
