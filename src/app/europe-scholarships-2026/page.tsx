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
  isEuropeanScholarship,
  isStillOpen,
  sortByUpcomingDeadline,
} from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Europe Scholarships 2026 | Scholarships Central",
  description:
    "Browse Europe scholarships for 2026, including still-open opportunities, fully funded routes, and country pages for Germany, Italy, the UK, and more.",
  alternates: {
    canonical: "/europe-scholarships-2026",
  },
};

const EUROPE_CLUSTER_LINKS = [
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open in 2026",
    description: "Current listings with unexpired or rolling deadlines.",
    badge: "Urgent",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description: "Routes covering tuition, stipend, and travel support.",
    badge: "Core hub",
  },
  {
    href: "/countries/germany",
    title: "Germany scholarships",
    description: "DAAD, public university, and foundation-funded routes.",
  },
  {
    href: "/countries/italy",
    title: "Italy scholarships",
    description: "Regional funding and university merit scholarships in Italy.",
  },
  {
    href: "/countries/united-kingdom",
    title: "UK scholarships",
    description: "Scholarship routes across leading UK institutions.",
  },
  {
    href: "/countries",
    title: "All country pages",
    description: "Use country hubs to move from Europe-wide research to local pages.",
  },
] as const;

const LANGUAGE_FLEXIBLE_LINKS = [
  {
    href: "/scholarships/stipendium-hungaricum",
    title: "Stipendium Hungaricum",
    description: "Hungary route with official language-proof flexibility on some programs.",
  },
  {
    href: "/scholarships/uk-ucl-global-masters-scholarship",
    title: "UCL Global Masters Scholarship",
    description: "Useful if you are comparing UK scholarships with alternative English-proof routes.",
  },
  {
    href: "/scholarships/uk-ual-international-postgraduate-10000-scholarship",
    title: "UAL Postgraduate Scholarship",
    description: "Arts-focused scholarship page with language-path guidance worth checking.",
  },
  {
    href: "/scholarships/university-of-turin-scholarships-2026",
    title: "University of Turin Scholarships 2026",
    description: "Italy scholarship page with current admission and language-proof notes.",
  },
] as const;

export default function EuropeScholarships2026Page() {
  const europeScholarships = [...scholarships]
    .filter(isEuropeanScholarship)
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));
  const stillOpenEuropeScholarships = [...europeScholarships]
    .filter((scholarship) => isStillOpen(scholarship.deadline))
    .sort(sortByUpcomingDeadline);
  const fullyFundedEuropeCount = europeScholarships.filter(
    (scholarship) => scholarship.fundingType === "Fully Funded",
  ).length;
  const countryCount = new Set(
    europeScholarships.map((scholarship) => scholarship.country),
  ).size;

  const stillOpenCount = stillOpenEuropeScholarships.length;
  const items = europeScholarships
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
        ]}
      />
      <WebPageJsonLd
        pagePath="/europe-scholarships-2026"
        title="Europe Scholarships 2026"
        description="Browse Europe scholarships for 2026, with direct paths to still-open, fully funded, and country-specific scholarship pages."
      />
      <ItemListJsonLd pagePath="/europe-scholarships-2026" items={items} />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Europe scholarships 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Browse Europe scholarships in one place, then move into still-open,
          fully funded, and country-level pages without starting over.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/scholarships-still-open-2026" className="font-medium text-blue-700 hover:underline">
            {stillOpenCount} Europe scholarships still open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/fully-funded-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            Fully funded scholarships hub
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/countries" className="font-medium text-blue-700 hover:underline">
            Country pages
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Europe coverage
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {europeScholarships.length}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Europe scholarships across {countryCount} countries in the live directory.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Still open
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {stillOpenCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Europe scholarships with active or rolling deadlines right now.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 xl:col-span-1">
          <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-blue-700">
            Fully funded
          </p>
          <p className="mb-0 text-3xl font-bold text-gray-900">
            {fullyFundedEuropeCount}
          </p>
          <p className="mt-2 mb-0 text-sm text-gray-600">
            Europe listings that already match full-funding intent.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What this frontend Europe hub gives you
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This page now runs directly from the live scholarship dataset, so
          Europe scholarships appear here automatically as the directory grows.
          Start here when you want the full Europe pool, then move into still-open,
          fully funded, or country-level pages once you know how narrow your search
          needs to be.
        </p>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          If you are trying to apply soon, check the still-open Europe routes
          first. If you care more about cost coverage, jump straight into the
          fully funded hub before coming back to the full Europe list.
        </p>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Europe hub links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these paths to move from broad Europe intent to narrower pages.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EUROPE_CLUSTER_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      {stillOpenEuropeScholarships.length > 0 ? (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Europe scholarships still open
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Start here if you want live deadlines before scanning the full Europe list.
            </p>
          </div>
          <div className="grid gap-4">
            {stillOpenEuropeScholarships.slice(0, 6).map((scholarship) => (
              <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Europe scholarship pages with language-flexible routes
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these pages when you need Europe scholarship options that discuss
            alternative English-proof routes instead of relying on one test only.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {LANGUAGE_FLEXIBLE_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} badge="Without IELTS" />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All Europe scholarships
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {europeScholarships.length} scholarship{europeScholarships.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid gap-4">
          {europeScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
