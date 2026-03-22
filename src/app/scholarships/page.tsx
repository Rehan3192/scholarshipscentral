import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { scholarships } from "@/data/scholarships";
import ScholarshipFilters from "@/components/scholarship/ScholarshipFilters";
import QuickFilters from "@/components/scholarship/QuickFilters";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "All Scholarships | Scholarships Central",
  description:
    "Browse fully funded, partial, and international scholarships worldwide.",
};

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

function QuickFiltersFallback() {
  return (
    <div
      aria-hidden="true"
      className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5"
    >
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={`quick-filter-skeleton-${index}`}
            className="h-8 w-24 rounded-full bg-gray-100 animate-pulse"
          />
        ))}
      </div>
    </div>
  );
}

function FiltersFallback() {
  return (
    <div aria-hidden="true" className="space-y-4">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
        <div className="h-10 w-48 rounded-lg bg-gray-100 animate-pulse" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={`scholarship-card-skeleton-${index}`}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="h-5 w-3/4 rounded bg-gray-100 animate-pulse" />
            <div className="mt-3 h-4 w-full rounded bg-gray-100 animate-pulse" />
            <div className="mt-2 h-4 w-5/6 rounded bg-gray-100 animate-pulse" />
            <div className="mt-4 flex gap-2">
              <div className="h-6 w-20 rounded-full bg-gray-100 animate-pulse" />
              <div className="h-6 w-20 rounded-full bg-gray-100 animate-pulse" />
              <div className="h-6 w-24 rounded-full bg-gray-100 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ScholarshipsPage() {
  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
        ]}
      />
      <ItemListJsonLd pagePath="/scholarships" items={TOP_ITEMS} />

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
          <span className="text-gray-400">&bull;</span>
          <Link href="/europe-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Europe scholarships 2026
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Fully funded scholarships 2026
          </Link>
        </div>
      </header>

      <div className="content-visibility-auto">
        <Suspense
          fallback={
            <QuickFiltersFallback />
          }
        >
          <QuickFilters />
        </Suspense>
      </div>

      <div className="content-visibility-auto">
        <Suspense
          fallback={
            <FiltersFallback />
          }
        >
          <ScholarshipFilters scholarships={LISTING} />
        </Suspense>
      </div>
    </div>
  );
}
