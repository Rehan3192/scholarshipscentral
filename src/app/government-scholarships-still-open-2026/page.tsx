import type { Metadata } from "next";
import Link from "next/link";

import HubLinkCard from "@/components/hubs/HubLinkCard";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import { scholarships } from "@/data/scholarships";
import {
  isEuropeanScholarship,
  isGovernmentScholarship,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Government Scholarships Still Open 2026 | Scholarships Central",
  description:
    "Browse government scholarships still open in 2026, including public-funding routes in Europe and other live ministry-backed opportunities.",
  alternates: {
    canonical: "/government-scholarships-still-open-2026",
  },
};

const GOVERNMENT_OPEN_LINKS = [
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Return to the full open-deadline pool once you finish narrowing by public funding.",
    badge: "Deadline hub",
  },
  {
    href: "/government-scholarships-in-europe-2026",
    title: "Government scholarships in Europe",
    description: "Use this if you want to narrow the still-open public routes by Europe only.",
    badge: "Europe",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Move from public-funding routes into the strongest cost-coverage pool.",
    badge: "Funding",
  },
  {
    href: "/countries/germany",
    title: "Germany scholarships",
    description: "Good next step for DAAD and Germany-based public-funding routes.",
    badge: "Country",
  },
  {
    href: "/countries/hungary",
    title: "Hungary scholarships",
    description: "Useful when Stipendium Hungaricum and other public routes are your focus.",
    badge: "Country",
  },
  {
    href: "/countries/azerbaijan",
    title: "Azerbaijan scholarships",
    description: "Go deeper into Azerbaijan public-funding routes if the open government pool fits your profile.",
    badge: "Country",
  },
] as const;

export default function GovernmentScholarshipsStillOpen2026Page() {
  const openGovernmentScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        isGovernmentScholarship(scholarship) && isStillOpen(scholarship.deadline),
    )
    .sort(sortByUpcomingDeadline);

  const europeCount = openGovernmentScholarships.filter(isEuropeanScholarship).length;
  const fullyFundedCount = openGovernmentScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const countryCount = new Set(
    openGovernmentScholarships.map((scholarship) => scholarship.country),
  ).size;

  const items = openGovernmentScholarships.slice(0, 20).map((scholarship) => ({
    name: scholarship.title,
    href: `/scholarships/${scholarship.slug}`,
  }));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          { label: "Scholarships still open 2026", href: "/scholarships-still-open-2026" },
          {
            label: "Government scholarships still open 2026",
            href: "/government-scholarships-still-open-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/government-scholarships-still-open-2026"
        title="Government Scholarships Still Open 2026"
        description="Browse government scholarships still open in 2026, including public-funding routes in Europe and other live ministry-backed opportunities."
      />
      <ItemListJsonLd
        pagePath="/government-scholarships-still-open-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Government scholarships still open 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want government or public-funding scholarship
          routes that still look active today.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/government-scholarships-in-europe-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {europeCount} Europe government routes open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/fully-funded-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {fullyFundedCount} fully funded public routes open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to still-open hub
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Open government routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {openGovernmentScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Government or ministry-backed scholarships that still look active now.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Countries covered
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {countryCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Destinations represented in the live government deadline pool.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Europe share
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {europeCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Open public-funding routes currently tied to Europe.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this open-government frontend page gives you
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page combines two high-intent filters at once: government funding
          and live deadlines. That makes it useful when you do not want to scan
          expired ministry-backed routes or mix them with general university awards.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Government scholarships can still be more complex than university-led
          routes, so use this page to shortlist active options first, then read the
          official call carefully for nomination rules, embassy processing, or central portals.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Government still-open cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to narrow live public-funding routes by Europe, country, or funding level.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GOVERNMENT_OPEN_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All government scholarships still open
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {openGovernmentScholarships.length} scholarship
            {openGovernmentScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {openGovernmentScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
