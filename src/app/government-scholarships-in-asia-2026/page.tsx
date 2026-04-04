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
  isAsianScholarship,
  isGovernmentScholarship,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Government Scholarships in Asia 2026 | Scholarships Central",
  description:
    "Browse government scholarships in Asia for 2026, including still-open public-funding routes and country pages for Japan, China, Türkiye, and more.",
  alternates: {
    canonical: "/government-scholarships-in-asia-2026",
  },
};

const ASIA_GOVERNMENT_LINKS = [
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Return to the full funding hub after narrowing by Asia public-funding routes.",
    badge: "Funding hub",
  },
  {
    href: "/government-scholarships-still-open-2026",
    title: "Government scholarships still open 2026",
    description: "Use this when you want to narrow the public-funding pool by live deadlines first.",
    badge: "Open now",
  },
  {
    href: "/countries/japan",
    title: "Japan scholarships",
    description: "Good next step for MEXT and other Japan-centered public-funding routes.",
    badge: "Country",
  },
  {
    href: "/countries/china",
    title: "China scholarships",
    description: "Useful when CSC and other China-based public-funding routes are your priority.",
    badge: "Country",
  },
  {
    href: "/countries/turkey",
    title: "Turkey scholarships",
    description: "Go deeper into Türkiye public-funding routes if the Asia government pool fits your profile.",
    badge: "Country",
  },
  {
    href: "/countries/singapore",
    title: "Singapore scholarships",
    description: "Compare Asia public-funding routes with Singapore-based options in the main directory.",
    badge: "Country",
  },
] as const;

export default function GovernmentScholarshipsInAsia2026Page() {
  const governmentScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        isAsianScholarship(scholarship) && isGovernmentScholarship(scholarship),
    )
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenScholarships = [...governmentScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const fullyFundedCount = governmentScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const countryCount = new Set(
    governmentScholarships.map((scholarship) => scholarship.country),
  ).size;

  const items = governmentScholarships.slice(0, 20).map((scholarship) => ({
    name: scholarship.title,
    href: `/scholarships/${scholarship.slug}`,
  }));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          {
            label: "Government scholarships in Asia 2026",
            href: "/government-scholarships-in-asia-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/government-scholarships-in-asia-2026"
        title="Government Scholarships in Asia 2026"
        description="Browse government scholarships in Asia for 2026, with direct paths into still-open, fully funded, and country-specific public-funding routes."
      />
      <ItemListJsonLd
        pagePath="/government-scholarships-in-asia-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Government scholarships in Asia 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want Asia scholarship routes backed by ministries,
          public agencies, or other state-linked funding bodies.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/government-scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {stillOpenScholarships.length} Asia government routes still open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/fully-funded-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {fullyFundedCount} fully funded public routes
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/scholarships"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to scholarship directory
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Asia public-funding routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {governmentScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Asia scholarship listings that match government or state-backed funding intent.
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
            Asia public-funding destinations already represented in the dataset.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Still open now
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {stillOpenScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Asia public-funding scholarships that still look active today.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this frontend Asia government hub gives you
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page is built from the live dataset, so it groups Asia scholarships
          that read like public-funding or ministry-backed routes instead of mixing
          them with general university awards. That makes it useful when you want
          state-linked Asia options first and institution-specific scholarships second.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          The tradeoff is that government scholarships can be more rule-heavy and
          sometimes require embassy handling, nominations, or centralized portals.
          Use this page to build a shorter, higher-intent public-funding shortlist first.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Asia government cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to narrow Asia public-funding routes by deadline, funding, or country.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ASIA_GOVERNMENT_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {stillOpenScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Government scholarships in Asia still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you want live Asia public-funding deadlines before reading the full list.
            </p>
          </div>
          <div className="grid gap-4">
            {stillOpenScholarships.slice(0, 6).map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All government scholarships in Asia
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {governmentScholarships.length} scholarship
            {governmentScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {governmentScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
