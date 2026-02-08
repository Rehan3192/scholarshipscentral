"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ScholarshipCard from "./ScholarshipCard";
import type { Scholarship } from "@/data/types";
import { COUNTRIES, DEGREE_LEVELS, FUNDING_TYPES } from "@/data/values";

type Props = {
  scholarships: Scholarship[];
};

type SortKey = "updated" | "deadline" | "title";

const DEFAULT_SORT: SortKey = "updated";
const PAGE_SIZE = 10;

function parsePage(value: string | null) {
  const n = Number(value);
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
  // Best-effort parsing for strings like "October 15".
  // Unknown/rolling deadlines sort last.
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

  // If already passed this year, treat as next year (helps "upcoming deadline" sorting).
  if (candidate.getTime() < now.getTime()) {
    candidate.setFullYear(year + 1);
  }

  return candidate.getTime();
}

export default function ScholarshipFilters({ scholarships }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamsString = searchParams.toString();
  const prevSearchParamsStringRef = useRef(searchParamsString);

  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [country, setCountry] = useState(searchParams.get("country") ?? "All");
  const [degree, setDegree] = useState(searchParams.get("degree") ?? "All");
  const [funding, setFunding] = useState(searchParams.get("funding") ?? "All");
  const [sort, setSort] = useState<SortKey>(
    (searchParams.get("sort") as SortKey) ?? DEFAULT_SORT
  );
  const [page, setPage] = useState<number>(parsePage(searchParams.get("page")));

  const nextUrl = useMemo(() => {
    const params = new URLSearchParams();

    const q = query.trim();
    if (q) params.set("q", q);
    if (country !== "All") params.set("country", country);
    if (degree !== "All") params.set("degree", degree);
    if (funding !== "All") params.set("funding", funding);
    if (sort !== DEFAULT_SORT) params.set("sort", sort);
    if (page !== 1) params.set("page", String(page));

    const queryString = params.toString();
    return queryString ? `/scholarships?${queryString}` : "/scholarships";
  }, [query, country, degree, funding, sort, page]);

  // Sync state -> URL (shareable + crawlable).
  useEffect(() => {
    const urlJustChanged = prevSearchParamsStringRef.current !== searchParamsString;
    prevSearchParamsStringRef.current = searchParamsString;

    // If the URL changed (e.g. user clicked a quick-filter link or used back/forward),
    // treat the URL as the source of truth and let the URL -> state effect reconcile.
    if (urlJustChanged) return;

    const current =
      window.location.pathname + (window.location.search ?? "");
    if (current !== nextUrl) {
      router.replace(nextUrl, { scroll: false });
    }
  }, [nextUrl, router, searchParamsString]);

  // Sync URL -> state (back/forward navigation, direct loads with query).
  useEffect(() => {
    const nextQuery = searchParams.get("q") ?? "";
    const nextCountry = searchParams.get("country") ?? "All";
    const nextDegree = searchParams.get("degree") ?? "All";
    const nextFunding = searchParams.get("funding") ?? "All";
    const nextSort = (searchParams.get("sort") as SortKey) ?? DEFAULT_SORT;
    const nextPage = parsePage(searchParams.get("page"));

    if (nextQuery !== query) setQuery(nextQuery);
    if (nextCountry !== country) setCountry(nextCountry);
    if (nextDegree !== degree) setDegree(nextDegree);
    if (nextFunding !== funding) setFunding(nextFunding);
    if (nextSort !== sort) setSort(nextSort);
    if (nextPage !== page) setPage(nextPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParamsString]);

  const uniqueCountries = useMemo(
    () => ["All", ...COUNTRIES],
    []
  );
  const uniqueDegrees = useMemo(
    () => ["All", ...DEGREE_LEVELS],
    []
  );
  const uniqueFunding = useMemo(
    () => ["All", ...FUNDING_TYPES],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return scholarships.filter((s) => {
      if (q) {
        const haystack =
          `${s.title} ${s.overview} ${s.country} ${s.degreeLevel} ${s.fundingType} ${s.officialSource}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return (
        (country === "All" || s.country === country) &&
        (degree === "All" || s.degreeLevel === degree) &&
        (funding === "All" || s.fundingType === funding)
      );
    });
  }, [query, country, degree, funding, scholarships]);

  const sorted = useMemo(() => {
    const copy = [...filtered];
    copy.sort((a, b) => {
      if (sort === "title") {
        return a.title.localeCompare(b.title);
      }
      if (sort === "deadline") {
        return deadlineScore(a.deadline) - deadlineScore(b.deadline);
      }
      // "updated"
      return (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? "");
    });
    return copy;
  }, [filtered, sort]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = sorted.slice(start, start + PAGE_SIZE);

  const resetFilters = () => {
    setQuery("");
    setCountry("All");
    setDegree("All");
    setFunding("All");
    setSort(DEFAULT_SORT);
    setPage(1);
    router.replace("/scholarships");
  };

  const hasActiveFilters =
    query.trim() !== "" ||
    country !== "All" ||
    degree !== "All" ||
    funding !== "All" ||
    sort !== DEFAULT_SORT;

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <aside className="h-fit rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Filter scholarships
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Narrow results by country, degree level, or funding type.
        </p>

        <div className="mt-5 space-y-4">
          <div className="space-y-1">
            <label
              htmlFor="filter-q"
              className="text-sm font-medium text-gray-700"
            >
              Search
            </label>
            <input
              id="filter-q"
              name="q"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
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
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {uniqueCountries.map((c) => (
                <option key={c} value={c}>
                  {c}
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
              value={degree}
              onChange={(e) => {
                setDegree(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {uniqueDegrees.map((d) => (
                <option key={d} value={d}>
                  {d}
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
              value={funding}
              onChange={(e) => {
                setFunding(e.target.value);
                setPage(1);
              }}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              {uniqueFunding.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={resetFilters}
            className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Reset filters
          </button>
        </div>
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

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-600">
              Sort
            </label>
            <select
              id="sort"
              name="sort"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as SortKey);
                setPage(1);
              }}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="updated">Recently updated</option>
              <option value="deadline">Upcoming deadline</option>
              <option value="title">Title (A-Z)</option>
            </select>
          </div>
        </div>

        {hasActiveFilters ? (
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm">
            <span className="font-medium text-gray-700">Active filters:</span>

            {query.trim() ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setPage(1);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Search: {query.trim()}
                <span aria-hidden="true">×</span>
              </button>
            ) : null}

            {country !== "All" ? (
              <button
                type="button"
                onClick={() => {
                  setCountry("All");
                  setPage(1);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Country: {country}
                <span aria-hidden="true">×</span>
              </button>
            ) : null}

            {degree !== "All" ? (
              <button
                type="button"
                onClick={() => {
                  setDegree("All");
                  setPage(1);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Degree: {degree}
                <span aria-hidden="true">×</span>
              </button>
            ) : null}

            {funding !== "All" ? (
              <button
                type="button"
                onClick={() => {
                  setFunding("All");
                  setPage(1);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Funding: {funding}
                <span aria-hidden="true">×</span>
              </button>
            ) : null}

            {sort !== DEFAULT_SORT ? (
              <button
                type="button"
                onClick={() => {
                  setSort(DEFAULT_SORT);
                  setPage(1);
                }}
                className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Sort: {sort === "deadline" ? "Upcoming deadline" : "Title (A-Z)"}
                <span aria-hidden="true">×</span>
              </button>
            ) : null}

            <button
              type="button"
              onClick={resetFilters}
              className="ml-auto inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Clear all
            </button>
          </div>
        ) : null}

        {sorted.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-700">
            <p className="mb-3">
              No scholarships match these filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="grid gap-4">
              {pageItems.map((s) => (
                <ScholarshipCard key={s.slug} scholarship={s} />
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700">
              <span>
                Page {currentPage} of {totalPages}
              </span>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage <= 1}
                  className="rounded-lg border border-gray-300 bg-white px-3 py-2 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage >= totalPages}
                  className="rounded-lg border border-gray-300 bg-white px-3 py-2 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
