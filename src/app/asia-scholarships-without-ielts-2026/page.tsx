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
  isAsianScholarship,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Asia Scholarships Without IELTS 2026 | Scholarships Central",
  description:
    "Browse Asia scholarships for 2026 that discuss IELTS alternatives, English-medium routes, or accepted language-proof flexibility.",
  alternates: {
    canonical: "/asia-scholarships-without-ielts-2026",
  },
};

const ASIA_LANGUAGE_LINKS = [
  {
    href: "/government-scholarships-in-asia-2026",
    title: "Government scholarships in Asia",
    description: "Compare Asia language-flexible routes with public-funding routes in the same region.",
    badge: "Government",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Use this when you want Asia language-flexible routes with live deadlines first.",
    badge: "Open now",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Move from language flexibility into the stronger funding pool.",
    badge: "Funding",
  },
  {
    href: "/countries/japan",
    title: "Japan scholarships",
    description: "Go deeper into Japan routes if MEXT or other Japan options fit your shortlist.",
    badge: "Country",
  },
  {
    href: "/countries/china",
    title: "China scholarships",
    description: "Go deeper into China routes if CSC or related options fit your shortlist.",
    badge: "Country",
  },
  {
    href: "/countries/turkey",
    title: "Turkey scholarships",
    description: "Compare Asia language-flexible routes with Türkiye scholarship options.",
    badge: "Country",
  },
] as const;

export default function AsiaScholarshipsWithoutIelts2026Page() {
  const asiaLanguageFlexibleScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        isAsianScholarship(scholarship) && hasLanguageFlexibleRoute(scholarship),
    )
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenScholarships = [...asiaLanguageFlexibleScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const fullyFundedCount = asiaLanguageFlexibleScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const countryCount = new Set(
    asiaLanguageFlexibleScholarships.map((scholarship) => scholarship.country),
  ).size;

  const items = asiaLanguageFlexibleScholarships.slice(0, 20).map((scholarship) => ({
    name: scholarship.title,
    href: `/scholarships/${scholarship.slug}`,
  }));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          {
            label: "Asia scholarships without IELTS 2026",
            href: "/asia-scholarships-without-ielts-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/asia-scholarships-without-ielts-2026"
        title="Asia Scholarships Without IELTS 2026"
        description="Browse Asia scholarships for 2026 that discuss IELTS alternatives, English-medium instruction, or accepted language-proof flexibility."
      />
      <ItemListJsonLd
        pagePath="/asia-scholarships-without-ielts-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Asia scholarships without IELTS 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want Asia scholarship routes that mention IELTS
          alternatives, English-medium instruction, or other accepted language-proof flexibility.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {stillOpenScholarships.length} Asia routes still open
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
            href="/scholarships"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to scholarship directory
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Asia language-flexible routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {asiaLanguageFlexibleScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Asia scholarships where the official guidance discusses language-proof flexibility.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Countries covered
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {countryCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Asia destinations currently represented in this language-flexible cluster.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Still open now
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {stillOpenScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Asia language-flexible scholarships with live or rolling deadlines.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this Asia page means by &quot;without IELTS&quot;
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          On this page, &quot;without IELTS&quot; does not mean there is no language proof at all.
          It means the scholarship or linked admission guidance discusses accepted
          alternatives, exemptions, English-medium study history, or another route
          besides IELTS alone.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          That distinction matters because some Asia scholarships are flexible at
          pre-admission or application stage but still require formal proof later.
          Use this page to build a shortlist quickly, then confirm the exact language
          rule on the official source before applying.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Asia language cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to narrow Asia language-flexible routes by deadline, funding, or country.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ASIA_LANGUAGE_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {stillOpenScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Asia scholarships without IELTS still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you need Asia language-flexible routes that are still active now.
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
            All Asia scholarships with IELTS alternatives
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {asiaLanguageFlexibleScholarships.length} scholarship
            {asiaLanguageFlexibleScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {asiaLanguageFlexibleScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
