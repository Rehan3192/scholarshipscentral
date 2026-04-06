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
  title: "Fully Funded Scholarships Still Open 2026 | Scholarships Central",
  description:
    "Browse fully funded scholarships still open in 2026, including Europe, government-funded, and country-specific routes with live deadlines.",
  alternates: {
    canonical: "/fully-funded-scholarships-still-open-2026",
  },
};

const OPEN_FUNDING_LINKS = [
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Return to the full funding pool once you finish narrowing by active deadlines.",
    badge: "Funding hub",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Go back to the full live-deadline pool without the full-funding filter.",
    badge: "Deadline hub",
  },
  {
    href: "/government-scholarships-still-open-2026",
    title: "Government scholarships still open 2026",
    description: "Use this if your next filter is public funding, not just full funding.",
    badge: "Government",
  },
  {
    href: "/phd-scholarships-still-open-2026",
    title: "PhD scholarships still open 2026",
    description: "Use this if your next filter is doctoral study rather than full funding alone.",
    badge: "Degree",
  },
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Compare the live fully funded pool with the wider Europe listing page.",
    badge: "Europe",
  },
  {
    href: "/countries/japan",
    title: "Japan scholarships",
    description: "Good next step if you want strong Asia routes inside the fully funded pool.",
    badge: "Country",
  },
  {
    href: "/countries/germany",
    title: "Germany scholarships",
    description: "Good next step if you want Europe routes after scanning the live funding pool.",
    badge: "Country",
  },
] as const;

export default function FullyFundedScholarshipsStillOpen2026Page() {
  const openFullyFundedScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        scholarship.fundingType === "Fully Funded" &&
        isStillOpen(scholarship.deadline),
    )
    .sort(sortByUpcomingDeadline);

  const europeCount = openFullyFundedScholarships.filter(isEuropeanScholarship).length;
  const governmentCount = openFullyFundedScholarships.filter(isGovernmentScholarship).length;
  const countryCount = new Set(
    openFullyFundedScholarships.map((scholarship) => scholarship.country),
  ).size;

  const items = openFullyFundedScholarships.slice(0, 20).map((scholarship) => ({
    name: scholarship.title,
    href: `/scholarships/${scholarship.slug}`,
  }));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          { label: "Fully funded scholarships 2026", href: "/fully-funded-scholarships-2026" },
          {
            label: "Fully funded scholarships still open 2026",
            href: "/fully-funded-scholarships-still-open-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/fully-funded-scholarships-still-open-2026"
        title="Fully Funded Scholarships Still Open 2026"
        description="Browse fully funded scholarships still open in 2026, including Europe, government-funded, and country-specific routes with live deadlines."
      />
      <ItemListJsonLd
        pagePath="/fully-funded-scholarships-still-open-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Fully funded scholarships still open 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want the strongest funding packages that still
          have live or rolling deadlines right now.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/europe-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {europeCount} Europe listings still open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/government-scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {governmentCount} government-funded routes open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/fully-funded-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to funding hub
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Open fully funded routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {openFullyFundedScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Fully funded scholarships that still look active today.
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
            Destinations represented in the live full-funding pool.
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
            Open fully funded routes that also look government-backed.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Why use this still-open fully funded page
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page combines two high-intent filters at once: full funding and
          live deadlines. That means every listing here already matches the strongest
          funding intent and still looks actionable today.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This is usually the fastest shortlist builder if you care most about
          cost coverage and do not want to waste time on closed scholarship calls.
          If you want broader context, go back to the full funding hub or the wider
          still-open page.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Fully funded still-open cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to narrow the live full-funding pool by region, country, or public-funding overlap.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {OPEN_FUNDING_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All fully funded scholarships still open
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {openFullyFundedScholarships.length} scholarship
            {openFullyFundedScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {openFullyFundedScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
