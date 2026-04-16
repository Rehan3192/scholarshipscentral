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
  title: "Fully Funded Scholarships in Italy 2026 | Scholarships Central",
  description:
    "Browse fully funded scholarships in Italy for 2026, compare the strongest Italy funding routes, and move between the Italy cluster, live deadlines, and language-flexible pages.",
  alternates: {
    canonical: "/fully-funded-scholarships-in-italy-2026",
  },
};

const CLUSTER_LINKS = [
  {
    href: "/countries/italy",
    title: "Italy scholarships 2026",
    description: "Return to the full Italy scholarship cluster if you also want partial-funding options.",
    badge: "Parent",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Compare Italy against the full global pool of fully funded routes.",
    badge: "Core hub",
  },
  {
    href: "/italy-scholarships-without-ielts-2026",
    title: "Italy scholarships without IELTS",
    description: "Use this if language-proof flexibility is as important as funding strength.",
    badge: "Related",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Check live deadlines if urgency matters more than destination depth.",
    badge: "Urgent",
  },
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Move back to the broader Europe hub if you want to compare Italy with nearby destinations.",
    badge: "Europe",
  },
  {
    href: "/degrees/masters",
    title: "Master's scholarships",
    description: "Most current Italy fully funded routes in the directory are master's-aligned.",
    badge: "Degree",
  },
] as const;

const FEATURED_ROUTE_SLUGS = [
  "italy-politecnico-di-milano-merit-scholarship",
  "university-of-calabria-unicaladmission-scholarship",
  "university-of-pisa-dsu-toscana-scholarship",
  "unicore-8-0-scholarship-university-corridors-for-refugees",
  "italy-university-of-padua-excellence-scholarship",
] as const;

type ItalyScholarship = (typeof scholarships)[number];

export default function FullyFundedScholarshipsInItaly2026Page() {
  const italyFullyFundedScholarships = scholarships
    .filter(
      (scholarship) =>
        scholarship.country === "Italy" &&
        scholarship.fundingType === "Fully Funded",
    )
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenScholarships = [...italyFullyFundedScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const languageFlexibleCount = italyFullyFundedScholarships.filter((scholarship) =>
    hasLanguageFlexibleRoute(scholarship),
  ).length;

  const featuredScholarships = FEATURED_ROUTE_SLUGS.map((slug) =>
    italyFullyFundedScholarships.find((scholarship) => scholarship.slug === slug),
  ).filter((scholarship): scholarship is ItalyScholarship => Boolean(scholarship));

  const items = italyFullyFundedScholarships.map((scholarship) => ({
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
          {
            label: "Fully funded scholarships in Italy 2026",
            href: "/fully-funded-scholarships-in-italy-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/fully-funded-scholarships-in-italy-2026"
        title="Fully Funded Scholarships in Italy 2026"
        description="Browse fully funded scholarships in Italy for 2026 and compare the strongest Italy funding routes."
      />
      <ItemListJsonLd
        pagePath="/fully-funded-scholarships-in-italy-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Fully funded scholarships in Italy 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          If full cost coverage is your first filter, this is the right Italy page
          to start with. Italy has a broader pool of partial scholarships than fully
          funded ones, so this page is designed to remove that noise and send you
          straight to the smaller set of stronger funding routes.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/countries/italy" className="font-medium text-blue-700 hover:underline">
            Back to Italy scholarships 2026
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Compare all fully funded scholarships
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/italy-scholarships-without-ielts-2026" className="font-medium text-blue-700 hover:underline">
            {languageFlexibleCount} Italy routes with language flexibility
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Fully funded Italy routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {italyFullyFundedScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy scholarship listings in the directory that already match fully funded intent.
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
            Routes with active or rolling deadlines right now.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Language-flexible
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {languageFlexibleCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy fully funded routes that also mention IELTS alternatives or accepted proof flexibility.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Cluster role
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">Italy x Funding</p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            This page supports both the Italy country cluster and the global fully funded hub.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Why this page exists separately from the main Italy cluster
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          A user searching for fully funded scholarships in Italy 2026 is asking a
          narrower question than a user searching for Italy scholarships 2026. The
          first user wants to remove fee-reduction and merit-discount pages from the
          shortlist. The second user is still exploring the full Italy market.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This distinction matters because Italy is strong for partial funding, but
          the fully funded pool is smaller and more competitive. If you want broader
          Italy coverage, go back to{" "}
          <Link href="/countries/italy" className="font-medium text-blue-700 hover:underline">
            Italy scholarships 2026
          </Link>
          . If you want global comparisons, use{" "}
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            fully funded scholarships 2026
          </Link>
          .
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Funding cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Move between Italy, funding, urgency, and language sub-clusters without losing context.
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
              Strongest fully funded Italy routes first
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you want the core Italy full-funding shortlist before branching into article pages.
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
              Still-open fully funded scholarships in Italy
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Use this shortlist if you need to apply soon and want to stay inside Italy.
            </p>
          </div>
          <div className="grid gap-4">
            {stillOpenScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Who should use this page
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page is better for applicants who need strong cost coverage first
          and are willing to work with a narrower Italy shortlist. If you are still
          open to partial scholarships, regional funding, or fee waivers, the broader
          Italy cluster will be more useful.
        </p>
      </section>
    </div>
  );
}
