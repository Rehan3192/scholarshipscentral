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
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Fully Funded Scholarships 2026 | Scholarships Central",
  description:
    "Browse fully funded scholarships for 2026 and move into Europe, Asia, government-funded, and still-open scholarship routes from one page.",
  alternates: {
    canonical: "/fully-funded-scholarships-2026",
  },
};

const HUB_LINKS = [
  {
    href: "/fully-funded-scholarships-in-italy-2026",
    title: "Fully funded scholarships in Italy 2026",
    description: "Use this if Italy is already on your shortlist and you want the country-level full-funding cluster first.",
    badge: "Italy",
  },
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Full Europe hub with country pages, still-open routes, and scholarship listings.",
    badge: "Europe",
  },
  {
    href: "/fully-funded-scholarships-still-open-2026",
    title: "Fully funded scholarships still open 2026",
    description: "Move into live deadlines after scanning the full-funding pool.",
    badge: "Open now",
  },
  {
    href: "/countries/japan",
    title: "Japan scholarships",
    description: "One of the strongest Asia country pages for fully funded routes in the current directory.",
    badge: "Asia",
  },
  {
    href: "/countries/china",
    title: "China scholarships",
    description: "Government and university routes across major Chinese institutions.",
    badge: "Asia",
  },
  {
    href: "/countries/singapore",
    title: "Singapore scholarships",
    description: "Scholarship routes in Singapore for graduate and research applicants.",
    badge: "Asia",
  },
  {
    href: "/government-scholarships-in-europe-2026",
    title: "Government scholarships in Europe",
    description: "Use this when your next filter is public-funding routes inside the Europe pool.",
    badge: "Government",
  },
  {
    href: "/government-scholarships-in-asia-2026",
    title: "Government scholarships in Asia",
    description: "Use this when your next filter is Asia public-funding routes inside the full-funding pool.",
    badge: "Government",
  },
] as const;

const GOVERNMENT_ROUTE_LINKS = [
  {
    href: "/scholarships/romanian-government-scholarship",
    title: "Romanian Government Scholarship",
    description: "Government-funded route with direct state application flow for non-EU applicants.",
  },
  {
    href: "/scholarships/romanian-government-scholarship-masters",
    title: "Romanian Government Scholarship (Masters)",
    description: "Masters-level Romania route inside the current government scholarship cluster.",
  },
  {
    href: "/scholarships/azerbaijan-government-scholarship",
    title: "Azerbaijan Government Scholarship",
    description: "Full-support government route with nomination and second-stage SIACAS processing.",
  },
  {
    href: "/scholarships/stipendium-hungaricum",
    title: "Stipendium Hungaricum",
    description: "One of the strongest public-funding scholarship routes in Europe.",
  },
] as const;

const LANGUAGE_ROUTE_LINKS = [
  {
    href: "/europe-scholarships-without-ielts-2026",
    title: "Europe scholarships without IELTS",
    description: "Europe routes that discuss IELTS alternatives and language-proof flexibility.",
  },
  {
    href: "/scholarships/stipendium-hungaricum",
    title: "Stipendium Hungaricum",
    description: "Useful if you need a fully funded Europe route with flexible language-proof handling on some programs.",
  },
  {
    href: "/scholarships/university-of-turin-scholarships-2026",
    title: "University of Turin Scholarships 2026",
    description: "Worth checking alongside fully funded routes if you are comparing language-proof flexibility.",
  },
] as const;

export default function FullyFundedScholarships2026Page() {
  const fullyFundedScholarships = [...scholarships]
    .filter((scholarship) => scholarship.fundingType === "Fully Funded")
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));
  const stillOpenFullyFundedScholarships = [...fullyFundedScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const europeCount = fullyFundedScholarships.filter(isEuropeanScholarship).length;
  const stillOpenCount = stillOpenFullyFundedScholarships.length;
  const countryCount = new Set(
    fullyFundedScholarships.map((scholarship) => scholarship.country),
  ).size;
  const items = fullyFundedScholarships.slice(0, 20).map((scholarship) => ({
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
        ]}
      />
      <WebPageJsonLd
        pagePath="/fully-funded-scholarships-2026"
        title="Fully Funded Scholarships 2026"
        description="Browse fully funded scholarships for 2026, then move into Europe, Asia, government-funded, and still-open scholarship paths."
      />
      <ItemListJsonLd pagePath="/fully-funded-scholarships-2026" items={items} />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Fully funded scholarships 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Start with the full-funding pool, then branch into Europe hubs, Asia
          country pages, government routes, and live deadlines without duplicating work.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/europe-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            {europeCount} fully funded Europe listings
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/scholarships-still-open-2026" className="font-medium text-blue-700 hover:underline">
            {stillOpenCount} fully funded listings still open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/funding/fully-funded" className="font-medium text-blue-700 hover:underline">
            Existing funding taxonomy
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Fully funded coverage
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {fullyFundedScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Fully funded scholarships across {countryCount} countries in the directory.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Europe fully funded
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {europeCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Europe listings inside the full-funding pool.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Still open now
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {stillOpenCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Fully funded listings with live or rolling deadlines.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Why use this fully funded scholarships page
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Every listing here already matches full-funding intent. Use it when you want
          tuition, stipend, travel, or accommodation support to be the first filter
          before you narrow by region or deadline.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          If you need current deadlines, start with the still-open fully funded
          section below. If you already know your destination, the region and
          country links will get you from funding intent to a tighter shortlist faster.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Fully funded hub links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these paths to move from funding intent into region and topic clusters.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HUB_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Country shortcut: Italy
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          If Italy is already on your shortlist, go straight to{" "}
          <Link href="/fully-funded-scholarships-in-italy-2026" className="font-medium text-blue-700 hover:underline">
            fully funded scholarships in Italy 2026
          </Link>
          {" "}instead of scanning the full global list first.
        </p>
      </section>

      {stillOpenFullyFundedScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Still-open fully funded scholarships
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you want the strongest funding packages with live deadlines.
            </p>
          </div>
          <div className="grid gap-4">
            {stillOpenFullyFundedScholarships.slice(0, 6).map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Government-funded routes
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            These scholarship pages help you jump from fully funded intent into live government-backed routes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {GOVERNMENT_ROUTE_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} badge="Government" />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Language-flexible scholarship pages
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these pages when you also need routes that discuss alternative English-proof paths.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {LANGUAGE_ROUTE_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} badge="Without IELTS" />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All fully funded scholarships
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {fullyFundedScholarships.length} scholarship{fullyFundedScholarships.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid gap-4">
          {fullyFundedScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
