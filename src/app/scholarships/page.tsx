import type { Metadata } from "next";
import Link from "next/link";
import { scholarships } from "@/data/scholarships";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/StructuredData";
import { COUNTRIES, DEGREE_LEVELS, FUNDING_TYPES } from "@/data/values";

export const metadata: Metadata = {
  title: "All Scholarships | Scholarships Central",
  description:
    "Browse fully funded, partial, and international scholarships worldwide.",
};

type ScholarshipsPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

type SortKey = "updated" | "deadline" | "title";

const DEFAULT_SORT: SortKey = "updated";
const PAGE_SIZE = 10;

const TOP_ITEMS = [...scholarships]
  .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""))
  .slice(0, 10)
  .map((s) => ({ name: s.title, href: `/scholarships/${s.slug}` }));

const LISTING = scholarships.map((s) => ({
  slug: s.slug,
  title: s.title,
  overview: s.overview,
  country: s.country,
  degreeLevel: s.degreeLevel,
  fundingType: s.fundingType,
  deadline: s.deadline,
  duration: s.duration,
  applyUrl: s.applyUrl,
  officialSource: s.officialSource,
  lastUpdated: s.lastUpdated,
}));

const QUICK_FILTERS: Array<{
  label: string;
  params: Record<string, string>;
}> = [
  { label: "Fully funded", params: { funding: "Fully Funded" } },
  { label: "Partially funded", params: { funding: "Partially Funded" } },
  { label: "Germany", params: { country: "Germany" } },
  { label: "USA", params: { country: "USA" } },
  { label: "UK", params: { country: "United Kingdom" } },
  { label: "Masters", params: { degree: "Masters" } },
  { label: "PhD", params: { degree: "PhD" } },
];

function getFirstValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

function isCountryValue(value: string): value is (typeof COUNTRIES)[number] {
  return COUNTRIES.includes(value as (typeof COUNTRIES)[number]);
}

function isDegreeValue(value: string): value is (typeof DEGREE_LEVELS)[number] {
  return DEGREE_LEVELS.includes(value as (typeof DEGREE_LEVELS)[number]);
}

function isFundingValue(value: string): value is (typeof FUNDING_TYPES)[number] {
  return FUNDING_TYPES.includes(value as (typeof FUNDING_TYPES)[number]);
}

function parsePage(value: string | string[] | undefined) {
  const n = Number(getFirstValue(value));
  if (!Number.isFinite(n)) return 1;
  return Math.max(1, Math.floor(n));
}

function monthIndexFromName(name: string) {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  return months.indexOf(name.toLowerCase());
}

function deadlineScore(deadline: string) {
  const normalized = deadline.trim().toLowerCase();
  if (!normalized) return Number.POSITIVE_INFINITY;
  if (normalized.includes("rolling") || normalized.includes("open")) {
    return Number.POSITIVE_INFINITY;
  }

  const parts = normalized.replaceAll(",", " ").split(/\s+/).filter(Boolean);
  if (parts.length < 2) return Number.POSITIVE_INFINITY;

  const monthIdx = monthIndexFromName(parts[0]);
  const day = Number(parts[1]);
  if (monthIdx < 0 || !Number.isFinite(day)) return Number.POSITIVE_INFINITY;

  const now = new Date();
  const year = now.getFullYear();
  const candidate = new Date(year, monthIdx, day, 23, 59, 59, 999);
  if (Number.isNaN(candidate.getTime())) return Number.POSITIVE_INFINITY;

  if (candidate.getTime() < now.getTime()) {
    candidate.setFullYear(year + 1);
  }

  return candidate.getTime();
}

function buildScholarshipsHref({
  query,
  country,
  degree,
  funding,
  sort,
  page,
}: {
  query?: string;
  country?: string;
  degree?: string;
  funding?: string;
  sort?: SortKey;
  page?: number;
}) {
  const params = new URLSearchParams();

  if (query?.trim()) params.set("q", query.trim());
  if (country && country !== "All") params.set("country", country);
  if (degree && degree !== "All") params.set("degree", degree);
  if (funding && funding !== "All") params.set("funding", funding);
  if (sort && sort !== DEFAULT_SORT) params.set("sort", sort);
  if (page && page > 1) params.set("page", String(page));

  const queryString = params.toString();
  return queryString ? `/scholarships?${queryString}` : "/scholarships";
}

