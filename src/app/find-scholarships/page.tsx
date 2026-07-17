import type { Metadata } from "next";
import Link from "next/link";

import Breadcrumbs from "@/components/common/Breadcrumbs";
import HubLinkCard from "@/components/hubs/HubLinkCard";
import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import { scholarships } from "@/data/scholarships";
import { COUNTRIES } from "@/data/values";
import { normalizeDiscovery } from "@/lib/discovery";
import FinderWizard from "./components/FinderWizard";
import type { FinderOptions, FinderScholarship } from "./types";

export const metadata: Metadata = {
  title: "Find Scholarships for You",
  description:
    "Find scholarships that match your degree, country preference, funding needs, and study goals.",
  alternates: {
    canonical: "/find-scholarships",
  },
  openGraph: {
    title: "Find Scholarships for You | Scholarships Central",
    description:
      "Find scholarships that match your degree, country preference, funding needs, and study goals.",
    url: "/find-scholarships",
  },
  twitter: {
    title: "Find Scholarships for You | Scholarships Central",
    description:
      "Find scholarships that match your degree, country preference, funding needs, and study goals.",
  },
};

const POPULAR_COUNTRIES = [
  "Germany",
  "Italy",
  "Japan",
  "South Korea",
  "Canada",
  "United Kingdom",
  "USA",
] as const;

const FALLBACK_FIELDS = [
  "Engineering",
  "Computer Science",
  "Medicine",
  "Business",
  "Social Sciences",
  "Natural Sciences",
  "Arts and Humanities",
] as const;

function uniqueSorted(items: string[]) {
  return Array.from(new Set(items.filter(Boolean))).sort((a, b) => a.localeCompare(b));
}

function buildFinderOptions(finderScholarships: FinderScholarship[]): FinderOptions {
  const normalized = finderScholarships.map((scholarship) => normalizeDiscovery(scholarship));
  const countries = uniqueSorted([
    ...COUNTRIES,
    ...normalized.flatMap((discovery) => discovery.hostCountries),
  ]);
  const fields = uniqueSorted([
    ...FALLBACK_FIELDS,
    ...normalized.flatMap((discovery) => discovery.fieldsOfStudy ?? []),
  ]);

  return {
    countries,
    popularCountries: POPULAR_COUNTRIES.filter((country) => countries.includes(country)),
    nationalities: uniqueSorted([...COUNTRIES]),
    fieldsOfStudy: fields,
  };
}

export default function FindScholarshipsPage() {
  const finderScholarships: FinderScholarship[] = scholarships.map((scholarship) => ({
    slug: scholarship.slug,
    title: scholarship.title,
    country: scholarship.country,
    degreeLevel: scholarship.degreeLevel,
    fundingType: scholarship.fundingType,
    deadline: scholarship.deadline,
    lastUpdated: scholarship.lastUpdated,
    discovery: scholarship.discovery,
  }));
  const finderOptions = buildFinderOptions(finderScholarships);

  return (
    <div className="space-y-8">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Find Scholarships", href: "/find-scholarships" },
        ]}
      />
      <WebPageJsonLd
        pagePath="/find-scholarships"
        title="Find Scholarships for You | Scholarships Central"
        description="Find scholarships that match your degree, country preference, funding needs, and study goals."
      />

      <header className="space-y-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Find Scholarships", href: "/find-scholarships" },
          ]}
        />
        <div className="max-w-3xl">
          <div className="mb-2 flex flex-wrap items-center gap-2 text-sm font-semibold text-blue-700">
            <span>Guided scholarship recommendations</span>
            <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide">Beta</span>
          </div>
          <h1 className="mb-0 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Find scholarships that match your profile.
          </h1>
          <p className="mt-4 mb-0 text-base text-gray-700">
            Answer a few questions about your degree, nationality, preferred
            destination, funding needs, English requirements, and study field.
            The finder ranks scholarships using the eligibility and funding
            information currently available.
          </p>
          <p className="mt-3 mb-0 text-sm text-gray-600">
            Help us improve recommendations by exploring scholarships and reporting issues.
          </p>
        </div>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="m-0 text-2xl font-semibold text-gray-900">
          How the finder works
        </h2>
        <p className="mt-3 mb-0 text-sm leading-7 text-gray-700">
          This is a guided recommendation tool, not a keyword search. It compares
          your answers with structured scholarship data, then explains why each
          scholarship appears as a strong match, a good match, or an option
          that needs verification before you apply.
        </p>
      </section>

      <FinderWizard scholarships={finderScholarships} options={finderOptions} />

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="m-0 text-2xl font-semibold text-gray-900">
          Scholarship finder FAQ
        </h2>
        <div className="mt-4 divide-y divide-gray-200 rounded-xl border border-gray-200">
          {[
            {
              question: "Are these guaranteed recommendations?",
              answer:
                "No. The finder helps prioritize scholarships to review, but you should always verify eligibility on the official provider website.",
            },
            {
              question: "Why do some results need verification?",
              answer:
                "Some providers do not publish structured nationality, IELTS, or field information clearly. Those scholarships can still be relevant, but need manual checking.",
            },
            {
              question: "Can I apply on Scholarships Central?",
              answer:
                "No. Scholarships Central is information-only and links you to official external application pages.",
            },
          ].map((item) => (
            <details key={item.question} className="p-4 open:bg-gray-50">
              <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900">
                {item.question}
              </summary>
              <p className="mt-3 mb-0 text-sm text-gray-700">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="m-0 text-2xl font-semibold text-gray-900">
            Continue exploring
          </h2>
          <p className="mt-1 mb-0 text-sm text-gray-600">
            Use these pages when you want to browse manually by deadline,
            funding type, or destination.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <HubLinkCard
            href="/scholarships-still-open-2026"
            title="Scholarships still open 2026"
            description="Browse current or rolling deadlines first."
            badge="Deadlines"
          />
          <HubLinkCard
            href="/fully-funded-scholarships-2026"
            title="Fully funded scholarships 2026"
            description="Compare scholarships where full funding is the main filter."
            badge="Funding"
          />
          <HubLinkCard
            href="/countries"
            title="Browse by country"
            description="Move into country-specific scholarship pages."
            badge="Countries"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="m-0 text-2xl font-semibold text-gray-900">
          Related guides
        </h2>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <Link href="/blog" className="font-semibold text-blue-700 hover:underline">
            Scholarship guides
          </Link>
          <Link href="/scholarship-results-2026" className="font-semibold text-blue-700 hover:underline">
            Scholarship results 2026
          </Link>
          <Link href="/europe-scholarships-without-ielts-2026" className="font-semibold text-blue-700 hover:underline">
            Scholarships without IELTS
          </Link>
        </div>
      </section>
    </div>
  );
}
