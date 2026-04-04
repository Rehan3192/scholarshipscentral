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
  isGovernmentScholarship,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "PhD Scholarships Still Open 2026 | Scholarships Central",
  description:
    "Browse PhD scholarships still open in 2026, including fully funded, government-backed, and region-specific doctoral routes with live deadlines.",
  alternates: {
    canonical: "/phd-scholarships-still-open-2026",
  },
};

const PHD_OPEN_LINKS = [
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Return to the full live-deadline pool once you finish narrowing by PhD level.",
    badge: "Deadline hub",
  },
  {
    href: "/degrees/phd",
    title: "PhD scholarships",
    description: "Go back to the full PhD listing page without the still-open filter.",
    badge: "Degree",
  },
  {
    href: "/fully-funded-scholarships-still-open-2026",
    title: "Fully funded scholarships still open 2026",
    description: "Use this when your next filter is stronger cost coverage on live deadlines.",
    badge: "Funding",
  },
  {
    href: "/government-scholarships-still-open-2026",
    title: "Government scholarships still open 2026",
    description: "Use this when your next filter is public-funding PhD routes on live deadlines.",
    badge: "Government",
  },
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Compare the open PhD pool with the wider Europe scholarship network.",
    badge: "Europe",
  },
  {
    href: "/countries/japan",
    title: "Japan scholarships",
    description: "Go deeper into Japan routes if research scholarships in Asia fit your shortlist.",
    badge: "Country",
  },
] as const;

export default function PhdScholarshipsStillOpen2026Page() {
  const openPhdScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        scholarship.degreeLevel === "PhD" && isStillOpen(scholarship.deadline),
    )
    .sort(sortByUpcomingDeadline);

  const fullyFundedCount = openPhdScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const governmentCount = openPhdScholarships.filter(isGovernmentScholarship).length;
  const countryCount = new Set(
    openPhdScholarships.map((scholarship) => scholarship.country),
  ).size;

  const items = openPhdScholarships.slice(0, 20).map((scholarship) => ({
    name: scholarship.title,
    href: `/scholarships/${scholarship.slug}`,
  }));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          { label: "PhD scholarships", href: "/degrees/phd" },
          {
            label: "PhD scholarships still open 2026",
            href: "/phd-scholarships-still-open-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/phd-scholarships-still-open-2026"
        title="PhD Scholarships Still Open 2026"
        description="Browse PhD scholarships still open in 2026, including fully funded, government-backed, and region-specific doctoral routes with live deadlines."
      />
      <ItemListJsonLd
        pagePath="/phd-scholarships-still-open-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          PhD scholarships still open 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want doctoral routes that still have live or
          rolling deadlines right now.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/fully-funded-scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {fullyFundedCount} fully funded PhD routes open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/government-scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {governmentCount} government-backed PhD routes open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/degrees/phd"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to PhD page
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Open PhD routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {openPhdScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            PhD scholarships that still look active today.
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
            Destinations represented in the live PhD pool.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Government overlap
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {governmentCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Open PhD routes that also look government-backed.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this live PhD page gives you
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page combines two high-intent filters at once: doctoral level and
          live deadlines. That means every listing here already matches PhD intent
          and still looks actionable today.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This is the fastest shortlist builder if you care about research routes
          first and do not want to waste time on closed calls or bachelor&apos;s/master&apos;s-only listings.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            PhD still-open cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to narrow the live PhD pool by funding type, government overlap, or region.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PHD_OPEN_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All PhD scholarships still open
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {openPhdScholarships.length} scholarship
            {openPhdScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {openPhdScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