function QuickFilterPill({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
        active
          ? "bg-gray-900 text-white hover:bg-gray-800"
          : "border border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
      ].join(" ")}
    >
      {label}
    </Link>
  );
}

function ActiveFilterChip({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
    >
      {label}
      <span aria-hidden="true">×</span>
    </Link>
  );
}

export default async function ScholarshipsPage({
  searchParams,
}: ScholarshipsPageProps) {
  const params = (await searchParams) ?? {};

  const query = getFirstValue(params.q);
  const rawCountry = getFirstValue(params.country);
  const rawDegree = getFirstValue(params.degree);
  const rawFunding = getFirstValue(params.funding);
  const rawSort = getFirstValue(params.sort);

  const country = isCountryValue(rawCountry) ? rawCountry : "All";
  const degree = isDegreeValue(rawDegree) ? rawDegree : "All";
  const funding = isFundingValue(rawFunding) ? rawFunding : "All";
  const sort = (["updated", "deadline", "title"] as const).includes(
    rawSort as SortKey,
  )
    ? (rawSort as SortKey)
    : DEFAULT_SORT;
  const requestedPage = parsePage(params.page);

  const filtered = LISTING.filter((scholarship) => {
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery) {
      const haystack = `${scholarship.title} ${scholarship.overview} ${scholarship.country} ${scholarship.degreeLevel} ${scholarship.fundingType} ${scholarship.officialSource}`.toLowerCase();
      if (!haystack.includes(normalizedQuery)) return false;
    }

    return (
      (country === "All" || scholarship.country === country) &&
      (degree === "All" || scholarship.degreeLevel === degree) &&
      (funding === "All" || scholarship.fundingType === funding)
    );
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "title") {
      return a.title.localeCompare(b.title);
    }

    if (sort === "deadline") {
      return deadlineScore(a.deadline) - deadlineScore(b.deadline);
    }

    return (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? "");
  });

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(requestedPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = sorted.slice(start, start + PAGE_SIZE);

  const hasActiveFilters =
    query.trim() !== "" ||
    country !== "All" ||
    degree !== "All" ||
    funding !== "All" ||
    sort !== DEFAULT_SORT;

  const topItems =
    pageItems.length > 0
      ? pageItems
          .slice(0, 10)
          .map((s) => ({ name: s.title, href: `/scholarships/${s.slug}` }))
      : TOP_ITEMS;

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
        ]}
      />
      <ItemListJsonLd pagePath="/scholarships" items={topItems} />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          All Scholarships
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Filter by country, degree level, and funding type. We only link to
          official external application pages.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
          <Link href="/scholarships-still-open-2026" className="font-medium text-blue-700 hover:underline">
            Scholarships still open 2026
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/europe-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Europe scholarships 2026
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Fully funded scholarships 2026
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="mt-0 text-base font-semibold text-gray-900">
            Quick filters
          </h2>
          <Link
            href="/scholarships"
            className={[
              "text-sm font-medium hover:underline",
              hasActiveFilters ? "text-blue-700" : "text-gray-400",
            ].join(" ")}
          >
            Clear filters
          </Link>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_FILTERS.map((filter) => {
            const href = buildScholarshipsHref({
              query,
              country: filter.params.country ?? country,
              degree: filter.params.degree ?? degree,
              funding: filter.params.funding ?? funding,
              sort,
            });
            const active =
              (filter.params.country ? filter.params.country === country : true) &&
              (filter.params.degree ? filter.params.degree === degree : true) &&
              (filter.params.funding ? filter.params.funding === funding : true) &&
              Boolean(
                filter.params.country || filter.params.degree || filter.params.funding,
              );

            return (
              <QuickFilterPill
                key={filter.label}
                label={filter.label}
                href={href}
                active={active}
              />
            );
          })}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Filter scholarships
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Narrow results by country, degree level, or funding type.
          </p>

          <form method="get" action="/scholarships" className="mt-5 space-y-4">
            <div className="space-y-1">
              <label htmlFor="filter-q" className="text-sm font-medium text-gray-700">
                Search
              </label>
              <input
                id="filter-q"
                name="q"
                defaultValue={query}
                placeholder="Title, provider, keyword..."
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="filter-country"
                className="text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="filter-country"
                name="country"
                defaultValue={country}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="All">All</option>
                {COUNTRIES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="filter-degree"
                className="text-sm font-medium text-gray-700"
              >
                Degree level
              </label>
              <select
                id="filter-degree"
                name="degree"
                defaultValue={degree}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="All">All</option>
                {DEGREE_LEVELS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="filter-funding"
                className="text-sm font-medium text-gray-700"
              >
                Funding type
              </label>
              <select
                id="filter-funding"
                name="funding"
                defaultValue={funding}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="All">All</option>
                {FUNDING_TYPES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                Sort
              </label>
              <select
                id="sort"
                name="sort"
                defaultValue={sort}
                className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="updated">Recently updated</option>
                <option value="deadline">Upcoming deadline</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="submit"
                className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Apply filters
              </button>
              <Link
                href="/scholarships"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Reset filters
              </Link>
            </div>
          </form>
        </aside>

        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="space-y-0.5">
              <h2 className="mt-0 text-lg font-semibold text-gray-900">
                Results
              </h2>
              <p className="mb-0 text-sm text-gray-600">
                {sorted.length} scholarship{sorted.length === 1 ? "" : "s"}
              </p>
            </div>
          </div>

          {hasActiveFilters ? (
            <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm">
              <span className="font-medium text-gray-700">Active filters:</span>

              {query.trim() ? (
                <ActiveFilterChip
                  label={`Search: ${query.trim()}`}
                  href={buildScholarshipsHref({
                    country,
                    degree,
                    funding,
                    sort,
                  })}
                />
              ) : null}

              {country !== "All" ? (
                <ActiveFilterChip
                  label={`Country: ${country}`}
                  href={buildScholarshipsHref({
                    query,
                    degree,
                    funding,
                    sort,
                  })}
                />
              ) : null}

              {degree !== "All" ? (
                <ActiveFilterChip
                  label={`Degree: ${degree}`}
                  href={buildScholarshipsHref({
                    query,
                    country,
                    funding,
                    sort,
                  })}
                />
              ) : null}

              {funding !== "All" ? (
                <ActiveFilterChip
                  label={`Funding: ${funding}`}
                  href={buildScholarshipsHref({
                    query,
                    country,
                    degree,
                    sort,
                  })}
                />
              ) : null}

              {sort !== DEFAULT_SORT ? (
                <ActiveFilterChip
                  label={`Sort: ${
                    sort === "deadline" ? "Upcoming deadline" : "Title (A-Z)"
                  }`}
                  href={buildScholarshipsHref({
                    query,
                    country,
                    degree,
                    funding,
                  })}
                />
              ) : null}

              <Link
                href="/scholarships"
                className="ml-auto inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Clear all
              </Link>
            </div>
          ) : null}

          {sorted.length === 0 ? (
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-700">
              <p className="mb-3">No scholarships match these filters.</p>
              <Link
                href="/scholarships"
                className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
              >
                Clear filters
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4">
                {pageItems.map((scholarship) => (
                  <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
                <span>
                  Page {currentPage} of {totalPages}
                </span>

                <div className="flex items-center gap-2">
                  <Link
                    href={buildScholarshipsHref({
                      query,
                      country,
                      degree,
                      funding,
                      sort,
                      page: Math.max(1, currentPage - 1),
                    })}
                    aria-disabled={currentPage <= 1}
                    className={[
                      "rounded-lg border border-gray-300 bg-white px-3 py-2 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50",
                      currentPage <= 1 ? "pointer-events-none opacity-50" : "",
                    ].join(" ")}
                  >
                    Previous
                  </Link>
                  <Link
                    href={buildScholarshipsHref({
                      query,
                      country,
                      degree,
                      funding,
                      sort,
                      page: Math.min(totalPages, currentPage + 1),
                    })}
                    aria-disabled={currentPage >= totalPages}
                    className={[
                      "rounded-lg border border-gray-300 bg-white px-3 py-2 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50",
                      currentPage >= totalPages ? "pointer-events-none opacity-50" : "",
                    ].join(" ")}
                  >
                    Next
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

