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
  isRollingDeadline,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Italy Scholarships Still Open 2026 | Scholarships Central",
  description:
    "Browse Italy scholarships still open in 2026, prioritize routes currently accepting applications, and move between the Italy cluster, fully funded pages, and deadline-focused hub pages.",
  alternates: {
    canonical: "/italy-scholarships-still-open-2026",
  },
};

const CLUSTER_LINKS = [
  {
    href: "/countries/italy",
    title: "Italy scholarships 2026",
    description: "Go back to the full Italy cluster if you want more options beyond the currently open pool.",
    badge: "Parent",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Compare Italy deadlines against the broader global urgency hub.",
    badge: "Core hub",
  },
  {
    href: "/fully-funded-scholarships-in-italy-2026",
    title: "Fully funded scholarships in Italy 2026",
    description: "Use this when full cost coverage matters more than deadline urgency.",
    badge: "Funding",
  },
  {
    href: "/italy-scholarships-without-ielts-2026",
    title: "Italy scholarships without IELTS",
    description: "Check this if you need language flexibility as well as live application windows.",
    badge: "Language",
  },
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Return to the Europe hub if Italy stops fitting your shortlist.",
    badge: "Europe",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Compare Italy against the full global funding pool before you commit.",
    badge: "Funding",
  },
] as const;

const APPLY_FIRST_SLUGS = [
  "italy-unicore-8-scholarship-masters",
  "university-of-turin-scholarships-2026",
  "italy-university-of-insubria-scholarship-masters",
  "italy-university-of-tuscia-scholarship-masters",
  "italy-university-of-camerino-scholarship-masters",
] as const;

type ItalyScholarship = (typeof scholarships)[number];

export default function ItalyScholarshipsStillOpen2026Page() {
  const italyOpenScholarships = scholarships
    .filter(
      (scholarship) =>
        scholarship.country === "Italy" && isStillOpen(scholarship.deadline),
    )
    .sort(sortByUpcomingDeadline);

  const rollingCount = italyOpenScholarships.filter((scholarship) =>
    isRollingDeadline(scholarship.deadline),
  ).length;
  const fullyFundedCount = italyOpenScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const languageFlexibleCount = italyOpenScholarships.filter((scholarship) =>
    hasLanguageFlexibleRoute(scholarship),
  ).length;

  const applyFirstScholarships = APPLY_FIRST_SLUGS.map((slug) =>
    italyOpenScholarships.find((scholarship) => scholarship.slug === slug),
  ).filter((scholarship): scholarship is ItalyScholarship => Boolean(scholarship));

  const items = italyOpenScholarships.map((scholarship) => ({
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
            label: "Italy scholarships still open 2026",
            href: "/italy-scholarships-still-open-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/italy-scholarships-still-open-2026"
        title="Italy Scholarships Still Open 2026"
        description="Browse Italy scholarships still open in 2026 and prioritize the Italy routes currently accepting applications."
      />
      <ItemListJsonLd pagePath="/italy-scholarships-still-open-2026" items={items} />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Italy scholarships still open 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          This page is built for action, not browsing. If you want Italy routes
          currently open, still accepting applications, or using rolling 2026
          calls, start here and work from the deadlines approaching first.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/scholarships-still-open-2026" className="font-medium text-blue-700 hover:underline">
            Back to scholarships still open 2026
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/countries/italy" className="font-medium text-blue-700 hover:underline">
            Return to Italy scholarships 2026
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/fully-funded-scholarships-in-italy-2026" className="font-medium text-blue-700 hover:underline">
            Compare Italy fully funded routes
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Currently open
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {italyOpenScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy scholarships still accepting applications in the current 2026 cycle.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Deadlines approaching
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {Math.max(italyOpenScholarships.length - rollingCount, 0)}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy routes where timing matters more than long-term comparison.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Rolling or variable
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {rollingCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy routes using rolling or call-based timing language right now.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Fully funded among them
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {fullyFundedCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Still-open Italy routes that already match full-funding intent.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Where to find more Italy options
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link href="/countries/italy" className="font-medium text-blue-700 hover:underline">
            Italy scholarships 2026
          </Link>
          {" "}for the full Italy list. Use{" "}
          <Link href="/scholarships-still-open-2026" className="font-medium text-blue-700 hover:underline">
            scholarships still open 2026
          </Link>
          {" "}to compare current deadlines across countries.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          Use{" "}
          <Link href="/fully-funded-scholarships-in-italy-2026" className="font-medium text-blue-700 hover:underline">
            fully funded scholarships in Italy 2026
          </Link>
          {" "}for stronger funding, or{" "}
          <Link href="/italy-scholarships-without-ielts-2026" className="font-medium text-blue-700 hover:underline">
            Italy scholarships without IELTS
          </Link>
          {" "}for language-flexible routes.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Italy urgency cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Move between the Italy cluster, the deadline hub, and funding-qualified pages without losing context.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CLUSTER_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {applyFirstScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Apply-first Italy opportunities
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start with these routes if you want the strongest Italy pages currently open or deadlines approaching.
            </p>
          </div>
          <div className="grid gap-4">
            {applyFirstScholarships.map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      {languageFlexibleCount > 0 ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            If you also need language flexibility
          </h2>
          <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
            Right now, {languageFlexibleCount} Italy routes in the still-open pool
            also discuss language-proof flexibility. Use{" "}
            <Link href="/italy-scholarships-without-ielts-2026" className="font-medium text-blue-700 hover:underline">
              Italy scholarships without IELTS
            </Link>
            {" "}if you need that filter before deciding what to apply for.
          </p>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All Italy scholarships still accepting applications
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {italyOpenScholarships.length} scholarship{italyOpenScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {italyOpenScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
