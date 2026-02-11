import type { Metadata } from "next";
import Link from "next/link";
import { scholarships } from "@/data/scholarships";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import ScholarshipFilterBar from "@/components/scholarship/ScholarshipFilterBar";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Scholarships in United Kingdom | Scholarships Central",
  description:
    "Browse fully funded and partially funded scholarships in the United Kingdom for international students with official application links.",
  alternates: {
    canonical: "/countries/united-kingdom",
  },
};

export default function UnitedKingdomScholarshipsPage() {
  const filtered = scholarships.filter(
    (s) => s.country === "United Kingdom"
  );
  const items = filtered.map((s) => ({
    name: s.title,
    href: `/scholarships/${s.slug}`,
  }));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          {
            label: "Scholarships in United Kingdom",
            href: "/countries/united-kingdom",
          },
        ]}
      />
      <ItemListJsonLd pagePath="/countries/united-kingdom" items={items} />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Scholarships in United Kingdom
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Explore scholarships available in the United Kingdom. We only link to
          official external application pages.
        </p>
        <div className="pt-2">
          <ScholarshipFilterBar
            baseHref="/scholarships"
            primaryLabel="Filter: United Kingdom"
            params={{ country: "United Kingdom" }}
          />
        </div>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Featured application guide
        </h2>
        <p className="mt-2 mb-0 text-sm text-gray-700">
          Complete application guide for the Loughborough Global Impact Scholarship 2026. Eligibility, benefits, deadlines, documents, and step-by-step process explained.
        </p>
        <div className="mt-4">
          <Link
            href="/loughborough-global-impact-scholarship-application-guide"
            className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Read the guide
          </Link>
        </div>
      </section>

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-sm text-gray-700">
          <p className="mb-3">No scholarships listed here yet.</p>
          <Link
            href="/scholarships"
            className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Browse all scholarships
          </Link>
        </div>
      ) : (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Results
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              {filtered.length} scholarship{filtered.length === 1 ? "" : "s"}
            </p>
          </div>

          <div className="grid gap-4">
            {filtered.map((s) => (
              <ScholarshipCard key={s.slug} scholarship={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
