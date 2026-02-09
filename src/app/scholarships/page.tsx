import type { Metadata } from "next";
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

export default function ScholarshipsPage() {
  const topItems = [...scholarships]
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""))
    .slice(0, 10)
    .map((s) => ({ name: s.title, href: `/scholarships/${s.slug}` }));

  const listing = scholarships.map((s) => ({
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
      </header>

      <Suspense
        fallback={
          <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-5" />
        }
      >
        <QuickFilters />
      </Suspense>

      <Suspense
        fallback={
          <p className="text-sm text-gray-600">Loading scholarships...</p>
        }
      >
        <ScholarshipFilters scholarships={listing} />
      </Suspense>
    </div>
  );
}
