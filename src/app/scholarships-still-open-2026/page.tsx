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
  isRollingDeadline,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Scholarships Still Open 2026 | Scholarships Central",
  description:
    "Browse scholarships still open in 2026, with direct paths into Europe, fully funded, UK, Germany, and Italy scholarship pages.",
  alternates: {
    canonical: "/scholarships-still-open-2026",
  },
};

const STILL_OPEN_LINKS = [
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Move from open-deadline research into the broader Europe scholarship hub.",
    badge: "Europe",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Limit the still-open pool to the strongest funding packages.",
    badge: "Funding",
  },
  {
    href: "/government-scholarships-still-open-2026",
    title: "Government scholarships still open 2026",
    description: "Narrow the live-deadline pool to ministry-backed and public-funding routes.",
    badge: "Government",
  },
  {
    href: "/countries/united-kingdom",
    title: "UK scholarships",
    description: "Current UK-focused scholarship listings for 2026 applicants.",
    badge: "Country",
  },
  {
    href: "/countries/germany",
    title: "Germany scholarships",
    description: "Scholarship routes in Germany, including public and foundation-funded options.",
    badge: "Country",
  },
  {
    href: "/countries/italy",
    title: "Italy scholarships",
    description: "Italy routes worth checking when you need current deadlines and admission windows.",
    badge: "Country",
  },
  {
    href: "/scholarships?sort=deadline",
    title: "Directory sorted by deadline",
    description: "Use the main directory if you want to keep filtering beyond this hub page.",
  },
] as const;

export default function ScholarshipsStillOpen2026Page() {
  const openScholarships = [...scholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const urgentScholarships = openScholarships.slice(0, 6);
  const europeOpenCount = openScholarships.filter(isEuropeanScholarship).length;
  const fullyFundedOpenCount = openScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const rollingCount = openScholarships.filter((scholarship) =>
    isRollingDeadline(scholarship.deadline),
  ).length;
  const items = openScholarships.slice(0, 20).map((scholarship) => ({
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
        ]}
      />
      <WebPageJsonLd
        pagePath="/scholarships-still-open-2026"
        title="Scholarships Still Open 2026"
        description="Browse scholarships still open in 2026, with internal paths to Europe, fully funded, UK, Germany, and Italy scholarship pages."
      />
      <ItemListJsonLd pagePath="/scholarships-still-open-2026" items={items} />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Scholarships still open 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Start with live deadlines, then branch into Europe, fully funded, and
          country-specific scholarship pages while application windows are still active.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/europe-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            {europeOpenCount} Europe listings still open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            {fullyFundedOpenCount} fully funded listings still open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/scholarships?sort=deadline" className="font-medium text-blue-700 hover:underline">
            Sort full directory by deadline
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Open now
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {openScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Scholarships with live or rolling deadlines in the current directory.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Europe open
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {europeOpenCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Europe scholarships you can still act on right now.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Fully funded open
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {fullyFundedOpenCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Still-open scholarships that already match full-funding intent.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this frontend deadline hub gives you
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page is driven directly by the scholarship dataset and deadline
          rules, so it automatically keeps only listings that still look active
          today. Use it when your priority is speed: current deadlines first,
          then region, country, or funding filters second.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Right now, {rollingCount} of these listings use rolling or year-round
          wording, which makes this page especially useful when you need options
          beyond one hard closing date.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Still-open hub links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            These pages let you narrow live-deadline traffic by region, funding, and country.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STILL_OPEN_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Deadlines closing soon
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Start with the most urgent live deadlines, then move into the full list below.
          </p>
        </div>
        <div className="grid gap-4">
          {urgentScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All scholarships still open
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {openScholarships.length} scholarship{openScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {openScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
