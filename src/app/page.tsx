import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Suspense } from "react";
import { scholarships } from "@/data/scholarships";
import { FEATURED_HUB_PAGES } from "@/lib/featuredHubPages";
import { toSegment } from "@/lib/helpers";
import {
  extractDeadlineDates,
  isRollingDeadline,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";
import {
  getWordPressPosts,
  isWordPressConfigured,
  stripHtmlToText,
  type WordPressPostListItem,
} from "@/lib/wordpress";

const BLOG_FETCH_TIMEOUT_MS = 2000;
const BLOG_REVALIDATE_SECONDS = 5 * 60;
const SHARED_BLOG_POSTS_PAGE_SIZE = 20;
const HOMEPAGE_BLOG_POST_LIMIT = 3;
const LATEST_SCHOLARSHIPS = [...scholarships]
  .filter((scholarship) => isStillOpen(scholarship.deadline))
  .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""))
  .slice(0, 6);
const CLOSING_SOON_SCHOLARSHIPS = [...scholarships]
  .filter((scholarship) => isStillOpen(scholarship.deadline))
  .sort(sortByUpcomingDeadline)
  .slice(0, 4);

const COUNTRY_COUNTS = new Map<string, number>();
for (const s of scholarships) {
  COUNTRY_COUNTS.set(s.country, (COUNTRY_COUNTS.get(s.country) ?? 0) + 1);
}

const TOP_COUNTRIES = Array.from(COUNTRY_COUNTS.entries())
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, 9)
  .map(([country, count]) => ({
    country,
    count,
    href: `/countries/${toSegment(country)}`,
  }));
const FEATURED_COUNTRIES = TOP_COUNTRIES.slice(0, 3);
const OPEN_SCHOLARSHIP_COUNT = scholarships.filter((scholarship) =>
  isStillOpen(scholarship.deadline),
).length;
const FULLY_FUNDED_COUNT = scholarships.filter(
  (scholarship) => scholarship.fundingType === "Fully Funded",
).length;
const COUNTRY_TOTAL = COUNTRY_COUNTS.size;

const HERO_STATS = [
  { value: `${scholarships.length}`, label: "detailed scholarship guides" },
  { value: `${OPEN_SCHOLARSHIP_COUNT}`, label: "open or expected opportunities" },
  { value: `${COUNTRY_TOTAL}+`, label: "countries covered" },
  { value: `${FULLY_FUNDED_COUNT}`, label: "fully funded listings" },
] as const;

const TRUST_SIGNALS = [
  "Official links only",
  "Eligibility-based matching",
  "Dates clearly labelled",
  "No signup required",
] as const;

const POPULAR_SEARCHES = [
  { label: "Fully funded scholarships 2026", href: "/fully-funded-scholarships-2026" },
  { label: "Scholarships without IELTS", href: "/europe-scholarships-without-ielts-2026" },
  { label: "Masters scholarships", href: "/degrees/masters" },
  { label: "Government scholarships", href: "/government-scholarships-still-open-2026" },
  { label: "Scholarships still open", href: "/scholarships-still-open-2026" },
] as const;

const HERO_QUICK_LINKS = [
  { label: "Fully funded", href: "/funding/fully-funded" },
  { label: "Without IELTS", href: "/europe-scholarships-without-ielts-2026" },
  { label: "Masters", href: "/degrees/masters" },
  { label: "Closing soon", href: "/scholarships-still-open-2026" },
] as const;

