// FILE: src/app/funding/[type]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { scholarships } from "@/data/scholarships";
import ScholarshipFilters from "@/components/scholarship/ScholarshipFilters";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/StructuredData";

type PageProps = {
  params: Promise<{
    type: string;
  }>;
};

function normalizeFunding(type: string) {
  if (type === "fully-funded") return "Fully Funded";
  if (type === "partially-funded") return "Partially Funded";
  if (type === "self-funded") return "Self Funded";
  return "";
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { type } = await params;
  const funding = normalizeFunding(type);

  if (!funding) {
    return { robots: { index: false, follow: false } };
  }

  return {
    title: `${funding} Scholarships | Scholarships Central`,
    description: `Browse ${funding.toLowerCase()} scholarships worldwide for international students.`,
    alternates: {
      canonical: `/funding/${type}`,
    },
  };
}

export default async function FundingPage({ params }: PageProps) {
  const { type } = await params;
  const funding = normalizeFunding(type);

  if (!funding) {
    notFound();
  }

  const filtered = scholarships.filter((s) => s.fundingType === funding);

  if (filtered.length === 0) {
    notFound();
  }

  const otherType = type === "fully-funded" ? "partially-funded" : "fully-funded";
  const otherLabel = otherType === "fully-funded" ? "Fully Funded" : "Partially Funded";
  const topItems = [...filtered]
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""))
    .slice(0, 10)
    .map((s) => ({ name: s.title, href: `/scholarships/${s.slug}` }));

  const listing = filtered.map((s) => ({
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
          { label: `${funding} Scholarships`, href: `/funding/${type}` },
        ]}
      />
      <ItemListJsonLd pagePath={`/funding/${type}`} items={topItems} />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          {funding} Scholarships
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Browse {funding.toLowerCase()} scholarships worldwide. We only link to
          official external application pages.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
          <Link
            href="/scholarships"
            className="font-medium text-blue-700 hover:underline"
          >
            All scholarships
          </Link>
          <span className="text-gray-400">•</span>
          <Link
            href={`/funding/${otherType}`}
            className="font-medium text-blue-700 hover:underline"
          >
            Explore {otherLabel.toLowerCase()}
          </Link>
        </div>
      </header>

      <Suspense
        fallback={<p className="text-sm text-gray-600">Loading scholarships...</p>}
      >
        <ScholarshipFilters scholarships={listing} />
      </Suspense>
    </div>
  );
}
