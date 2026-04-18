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
  title: "Germany Scholarships 2026 | Scholarships Central",
  description:
    "Browse Germany scholarships for 2026, including DAAD, Heinrich Böll, Konrad Adenauer, Friedrich Ebert, IELTS-flexible routes, and still-open deadlines.",
  alternates: {
    canonical: "/countries/germany",
  },
};

const CLUSTER_LINKS = [
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Return to the Europe parent hub after narrowing into Germany.",
    badge: "Parent hub",
  },
  {
    href: "/germany-scholarships-without-ielts-2026",
    title: "Germany scholarships without IELTS",
    description: "Use this when language flexibility is your next filter inside the Germany cluster.",
    badge: "Language",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Move here if you only want strong funding before comparing Germany routes.",
    badge: "Funding",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Use this when deadlines approaching matter more than broad Germany research.",
    badge: "Urgent",
  },
] as const;

const FEATURED_ROUTE_SLUGS = [
  "daad-postgraduate-scholarship-germany",
  "daad-epos-scholarship-masters",
  "daad-research-grants",
  "germany-heinrich-b-ll-scholarship",
  "germany-konrad-adenauer-scholarship",
  "germany-friedrich-ebert-stiftung-scholarship",
] as const;

type GermanyScholarship = (typeof scholarships)[number];

export default function GermanyScholarships2026Page() {
  const germanyScholarships = scholarships
    .filter((scholarship) => scholarship.country === "Germany")
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const fullyFundedCount = germanyScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const stillOpenScholarships = [...germanyScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);
  const languageFlexibleCount = germanyScholarships.filter((scholarship) =>
    hasLanguageFlexibleRoute(scholarship),
  ).length;
  const mastersCount = germanyScholarships.filter(
    (scholarship) => scholarship.degreeLevel === "Masters",
  ).length;

  const featuredScholarships = FEATURED_ROUTE_SLUGS.map((slug) =>
    germanyScholarships.find((scholarship) => scholarship.slug === slug),
  ).filter((scholarship): scholarship is GermanyScholarship => Boolean(scholarship));

  const items = germanyScholarships.slice(0, 20).map((scholarship) => ({
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
          { label: "Germany scholarships 2026", href: "/countries/germany" },
        ]}
      />
      <WebPageJsonLd
        pagePath="/countries/germany"
        title="Germany Scholarships 2026"
        description="Browse Germany scholarships for 2026 with direct paths into fully funded, still-open, and Germany without-IELTS scholarship routes."
      />
      <ItemListJsonLd pagePath="/countries/germany" items={items} />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Germany scholarships 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you need to decide whether Germany is the right
          scholarship target for 2026. Germany is strongest when your shortlist
          starts with DAAD and major foundation routes such as Heinrich Böll,
          Konrad Adenauer, and Friedrich Ebert, because the pool is weighted
          toward fully funded postgraduate and doctoral support rather than
          small tuition discounts.
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
            href="/germany-scholarships-without-ielts-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {languageFlexibleCount} Germany routes with IELTS alternatives
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {stillOpenScholarships.length} Germany routes still open
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Germany scholarships 2026 quick summary
        </h2>
        <ul className="mt-4 ml-0 list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>
            Start with DAAD Postgraduate, DAAD EPOS, DAAD Research Grants,
            Heinrich Böll, Konrad Adenauer, and Friedrich Ebert if you want the
            strongest Germany routes first.
          </li>
          <li>
            {fullyFundedCount} Germany listings in the current directory already
            match fully funded intent.
          </li>
          <li>
            {languageFlexibleCount} Germany routes mention IELTS alternatives,
            English-medium study history, or other language flexibility.
          </li>
          <li>
            {stillOpenScholarships.length} Germany scholarships still look active
            or use rolling/current-cycle deadline language right now.
          </li>
          <li>
            Germany is strongest when you separate DAAD and foundation funding
            from urgency-driven or language-flexible routes before applying.
          </li>
        </ul>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Germany coverage
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {germanyScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Germany scholarship listings currently in the directory.
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
            Germany listings that already satisfy full-funding intent.
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
            Germany routes currently accepting applications or using rolling deadlines.
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
            Germany listings currently aligned with master&apos;s-level intent.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Choose the right Germany path next
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link
            href="/fully-funded-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            fully funded scholarships 2026
          </Link>{" "}
          if your first filter is full cost coverage and you only want Germany
          routes that can survive that comparison.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link
            href="/germany-scholarships-without-ielts-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            Germany scholarships without IELTS 2026
          </Link>{" "}
          if language flexibility matters more than whether the route is DAAD- or
          foundation-led.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            scholarships still open 2026
          </Link>{" "}
          if you want Germany options with deadlines approaching before you spend
          time on slower-cycle routes.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Germany cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these paths to move from broad Germany intent into funding,
            language, and urgency filters without leaving the Germany silo.
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
              Start with these flagship Germany scholarships
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              These are the first Germany routes to compare when you want DAAD
              strength, foundation funding, and decision value on one page.
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
              Germany scholarships still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Use this shortlist if application timing is more important than
              long-cycle Germany research.
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
            All Germany scholarships in the directory
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Compare DAAD routes, foundation scholarships, and other Germany
            funding paths in one cluster.
          </p>
        </div>
        <div className="grid gap-4">
          {germanyScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
