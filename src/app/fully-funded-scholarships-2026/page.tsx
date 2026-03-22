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
import { isEuropeanScholarship, isStillOpen } from "@/lib/scholarship-taxonomy";

export const metadata: Metadata = {
  title: "Fully Funded Scholarships 2026 | Scholarships Central",
  description:
    "Browse fully funded scholarships for 2026 and move into Europe, Asia, government-funded, and still-open scholarship routes from one page.",
  alternates: {
    canonical: "/fully-funded-scholarships-2026",
  },
};

const HUB_LINKS = [
  {
    href: "/europe-scholarships-2026",
    title: "Europe scholarships 2026",
    description: "Full Europe hub with country pages, still-open routes, and scholarship listings.",
    badge: "Europe",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Still-open scholarships 2026",
    description: "Move into live deadlines after scanning the full-funding pool.",
    badge: "Open now",
  },
  {
    href: "/countries/japan",
    title: "Japan scholarships",
    description: "One of the strongest Asia country pages for fully funded routes in the current directory.",
    badge: "Asia",
  },
  {
    href: "/countries/china",
    title: "China scholarships",
    description: "Government and university routes across major Chinese institutions.",
    badge: "Asia",
  },
  {
    href: "/countries/singapore",
    title: "Singapore scholarships",
    description: "Scholarship routes in Singapore for graduate and research applicants.",
    badge: "Asia",
  },
  {
    href: "/funding/fully-funded",
    title: "Funding taxonomy page",
    description: "Existing fully funded category page for the broader scholarship directory.",
  },
] as const;

const GOVERNMENT_ROUTE_LINKS = [
  {
    href: "/scholarships/romanian-government-scholarship",
    title: "Romanian Government Scholarship",
    description: "Government-funded route with direct state application flow for non-EU applicants.",
  },
  {
    href: "/scholarships/romanian-government-scholarship-masters",
    title: "Romanian Government Scholarship (Masters)",
    description: "Masters-level Romania route inside the current government scholarship cluster.",
  },
  {
    href: "/scholarships/azerbaijan-government-scholarship",
    title: "Azerbaijan Government Scholarship",
    description: "Full-support government route with nomination and second-stage SIACAS processing.",
  },
  {
    href: "/scholarships/stipendium-hungaricum",
    title: "Stipendium Hungaricum",
    description: "One of the strongest public-funding scholarship routes in Europe.",
  },
] as const;

const LANGUAGE_ROUTE_LINKS = [
  {
    href: "/scholarships/stipendium-hungaricum",
    title: "Stipendium Hungaricum",
    description: "Useful if you need a fully funded Europe route with flexible language-proof handling on some programs.",
  },
  {
    href: "/scholarships/university-of-turin-scholarships-2026",
    title: "University of Turin Scholarships 2026",
    description: "Worth checking alongside fully funded routes if you are comparing language-proof flexibility.",
  },
] as const;

export default function FullyFundedScholarships2026Page() {
  const fullyFundedScholarships = [...scholarships]
    .filter((scholarship) => scholarship.fundingType === "Fully Funded")
    .sort((a, b) => (b.lastUpdated ?? "").localeCompare(a.lastUpdated ?? ""));

  const europeCount = fullyFundedScholarships.filter(isEuropeanScholarship).length;
  const stillOpenCount = fullyFundedScholarships.filter((scholarship) =>
    isStillOpen(scholarship.deadline),
  ).length;
  const items = fullyFundedScholarships.slice(0, 20).map((scholarship) => ({
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
        ]}
      />
      <WebPageJsonLd
        pagePath="/fully-funded-scholarships-2026"
        title="Fully Funded Scholarships 2026"
        description="Browse fully funded scholarships for 2026, then move into Europe, Asia, government-funded, and still-open scholarship paths."
      />
      <ItemListJsonLd pagePath="/fully-funded-scholarships-2026" items={items} />

      <header className="space-y-3">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Fully funded scholarships 2026
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Start with the full-funding pool, then branch into Europe hubs, Asia
          country pages, government routes, and live deadlines without duplicating work.
        </p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link href="/europe-scholarships-2026" className="font-medium text-blue-700 hover:underline">
            {europeCount} fully funded Europe listings
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/scholarships-still-open-2026" className="font-medium text-blue-700 hover:underline">
            {stillOpenCount} fully funded listings still open
          </Link>
          <span className="text-gray-400">&bull;</span>
          <Link href="/funding/fully-funded" className="font-medium text-blue-700 hover:underline">
            Existing funding taxonomy
          </Link>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Fully funded hub links
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these paths to move from funding intent into region and topic clusters.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HUB_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Government-funded routes
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            These scholarship pages help you jump from fully funded intent into live government-backed routes.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {GOVERNMENT_ROUTE_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} badge="Government" />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Language-flexible scholarship pages
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            Use these pages when you also need routes that discuss alternative English-proof paths.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {LANGUAGE_ROUTE_LINKS.map((link) => (
            <HubLinkCard key={link.href} {...link} badge="Without IELTS" />
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            All fully funded scholarships
          </h2>
          <p className="mb-0 text-sm text-gray-600">
            {fullyFundedScholarships.length} scholarship{fullyFundedScholarships.length === 1 ? "" : "s"}
          </p>
        </div>

        <div className="grid gap-4">
          {fullyFundedScholarships.map((scholarship) => (
            <ScholarshipCard key={scholarship.slug} scholarship={scholarship} />
          ))}
        </div>
      </section>
    </div>
  );
}
