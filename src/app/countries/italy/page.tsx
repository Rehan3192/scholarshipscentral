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
  hasLanguageFlexibleRoute,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Italy Scholarships 2026 | Scholarships Central",
  description:
    "Browse Italy scholarships for 2026, including fully funded routes, Italy scholarships without IELTS, still-open deadlines, and university scholarship pages in one cluster.",
  alternates: {
    canonical: "/countries/italy",
  },
};

const CLUSTER_LINKS = [
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Return to the full Europe hub after narrowing into Italy.",
    badge: "Parent hub",
  },
  {
    href: "/italy-scholarships-without-ielts-2026",
    title: "Italy scholarships without IELTS",
    description: "Use this if language-proof flexibility is your next filter.",
    badge: "Language",
  },
  {
    href: "/fully-funded-scholarships-in-italy-2026",
    title: "Fully funded scholarships in Italy",
    description: "Use this when full cost coverage is your first filter inside the Italy cluster.",
    badge: "Funding",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Compare Italy routes against the full-funding pool before deciding.",
    badge: "Funding",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Check live deadlines first if your priority is applying soon.",
    badge: "Urgent",
  },
  {
    href: "/degrees/masters",
    title: "Master's scholarships",
    description: "Italy is currently strongest for master's-level scholarship intent.",
    badge: "Degree",
  },
  {
    href: "/government-scholarships-in-europe-2026",
    title: "Government scholarships in Europe",
    description: "Compare Italy university-led routes with state-backed Europe funding paths.",
    badge: "Government",
  },
] as const;

const FEATURED_ROUTE_SLUGS = [
  "italy-university-of-padua-excellence-scholarship",
  "university-of-turin-scholarships-2026",
  "italy-politecnico-di-milano-merit-scholarship",
  "university-of-pisa-dsu-toscana-scholarship",
] as const;

type ItalyScholarship = (typeof scholarships)[number];

export default function ItalyScholarships2026Page() {
  const italyScholarships = scholarships
    .filter((scholarship) => scholarship.country === "Italy")
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenScholarships = [...italyScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const fullyFundedCount = italyScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const mastersCount = italyScholarships.filter(
    (scholarship) => scholarship.degreeLevel === "Masters",
  ).length;
  const languageFlexibleCount = italyScholarships.filter((scholarship) =>
    hasLanguageFlexibleRoute(scholarship),
  ).length;

  const featuredScholarships = FEATURED_ROUTE_SLUGS.map((slug) =>
    italyScholarships.find((scholarship) => scholarship.slug === slug),
  ).filter((scholarship): scholarship is ItalyScholarship => Boolean(scholarship));

  const items = italyScholarships.slice(0, 20).map((scholarship) => ({
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
          { label: "Italy scholarships 2026", href: "/countries/italy" },
        ]}
      />
      <WebPageJsonLd
        pagePath="/countries/italy"
        title="Italy Scholarships 2026"
        description="Browse Italy scholarships for 2026 with direct paths into fully funded, still-open, and without-IELTS scholarship routes."
      />
      <ItemListJsonLd pagePath="/countries/italy" items={items} />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Italy scholarships 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Italy is one of the stronger Europe destinations for 2026 because the
          scholarship mix is broad: university merit awards, regional funding,
          and a smaller set of fully funded routes. The tradeoff is that many
          Italy scholarships reduce cost rather than remove it completely.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/europe-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Back to Europe hub
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/italy-scholarships-without-ielts-2026" className="font-medium text-blue-700 hover:underline">
            {languageFlexibleCount} Italy routes with IELTS alternatives
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Compare fully funded options
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Italy coverage
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {italyScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy scholarship listings currently in the directory.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Fully funded
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {fullyFundedCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy listings that already meet full-funding intent.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Still open now
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {stillOpenScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy scholarships with active or rolling deadlines.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Master's-heavy
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {mastersCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy listings currently aligned with master's-level intent.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Why Italy needs its own 2026 cluster page
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Italy sits in a different position from the broader Europe hub.
          Applicants usually land here with a clearer question: do they want a
          high-brand university scholarship, a regional fee-support route, or a
          more generous fully funded option. A generic country listing does not
          answer that well enough.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page matters because it pushes the right next decision. If you
          need a tighter shortlist, start with{" "}
          <Link href="/fully-funded-scholarships-in-italy-2026" className="font-medium text-blue-700 hover:underline">
            fully funded scholarships in Italy 2026
          </Link>
          {" "}when full cost coverage is your first filter. If you
          care about cost coverage first, go to{" "}
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            fully funded scholarships 2026
          </Link>
          . If you care about language flexibility, go to{" "}
          <Link href="/italy-scholarships-without-ielts-2026" className="font-medium text-blue-700 hover:underline">
            Italy scholarships without IELTS
          </Link>
          . If you need live deadlines, use{" "}
          <Link href="/scholarships-still-open-2026" className="font-medium text-blue-700 hover:underline">
            scholarships still open 2026
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Italy cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these to move from Italy intent into funding, language, and deadline filters.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLUSTER_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {featuredScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Start here if you want the strongest Italy routes first
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              These are the best first-click pages for major Italy scholarship intent.
            </p>
          </div>
          <div className="grid gap-4">
            {featuredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      {stillOpenScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Italy scholarships still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Use this shortlist if application timing is more important than destination branding.
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
            All Italy scholarships in the directory
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Compare university merit awards, regional aid, and fully funded Italy routes in one place.
          </p>
        </div>
        <div className="grid gap-4">
          {italyScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
