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
  title: "Germany Scholarships Without IELTS 2026 | Scholarships Central",
  description:
    "Browse Germany scholarships for 2026 that discuss IELTS alternatives, English-medium routes, or accepted language-proof flexibility.",
  alternates: {
    canonical: "/germany-scholarships-without-ielts-2026",
  },
};

const GERMANY_LANGUAGE_LINKS = [
  {
    href: "/europe-scholarships-without-ielts-2026",
    title: "Europe scholarships without IELTS",
    description: "Return to the wider Europe pool once you finish narrowing Germany options.",
    badge: "Europe hub",
  },
  {
    href: "/countries/germany",
    title: "Germany scholarships",
    description: "Go back to the full Germany scholarship pool without the language filter.",
    badge: "Country",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Use this when you want Germany-friendly language routes with active deadlines first.",
    badge: "Open now",
  },
  {
    href: "/fully-funded-scholarships-still-open-2026",
    title: "Fully funded scholarships still open 2026",
    description: "Move from Germany language flexibility into the strongest live funding routes.",
    badge: "Funding",
  },
  {
    href: "/government-scholarships-in-europe-2026",
    title: "Government scholarships in Europe",
    description: "Compare Germany routes with wider public-funding opportunities across Europe.",
    badge: "Government",
  },
  {
    href: "/italy-scholarships-without-ielts-2026",
    title: "Italy scholarships without IELTS",
    description: "Compare Germany language-flexible routes with Italy alternatives.",
    badge: "Compare",
  },
] as const;

export default function GermanyScholarshipsWithoutIelts2026Page() {
  const germanyLanguageFlexibleScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        scholarship.country === "Germany" &&
        hasLanguageFlexibleRoute(scholarship),
    )
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenScholarships = [...germanyLanguageFlexibleScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const fullyFundedCount = germanyLanguageFlexibleScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const mastersCount = germanyLanguageFlexibleScholarships.filter(
    (scholarship) => scholarship.degreeLevel === "Masters",
  ).length;

  const items = germanyLanguageFlexibleScholarships
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
          { label: "Germany scholarships", href: "/countries/germany" },
          {
            label: "Germany scholarships without IELTS 2026",
            href: "/germany-scholarships-without-ielts-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/germany-scholarships-without-ielts-2026"
        title="Germany Scholarships Without IELTS 2026"
        description="Browse Germany scholarships for 2026 that discuss IELTS alternatives, English-medium instruction, or accepted language-proof flexibility."
      />
      <ItemListJsonLd
        pagePath="/germany-scholarships-without-ielts-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Germany scholarships without IELTS 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want Germany scholarship routes that mention
          IELTS alternatives, English-medium instruction, or other accepted language-proof flexibility.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {stillOpenScholarships.length} Germany routes still open
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
            href="/countries/germany"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to Germany country page
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Germany language-flexible routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {germanyLanguageFlexibleScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Germany scholarships where the official guidance discusses language-proof flexibility.
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
            Germany listings with active or rolling deadlines right now.
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
            Germany language-flexible routes currently indexed at masters level.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this Germany page means by &quot;without IELTS&quot;
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          On this page, &quot;without IELTS&quot; does not mean there is no language proof at all.
          It means the scholarship or linked admission guidance discusses accepted
          alternatives, exemptions, English-medium study history, or another route
          besides IELTS alone.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This matters in Germany because scholarship rules and university admission
          rules are often connected but not identical. Use this page to shortlist the
          right Germany routes first, then confirm the exact language rule on the official source.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Germany language cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to compare Germany language-flexible routes with Europe, funding, and government hubs.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GERMANY_LANGUAGE_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {stillOpenScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Germany scholarships without IELTS still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you need Germany language-flexible routes with current deadlines.
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
            All Germany scholarships with IELTS alternatives
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {germanyLanguageFlexibleScholarships.length} scholarship
            {germanyLanguageFlexibleScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {germanyLanguageFlexibleScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