export const metadata: Metadata = {
  title: "Scholarships Central | Fully Funded Scholarships 2026",
  description:
    "Browse verified scholarships by country, degree, funding type, and deadline with official application links for 2026 opportunities worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Scholarships Central | Fully Funded Scholarships 2026",
    description:
      "Find verified scholarship listings, active deadlines, country hubs, and official application links.",
    url: "/",
  },
  twitter: {
    title: "Scholarships Central | Fully Funded Scholarships 2026",
    description:
      "Find verified scholarship listings, active deadlines, country hubs, and official application links.",
  },
};

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function formatShortDate(value: Date) {
  return value.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function shortDeadlineLabel(deadline: string) {
  if (isRollingDeadline(deadline)) return "Rolling deadline";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const nextDate = extractDeadlineDates(deadline)
    .filter((date) => date.getTime() >= today.getTime())
    .sort((a, b) => a.getTime() - b.getTime())[0];

  if (nextDate) return `Next deadline: ${formatShortDate(nextDate)}`;

  const compact = deadline
    .split("(")[0]
    .split(";")[0]
    .trim();

  return compact ? `Window: ${compact}` : "Deadline varies";
}

async function getHomepageBlogPosts(): Promise<WordPressPostListItem[]> {
  if (!isWordPressConfigured()) return [];

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), BLOG_FETCH_TIMEOUT_MS);

  try {
    const posts = await getWordPressPosts({
      perPage: SHARED_BLOG_POSTS_PAGE_SIZE,
      revalidateSeconds: BLOG_REVALIDATE_SECONDS,
      signal: controller.signal,
    });
    return posts.slice(0, HOMEPAGE_BLOG_POST_LIMIT);
  } catch {
    return [];
  } finally {
    clearTimeout(timeoutId);
  }
}

function SectionFallback({ label }: { label: string }) {
  return (
    <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 text-sm text-slate-700 shadow-sm">
      <p className="m-0">{label}</p>
    </div>
  );
}

function FeaturedHubSection() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {FEATURED_HUB_PAGES.map((page) => (
        <Link
          key={page.slug}
          href={page.href}
          className="group rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/60 to-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-blue-300 hover:bg-blue-50/30 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-800">
              Featured
            </span>
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
              {page.label}
            </span>
          </div>
          <div className="mt-3 text-base font-semibold text-slate-900 group-hover:text-blue-800">
            {page.title}
          </div>
          <div className="mt-2 line-clamp-3 text-sm text-slate-700">
            {page.description}
          </div>
          <div className="mt-4 text-sm font-semibold text-blue-700">
            Open page &rarr;
          </div>
        </Link>
      ))}
    </div>
  );
}

