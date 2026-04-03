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
  title: "Italy Scholarships Without IELTS 2026 | Scholarships Central",
  description:
    "Browse Italy scholarships for 2026 that discuss IELTS alternatives, English-medium routes, or accepted language-proof flexibility.",
  alternates: {
    canonical: "/italy-scholarships-without-ielts-2026",
  },
};

const ITALY_LANGUAGE_LINKS = [
  {
    href: "/europe-scholarships-without-ielts-2026",
    title: "Europe scholarships without IELTS",
    description: "Return to the wider Europe language-flexible pool after narrowing Italy.",
    badge: "Europe hub",
  },
  {
    href: "/countries/italy",
    title: "Italy scholarships",
    description: "Go back to the full Italy scholarship pool without the language filter.",
    badge: "Country",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Use this when your next filter is active deadlines rather than country alone.",
    badge: "Open now",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Move from language flexibility into stronger funding routes.",
    badge: "Funding",
  },
  {
    href: "/uk-scholarships-without-ielts-2026",
    title: "UK scholarships without IELTS",
    description: "Compare Italy routes with UK scholarship pages that also mention alternative proof.",
    badge: "Compare",
  },
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Return to the wider Europe hub when you want to expand beyond Italy.",
    badge: "Europe",
  },
] as const;

export default function ItalyScholarshipsWithoutIelts2026Page() {
  const italyLanguageFlexibleScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        scholarship.country === "Italy" && hasLanguageFlexibleRoute(scholarship),
    )
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenScholarships = [...italyLanguageFlexibleScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const fullyFundedCount = italyLanguageFlexibleScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const mastersCount = italyLanguageFlexibleScholarships.filter(
    (scholarship) => scholarship.degreeLevel === "Masters",
  ).length;

  const items = italyLanguageFlexibleScholarships
    .slice(0, 20)
    .map((scholarship) => ({
      name: scholarship.title,
      href: `/scholarships/${scholarship.slug}`,
    }));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          { label: "Italy scholarships", href: "/countries/italy" },
          {
            label: "Italy scholarships without IELTS 2026",
            href: "/italy-scholarships-without-ielts-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/italy-scholarships-without-ielts-2026"
        title="Italy Scholarships Without IELTS 2026"
        description="Browse Italy scholarships for 2026 that discuss IELTS alternatives, English-medium instruction, or accepted language-proof flexibility."
      />
      <ItemListJsonLd
        pagePath="/italy-scholarships-without-ielts-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Italy scholarships without IELTS 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want Italy scholarship routes that mention IELTS
          alternatives, English-medium instruction, or other accepted language-proof flexibility.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {stillOpenScholarships.length} Italy routes still open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/fully-funded-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {fullyFundedCount} fully funded options
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link
            href="/countries/italy"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to Italy country page
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Italy language-flexible routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {italyLanguageFlexibleScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy scholarships where the official guidance discusses language-proof flexibility.
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
            Italy listings with active or rolling deadlines right now.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Masters-heavy pool
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {mastersCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Italy language-flexible routes currently indexed at masters level.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this Italy frontend page means by &quot;without IELTS&quot;
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          On this page, &quot;without IELTS&quot; does not mean there is no language proof at all.
          It means the scholarship or linked admission guidance discusses accepted
          alternatives, English-medium study history, exemptions, or another route
          besides IELTS alone.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This is especially relevant in Italy because some routes separate pre-admission,
          scholarship ranking, and final enrolment. Use this page to shortlist the right
          opportunities first, then confirm the exact language rule on the official source
          before applying.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Italy language cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to compare Italy language-flexible routes with UK, Europe, and funding hubs.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ITALY_LANGUAGE_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {stillOpenScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Italy scholarships without IELTS still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you need Italy language-flexible routes with current deadlines.
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
            All Italy scholarships with IELTS alternatives
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {italyLanguageFlexibleScholarships.length} scholarship
            {italyLanguageFlexibleScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {italyLanguageFlexibleScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
