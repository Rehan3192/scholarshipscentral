import type { Metadata } from "next";
import Link from "next/link";

import { scholarships } from "@/data/scholarships";
import { COUNTRIES } from "@/data/values";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { toSegment } from "@/lib/helpers";

export const metadata: Metadata = {
  title: "Scholarships by Country | Scholarships Central",
  description:
    "Browse scholarships by destination country. We only link to official external application pages.",
  alternates: { canonical: "/countries" },
};

export default function CountriesPage() {
  const counts = new Map<string, number>();
  for (const s of scholarships) {
    counts.set(s.country, (counts.get(s.country) ?? 0) + 1);
  }

  const countriesWithCounts = COUNTRIES.map((name) => ({
    name,
    count: counts.get(name) ?? 0,
    href: `/countries/${toSegment(name)}`,
  }))
    .filter((x) => x.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Countries", href: "/countries" },
        ]}
      />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Scholarships by country
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Browse scholarships by destination country. We only link to official
          external application pages.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2 text-sm">
          <Link
            href="/scholarships"
            className="font-medium text-blue-700 hover:underline"
          >
            All scholarships
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/degrees" className="font-medium text-blue-700 hover:underline">
            Browse by degree
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/funding" className="font-medium text-blue-700 hover:underline">
            Browse by funding
          </Link>
        </div>
      </header>

      {countriesWithCounts.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm">
          <p className="mb-0">No countries available yet.</p>
        </div>
      ) : (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              All countries
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              {countriesWithCounts.length} countr
              {countriesWithCounts.length === 1 ? "y" : "ies"}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {countriesWithCounts.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-base font-semibold text-gray-900">
                    {c.name}
                  </div>
                  <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700">
                    {c.count}
                  </span>
                </div>
                <div className="mt-2 text-sm text-gray-700">
                  View scholarships in {c.name}.
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