async function LatestBlogSection() {
  const blogPosts = await getHomepageBlogPosts();

  return (
    <>
      {blogPosts.length > 0 ? (
        <div className="space-y-3">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const title = stripHtmlToText(post.title.rendered);
              const excerpt =
                stripHtmlToText(post.excerpt.rendered) ||
                "Read the full post for details.";

              return (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  <div className="text-xs font-semibold text-slate-500">
                    {formatDate(post.date)}
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900">
                    {title}
                  </div>
                  <div className="mt-2 text-sm text-slate-700">
                    {excerpt}
                  </div>
                  <div className="mt-3 text-sm font-semibold text-blue-700">
                    Read more &rarr;
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <SectionFallback label="New guides and updates will appear here." />
      )}
    </>
  );
}

export default function HomePage() {
  return (
    <div className="py-8 space-y-9">
      <header className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-6 shadow-sm sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <p className="inline-flex rounded-full border border-blue-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-800">
              Scholarships Central • Personalized scholarship search
            </p>

            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Stop guessing. Find scholarships you&apos;re actually eligible for.
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
              Search verified scholarship guides, compare deadlines, and use the
              Finder to get recommendations based on your degree, nationality,
              destination, funding needs, and IELTS preference.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/find-scholarships"
                className="inline-flex items-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                Find Scholarships for Me <span className="ml-1" aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/scholarships"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Browse all scholarships
              </Link>
            </div>

            <p className="mt-3 mb-0 text-sm font-medium text-slate-600">
              No signup required. Takes less than two minutes.
            </p>

            <div className="mt-6 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
              {HERO_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/80 bg-white/75 p-3 shadow-sm"
                >
                  <div className="text-2xl font-bold text-slate-950">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-semibold leading-5 text-slate-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Popular scholarship paths">
              {HERO_QUICK_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center rounded-full border border-blue-200 bg-white/80 px-3 py-1.5 text-sm font-semibold text-blue-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <form
              action="/scholarships"
              method="get"
              role="search"
              className="mt-8 max-w-xl border-t border-slate-200 pt-5"
            >
              <label
                htmlFor="home-search"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Already know what you’re looking for?
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="home-search"
                  name="q"
                  placeholder="Search scholarships and articles..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <aside className="rounded-3xl border border-white/80 bg-white/85 p-5 shadow-sm">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
              Personalized Finder
            </p>
            <Image
              src="/scholarship-finder-hero.webp"
              alt="Student reviewing personalized scholarship recommendations"
              width={960}
              height={720}
              priority
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
              className="mt-3 h-auto w-full rounded-xl"
            />
            <h2 className="mt-4 text-xl font-semibold text-slate-900">
              A shortlist you can understand
            </h2>
            <p className="mt-2 mb-0 text-sm leading-6 text-slate-700">
              Answer six quick questions and receive ranked recommendations
              with clear match reasons and details to verify before applying.
            </p>
            {CLOSING_SOON_SCHOLARSHIPS[0] ? (
              <Link
                href={`/scholarships/${CLOSING_SOON_SCHOLARSHIPS[0].slug}`}
                className="mt-4 block rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm transition-colors duration-200 motion-reduce:transition-none hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
              >
                <span className="font-semibold text-amber-950">
                  Closing soon:
                </span>{" "}
                <span className="font-medium text-slate-900">
                  {CLOSING_SOON_SCHOLARSHIPS[0].title}
                </span>
                <span className="mt-1 block text-xs font-semibold text-amber-900">
                  {shortDeadlineLabel(CLOSING_SOON_SCHOLARSHIPS[0].deadline)}
                </span>
              </Link>
            ) : null}
          </aside>
        </div>

        <div className="mt-6 grid gap-3 border-t border-blue-100 pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST_SIGNALS.map((signal) => (
            <div
              key={signal}
              className="rounded-xl border border-emerald-200 bg-white/75 px-3 py-2 text-sm font-semibold text-emerald-900"
            >
              {signal}
            </div>
          ))}
        </div>
      </header>

      <section className="space-y-3 content-visibility-auto">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Latest updates
          </h2>
          <Link href="/scholarships" className="text-sm font-medium text-blue-700 hover:underline">
            Browse all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LATEST_SCHOLARSHIPS.map((s) => (
            <Link
              key={s.slug}
              href={`/scholarships/${s.slug}`}
              className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <div className="text-base font-semibold text-slate-900">
                {s.title}
              </div>
              <div className="mt-2 text-sm text-slate-700 line-clamp-3">
                {s.overview}
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600">
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">
                  {s.country}
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">
                  {s.degreeLevel}
                </span>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold">
                  {s.fundingType}
                </span>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 font-semibold text-amber-900">
                  {shortDeadlineLabel(s.deadline)}
                </span>
              </div>
              <div className="mt-3 text-xs text-slate-500">
                Updated: {s.lastUpdated}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {CLOSING_SOON_SCHOLARSHIPS.length > 0 ? (
        <section className="space-y-3 content-visibility-auto">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="text-2xl font-semibold text-slate-900">
              Closing soon
            </h2>
            <Link href="/scholarships-still-open-2026" className="text-sm font-medium text-blue-700 hover:underline">
              View still-open scholarships
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CLOSING_SOON_SCHOLARSHIPS.map((s) => (
              <Link
                key={s.slug}
                href={`/scholarships/${s.slug}`}
                className="rounded-2xl border border-amber-200 bg-amber-50/70 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-amber-300 hover:bg-amber-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2"
              >
                <div className="text-sm font-semibold text-amber-900">
                  {shortDeadlineLabel(s.deadline)}
                </div>
                <div className="mt-2 text-base font-semibold text-slate-900">
                  {s.title}
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
                  <span className="rounded-full border border-amber-200 bg-white px-2.5 py-1 font-semibold">
                    {s.country}
                  </span>
                  <span className="rounded-full border border-amber-200 bg-white px-2.5 py-1 font-semibold">
                    {s.degreeLevel}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-3 content-visibility-auto">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Browse by degree
          </h2>
          <p className="text-sm text-slate-600">
            Start with your current or target program level.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <Link
            href="/degrees/bachelors"
            className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-slate-900">
              Bachelors
            </div>
            <div className="mt-1 text-sm text-slate-700">
              Undergraduate scholarships worldwide.
            </div>
          </Link>

          <Link
            href="/degrees/masters"
            className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-slate-900">
              Masters
            </div>
            <div className="mt-1 text-sm text-slate-700">
              Graduate scholarships for international students.
            </div>
          </Link>

          <Link
            href="/degrees/phd"
            className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-slate-900">
              PhD
            </div>
            <div className="mt-1 text-sm text-slate-700">
              Doctoral scholarships with research opportunities.
            </div>
          </Link>
        </div>
      </section>

      <section className="space-y-3 content-visibility-auto">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Browse by country
          </h2>
          <Link href="/countries" className="text-sm font-medium text-blue-700 hover:underline">
            View all countries
          </Link>
        </div>

        <Image
          src="/scholarship-country-discovery.webp"
          alt="International students exploring scholarship destinations around the world"
          width={1200}
          height={420}
          sizes="(min-width: 1152px) 1120px, calc(100vw - 32px)"
          className="h-auto w-full rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40"
        />

        <div className="grid gap-4 sm:grid-cols-3">
          {FEATURED_COUNTRIES.map((country) => (
            <Link
              key={country.country}
              href={country.href}
              className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <div className="font-semibold text-slate-900">
                {country.country === "United Kingdom" ? "UK" : country.country}
              </div>
              <div className="mt-1 text-sm text-slate-700">
                {country.count} current scholarship listing{country.count === 1 ? "" : "s"}.
              </div>
            </Link>
          ))}
        </div>

        {TOP_COUNTRIES.length > 0 ? (
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="m-0 text-base font-semibold text-slate-900">
                Popular destinations
              </h3>
              <span className="text-sm text-slate-600">
                Based on current listings
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {TOP_COUNTRIES.map((c) => (
                <Link
                  key={c.country}
                  href={c.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  {c.country}
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                    {c.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="space-y-3 content-visibility-auto">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Featured scholarship hubs
          </h2>
          <Link href="/scholarship-results-2026" className="text-sm font-medium text-blue-700 hover:underline">
            Scholarship results 2026
          </Link>
        </div>

        <FeaturedHubSection />
      </section>

      <section className="space-y-3 content-visibility-auto">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Latest guides
          </h2>
          <Link href="/blog" className="text-sm font-medium text-blue-700 hover:underline">
            View all posts
          </Link>
        </div>

        <Suspense fallback={<SectionFallback label="Loading latest guides..." />}>
          <LatestBlogSection />
        </Suspense>
      </section>

      <section className="space-y-3 content-visibility-auto">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Popular searches
          </h2>
          <p className="text-sm text-slate-600">
            Common starting points for 2026 applications.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm">
          {POPULAR_SEARCHES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-3 content-visibility-auto">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">
            Browse by funding type
          </h2>
          <p className="text-sm text-slate-600">
            Filter by full or partial funding coverage.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/funding/fully-funded"
            className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-slate-900">
              Fully funded
            </div>
            <div className="mt-1 text-sm text-slate-700">
              Tuition + stipend (and often travel) covered.
            </div>
          </Link>

          <Link
            href="/funding/partially-funded"
            className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            <div className="font-semibold text-slate-900">
              Partially funded
            </div>
            <div className="mt-1 text-sm text-slate-700">
              Partial tuition waivers or limited stipends.
            </div>
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8 content-visibility-auto">
        <h2 className="mt-0 text-xl font-semibold text-slate-900">
          Explore more
        </h2>
        <p className="mt-2 text-sm text-slate-700">
          Jump into the directory by country, degree, or funding type.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/countries"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Browse countries
          </Link>
          <Link
            href="/degrees"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Browse degrees
          </Link>
          <Link
            href="/funding"
            className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Browse funding
          </Link>
        </div>
      </section>
    </div>
  );
}

