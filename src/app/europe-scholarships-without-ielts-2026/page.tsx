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
  isEuropeanScholarship,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Europe Scholarships Without IELTS 2026 | Scholarships Central",
  description:
    "Browse Europe scholarships for 2026 that discuss IELTS alternatives, English-medium routes, or accepted language-proof flexibility.",
  alternates: {
    canonical: "/europe-scholarships-without-ielts-2026",
  },
};

const LANGUAGE_CLUSTER_LINKS = [
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Return to the full Europe pool after narrowing by language-flexible routes.",
    badge: "Europe hub",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description: "Use this when you need language-flexible routes with live deadlines first.",
    badge: "Open now",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Move from language flexibility into the strongest funding pool.",
    badge: "Funding",
  },
  {
    href: "/italy-scholarships-without-ielts-2026",
    title: "Italy scholarships without IELTS",
    description: "A stronger next step for Italy routes that already mention language-proof alternatives.",
    badge: "Country",
  },
  {
    href: "/uk-scholarships-without-ielts-2026",
    title: "UK scholarships without IELTS",
    description: "Use this when you want UK scholarship routes that already mention alternative language pathways.",
    badge: "Country",
  },
  {
    href: "/germany-scholarships-without-ielts-2026",
    title: "Germany scholarships without IELTS",
    description: "Good next step for Germany routes that already discuss flexible English-proof handling.",
    badge: "Country",
  },
] as const;

export default function EuropeScholarshipsWithoutIelts2026Page() {
  const languageFlexibleScholarships = [...scholarships]
    .filter(
      (scholarship) =>
        isEuropeanScholarship(scholarship) && hasLanguageFlexibleRoute(scholarship),
    )
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const stillOpenLanguageFlexibleScholarships = [...languageFlexibleScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);

  const fullyFundedCount = languageFlexibleScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const countryCount = new Set(
    languageFlexibleScholarships.map((scholarship) => scholarship.country),
  ).size;

  const items = languageFlexibleScholarships
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
          { label: "Europe scholarships 2026", href: "/europe-scholarships-2026" },
          {
            label: "Europe scholarships without IELTS 2026",
            href: "/europe-scholarships-without-ielts-2026",
          },
        ]}
      />
      <WebPageJsonLd
        pagePath="/europe-scholarships-without-ielts-2026"
        title="Europe Scholarships Without IELTS 2026"
        description="Browse Europe scholarships for 2026 that discuss IELTS alternatives, English-medium instruction, or accepted language-proof flexibility."
      />
      <ItemListJsonLd
        pagePath="/europe-scholarships-without-ielts-2026"
        items={items}
      />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Europe scholarships without IELTS 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Use this page when you want Europe scholarship routes that mention
          IELTS alternatives, English-medium instruction, or other accepted
          language-proof flexibility.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/scholarships-still-open-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            {stillOpenLanguageFlexibleScholarships.length} language-flexible routes still open
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
            href="/europe-scholarships-2026"
            className="font-medium text-blue-700 hover:underline"
          >
            Back to Europe hub
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            IELTS-alternative routes
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {languageFlexibleScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Europe listings where official guidance discusses language-proof flexibility.
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
            Europe destinations currently represented in this language-flexible cluster.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Still open now
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {stillOpenLanguageFlexibleScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Language-flexible Europe scholarships with live or rolling deadlines.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What “without IELTS” means on this page
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          On this site, “without IELTS” does not mean “without English proof.”
          It means the official scholarship or admission guidance discusses some
          kind of flexibility, such as English-medium instruction, accepted alternatives,
          exemptions, or a statement that IELTS is not the only route.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          That distinction matters because some Europe scholarships are flexible
          at the admission stage but still require formal proof later. Use this
          page to build a shortlist quickly, then always confirm the exact language
          rule on the official source before applying.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Language-flexible cluster links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these next steps to narrow by deadline, funding, or country once you have the language filter.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LANGUAGE_CLUSTER_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {stillOpenLanguageFlexibleScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Europe scholarships without IELTS still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you need language-flexible routes that are still active now.
            </p>
          </div>
          <div className="grid gap-4">
            {stillOpenLanguageFlexibleScholarships.slice(0, 6).map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All Europe scholarships with IELTS alternatives
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {languageFlexibleScholarships.length} scholarship
            {languageFlexibleScholarships.length === 1 ? "" : "s"}
          </p>
        </div>
        <div className="grid gap-4">
          {languageFlexibleScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
