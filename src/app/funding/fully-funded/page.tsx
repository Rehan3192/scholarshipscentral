import type { Metadata } from "next";
import Link from "next/link";
import { scholarships } from "@/data/scholarships";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import ScholarshipFilterBar from "@/components/scholarship/ScholarshipFilterBar";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
} from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Fully Funded Scholarships | Scholarships Central",
  description:
    "Find fully funded scholarships worldwide covering tuition fees, living expenses, and travel costs.",
  alternates: {
    canonical: "/funding/fully-funded",
  },
};

export default function FullyFundedScholarshipsPage() {
  const filtered = scholarships.filter((s) => s.fundingType === "Fully Funded");
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
          { label: "Fully funded scholarships", href: "/funding/fully-funded" },
        ]}
      />
      <ItemListJsonLd pagePath="/funding/fully-funded" items={items} />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Fully funded scholarships
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Browse fully funded scholarships worldwide. We only link to official
          external application pages.
        </p>
        <div className="pt-2">
          <ScholarshipFilterBar
            baseHref="/scholarships"
            primaryLabel="Filter: Fully funded"
            params={{ funding: "Fully Funded" }}
          />
        </div>
      </header>

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
