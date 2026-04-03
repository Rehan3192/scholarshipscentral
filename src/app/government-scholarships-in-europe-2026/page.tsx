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
  title: "Government Scholarships in Europe 2026 | Scholarships Central",
  description:
    "Browse government scholarships in Europe for 2026, including still-open public-funding routes and country pages for Germany, Romania, Hungary, and more.",
  alternates: {
    canonical: "/government-scholarships-in-europe-2026",
  },
};

const GOVERNMENT_CLUSTER_LINKS = [
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Return to the full Europe pool after narrowing by public-funding routes.",
    badge: "Europe hub",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Use this when your next filter is deadline urgency instead of funding source.",
    badge: "Open now",
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
    description: "Best next step if DAAD and Germany-based public routes are your priority.",
    badge: "Country",
  },
  {
    href: "/countries/hungary",
    title: "Hungary scholarships",
    description: "Useful when you want Hungary public-funding and Stipendium Hungaricum style routes.",
    badge: "Country",
  },
  {
    href: "/countries/romania",
    title: "Romania scholarships",
    description: "Go deeper into Romania-specific public scholarships and admissions paths.",
    badge: "Country",
  },
] as const;

export default function GovernmentScholarshipsInEurope2026Page() {
  const governmentScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        isEuropeanScholarship(scholarship) && isGovernmentScholarship(scholarship),
    )
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenGovernmentScholarships = [...governmentScholarships]
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
          { label: "Europe scholarships 2026", href: "/europe-scholarships-2026" },
          {
            label: "Government scholarships in Europe 2026",
            href: "/government-scholarships-in-europe-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/government-scholarships-in-europe-2026"
        title="Government Scholarships in Europe 2026"
        description="Browse government scholarships in Europe for 2026, with direct paths into still-open, fully funded, and country-specific public-funding routes."
      />
      <ItemListJsonLd
        pagePath="/government-scholarships-in-europe-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Government scholarships in Europe 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want Europe scholarships backed by ministries,
          public agencies, commissions, and other state-linked funding routes.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {stillOpenGovernmentScholarships.length} government routes still open
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
            href="/europe-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to Europe hub
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Public-funding routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {governmentScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Europe scholarship listings that match government or state-backed funding intent.
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
            Public-funding destinations already represented in the dataset.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Still open now
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {stillOpenGovernmentScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Public-funding scholarships that still look active today.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this frontend government hub gives you
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page is built from the live dataset, so it groups the Europe
          scholarships that read like public-funding or ministry-backed routes
          instead of mixing them with general university awards. That makes it
          useful when you want state-linked options first and university-specific
          scholarships second.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          The tradeoff is that government scholarships can be more rule-heavy.
          Many require stricter eligibility, nomination routes, embassy handling,
          or centralized application systems. If you want simpler university-led
          routes instead, go back to the main Europe hub.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Government scholarship cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to narrow public-funding routes by urgency or country.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GOVERNMENT_CLUSTER_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {stillOpenGovernmentScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Government scholarships in Europe still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you want live public-funding deadlines before reading the full list.
            </p>
          </div>
          <div className="grid gap-4">
            {stillOpenGovernmentScholarships.slice(0, 6).map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All government scholarships in Europe
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
