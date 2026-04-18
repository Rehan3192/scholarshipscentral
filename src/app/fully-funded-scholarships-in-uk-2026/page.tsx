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
  title: "Fully Funded Scholarships in UK 2026 | Scholarships Central",
  description:
    "Browse fully funded scholarships in the UK for 2026, compare Chevening, Commonwealth, Gates Cambridge, and Clarendon, and move between UK funding, language, and urgency routes.",
  alternates: {
    canonical: "/fully-funded-scholarships-in-uk-2026",
  },
};

const CLUSTER_LINKS = [
  {
    href: "/countries/united-kingdom",
    title: "UK scholarships 2026",
    description: "Return to the full UK cluster if you also want partially funded and university-led routes.",
    badge: "Parent",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Compare the UK against the full global pool of fully funded routes.",
    badge: "Core hub",
  },
  {
    href: "/uk-scholarships-without-ielts-2026",
    title: "UK scholarships without IELTS",
    description: "Use this if language-proof flexibility matters alongside funding strength.",
    badge: "Related",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Check live deadlines if urgency matters more than UK depth.",
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

export default function FullyFundedScholarshipsInUk2026Page() {
  const ukFullyFundedScholarships = scholarships
    .filter(
      (scholarship) =>
        scholarship.country === "United Kingdom" &&
        scholarship.fundingType === "Fully Funded",
    )
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenScholarships = [...ukFullyFundedScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const languageFlexibleCount = ukFullyFundedScholarships.filter((scholarship) =>
    hasLanguageFlexibleRoute(scholarship),
  ).length;

  const featuredScholarships = FEATURED_ROUTE_SLUGS.map((slug) =>
    ukFullyFundedScholarships.find((scholarship) => scholarship.slug === slug),
  ).filter((scholarship): scholarship is UkScholarship => Boolean(scholarship));

  const items = ukFullyFundedScholarships.map((scholarship) => ({
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
          { label: "UK scholarships 2026", href: "/countries/united-kingdom" },
          {
            label: "Fully funded scholarships in UK 2026",
            href: "/fully-funded-scholarships-in-uk-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/fully-funded-scholarships-in-uk-2026"
        title="Fully Funded Scholarships in UK 2026"
        description="Browse fully funded scholarships in the UK for 2026 and compare the strongest UK funding routes."
      />
      <ItemListJsonLd
        pagePath="/fully-funded-scholarships-in-uk-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Fully funded scholarships in UK 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when full cost coverage is your first filter and you want
          to remove partially funded UK routes from the shortlist. The UK has
          elite fully funded routes, but the pool is smaller, more competitive,
          and split between government-backed scholarships and top-university awards.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/countries/united-kingdom" className="font-medium text-blue-700 hover:underline">
            Back to UK scholarships 2026
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Compare all fully funded scholarships
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/uk-scholarships-without-ielts-2026" className="font-medium text-blue-700 hover:underline">
            {languageFlexibleCount} UK routes with language flexibility
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Fully funded scholarships in UK 2026 quick summary
        </h2>
        <ul className="mt-4 ml-0 list-disc space-y-2 pl-5 text-sm text-gray-700">
          <li>Start with Chevening, Commonwealth, Gates Cambridge, and Clarendon.</li>
          <li>{ukFullyFundedScholarships.length} UK listings already match fully funded intent.</li>
          <li>{stillOpenScholarships.length} fully funded UK routes currently look active or use rolling/current-cycle deadline language.</li>
          <li>{languageFlexibleCount} fully funded UK routes also mention IELTS alternatives or accepted language proof.</li>
          <li>The UK fully funded pool is smaller than the broader UK market, which makes competition tighter but the shortlist clearer.</li>
        </ul>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Fully funded UK routes</p>
          <p className="mb-0 text-3xl font-bold text-gray-900">{ukFullyFundedScholarships.length}</p>
          <p className="mt-2 mb-0 text-sm text-gray-600">UK listings in the directory that already match fully funded intent.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Still open now</p>
          <p className="mb-0 text-3xl font-bold text-gray-900">{stillOpenScholarships.length}</p>
          <p className="mt-2 mb-0 text-sm text-gray-600">Routes with active or rolling deadlines right now.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Language-flexible</p>
          <p className="mb-0 text-3xl font-bold text-gray-900">{languageFlexibleCount}</p>
          <p className="mt-2 mb-0 text-sm text-gray-600">Fully funded UK routes that also mention accepted English-proof flexibility.</p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">Cluster role</p>
          <p className="mb-0 text-3xl font-bold text-gray-900">UK x Funding</p>
          <p className="mt-2 mb-0 text-sm text-gray-600">This page supports both the UK cluster and the global fully funded hub.</p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">Where to find more UK options</h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use <Link href="/countries/united-kingdom" className="font-medium text-blue-700 hover:underline">UK scholarships 2026</Link> for the full UK list. Use <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">fully funded scholarships 2026</Link> for global comparisons.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use <Link href="/scholarships-still-open-2026" className="font-medium text-blue-700 hover:underline">scholarships still open 2026</Link> for UK routes still accepting applications, or <Link href="/uk-scholarships-without-ielts-2026" className="font-medium text-blue-700 hover:underline">UK scholarships without IELTS</Link> if language flexibility matters too.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">Funding cluster links</h2>
          <p className="mb-0 text-sm text-gray-600">Move between UK, funding, urgency, and language sub-clusters without losing context.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CLUSTER_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {featuredScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">Strongest fully funded UK routes first</h2>
            <p className="mb-0 text-sm text-gray-600">Start here if you want the core UK full-funding shortlist before branching into article pages.</p>
          </div>
          <div className="grid gap-4">
            {featuredScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">Funding types and competition</h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          The UK fully funded pool is not one uniform category. Chevening and Commonwealth behave like broad national scholarship brands, while Gates Cambridge and Clarendon are university-led and much tighter at the selection stage.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This matters because a route can be fully funded and still operate through a much narrower competition funnel. Use this page to compare those top-end routes first, then move back to the broader UK cluster if you want partially funded alternatives.
        </p>
      </section>

      {stillOpenScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">Still-open fully funded scholarships in the UK</h2>
            <p className="mb-0 text-sm text-gray-600">Use this shortlist if you need to apply soon and want to stay inside the UK.</p>
          </div>
          <div className="grid gap-4">
            {stillOpenScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
