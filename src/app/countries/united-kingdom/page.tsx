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
  title: "UK Scholarships 2026 | Scholarships Central",
  description:
    "Browse UK scholarships for 2026, including Chevening, Commonwealth, Gates Cambridge, Clarendon, fully funded routes, IELTS alternatives, and still-open deadlines.",
  alternates: {
    canonical: "/countries/united-kingdom",
  },
};

const CLUSTER_LINKS = [
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Return to the Europe parent hub after narrowing into the UK.",
    badge: "Parent hub",
  },
  {
    href: "/uk-scholarships-without-ielts-2026",
    title: "UK scholarships without IELTS",
    description: "Use this when IELTS alternatives or language flexibility are your next filter.",
    badge: "Language",
  },
  {
    href: "/fully-funded-scholarships-in-uk-2026",
    title: "Fully funded scholarships in UK 2026",
    description: "Use this when full cost coverage is your next filter inside the UK cluster.",
    badge: "Funding",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Move here if you only want full-cost coverage before comparing UK routes.",
    badge: "Funding",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Use this when deadlines approaching matter more than broad UK research.",
    badge: "Urgent",
  },
] as const;

const FEATURED_ROUTE_SLUGS = [
  "chevening-scholarship",
  "commonwealth-scholarship",
  "uk-gates-cambridge-scholarship",
  "uk-clarendon-scholarship",
] as const;

type UkScholarship = (typeof scholarships)[number];

export default function UkScholarships2026Page() {
  const ukScholarships = scholarships
    .filter((scholarship) => scholarship.country === "United Kingdom")
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const fullyFundedCount = ukScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const stillOpenScholarships = [...ukScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);
  const languageFlexibleCount = ukScholarships.filter((scholarship) =>
    hasLanguageFlexibleRoute(scholarship),
  ).length;
  const mastersCount = ukScholarships.filter(
    (scholarship) => scholarship.degreeLevel === "Masters",
  ).length;

  const featuredScholarships = FEATURED_ROUTE_SLUGS.map((slug) =>
    ukScholarships.find((scholarship) => scholarship.slug === slug),
  ).filter((scholarship): scholarship is UkScholarship => Boolean(scholarship));

  const items = ukScholarships.slice(0, 20).map((scholarship) => ({
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
          { label: "UK scholarships 2026", href: "/countries/united-kingdom" },
        ]}
      />
      <WebPageJsonLd
        pagePath="/countries/united-kingdom"
        title="UK Scholarships 2026"
        description="Browse UK scholarships for 2026 with direct paths into fully funded, still-open, and UK without-IELTS scholarship routes."
      />
      <ItemListJsonLd pagePath="/countries/united-kingdom" items={items} />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          UK scholarships 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you need to decide whether the UK is the right
          scholarship target for 2026. The UK has some of the strongest flagship
          awards in the directory, including Chevening, Commonwealth, Gates
          Cambridge, and Clarendon, but the pool splits between a small number of
          elite fully funded routes and a wider set of university-led awards.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/europe-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to Europe hub
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/uk-scholarships-without-ielts-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {languageFlexibleCount} UK routes with IELTS alternatives
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {stillOpenScholarships.length} UK routes still open
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          UK scholarships 2026 quick summary
        </h2>
        <ul className="mt-4 ml-0 list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Flagship UK routes to check first: Chevening, Commonwealth, Gates
            Cambridge, and Clarendon.
          </li>
          <li>
            {fullyFundedCount} UK listings already match fully funded intent in
            the current directory.
          </li>
          <li>
            {languageFlexibleCount} UK routes mention IELTS alternatives, English-medium
            study history, or other language flexibility.
          </li>
          <li>
            {stillOpenScholarships.length} UK scholarships still look active or
            use rolling/current-cycle deadline language right now.
          </li>
          <li>
            The UK cluster is strongest when you separate brand-driven awards
            from urgency-driven and language-flexible routes before applying.
          </li>
        </ul>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            UK coverage
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {ukScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            UK scholarship listings currently in the directory.
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
            UK listings that already satisfy full-funding intent.
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
            UK routes currently accepting applications or using rolling deadlines.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Masters-heavy
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {mastersCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            UK listings currently aligned with master&apos;s-level intent.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Choose the right UK path next
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link
            href="/fully-funded-scholarships-in-uk-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            fully funded scholarships in UK 2026
          </Link>{" "}
          if you only want the strongest UK funding routes before comparing the
          wider UK mix.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link
            href="/fully-funded-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            fully funded scholarships 2026
          </Link>{" "}
          if your first filter is full cost coverage and you only want the UK
          routes that can survive that comparison.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link
            href="/uk-scholarships-without-ielts-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            UK scholarships without IELTS 2026
          </Link>{" "}
          if language flexibility matters more than brand name or university rank.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            scholarships still open 2026
          </Link>{" "}
          if you want UK options with deadlines approaching before you spend time
          on longer-range routes.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            UK cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these paths to move from broad UK intent into funding, language,
            and urgency filters without leaving the UK silo.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {CLUSTER_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {featuredScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Start with these flagship UK scholarships
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              These are the first UK routes to compare when you want brand,
              funding strength, and decision value on one page.
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
              UK scholarships still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Use this shortlist if application timing is more important than
              prestige-first browsing.
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
            All UK scholarships in the directory
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Compare flagship government awards, top-university scholarships, and
            other UK routes in one cluster.
          </p>
        </div>
        <div className="grid gap-4">
          {ukScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
