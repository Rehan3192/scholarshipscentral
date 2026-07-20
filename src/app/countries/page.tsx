import type { Metadata } from "next";
import Link from "next/link";

import { scholarships } from "@/data/scholarships";
import { COUNTRIES } from "@/data/values";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { toSegment } from "@/lib/helpers";

export const metadata: Metadata = {
  title: "Scholarships by Country",
  description:
    "Browse scholarships by destination country with degree level, funding type, deadlines, and official application links.",
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

      <header className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/50 p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
          Destination-based scholarship search
        </div>
        <h1 className="mt-4 mb-0 text-3xl font-bold text-slate-950 sm:text-4xl">
          Scholarships by country
        </h1>
        <p className="mt-3 mb-0 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
          Choose a study destination to see scholarship guides connected to
          that country, including funding type, degree level, deadlines, and
          official application links.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-4 text-sm">
          <Link
            href="/scholarships"
            className="font-semibold text-blue-700 hover:underline"
          >
            All scholarships
          </Link>
          <span className="text-slate-400">•</span>
          <Link
            href="/europe-scholarships-2026"
            className="font-semibold text-blue-700 hover:underline"
          >
            Europe scholarships 2026
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/degrees" className="font-semibold text-blue-700 hover:underline">
            Browse by degree
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/funding" className="font-semibold text-blue-700 hover:underline">
            Browse by funding
          </Link>
        </div>
      </header>

      {countriesWithCounts.length === 0 ? (
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 text-sm text-slate-700 shadow-sm">
          <p className="mb-0">No countries available yet.</p>
        </div>
      ) : (
        <section className="space-y-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <h2 className="mt-0 text-2xl font-semibold text-slate-950">
                All countries
              </h2>
              <p className="mb-0 text-sm text-slate-600">
                Each card opens a focused country page, so students know what
                they are browsing before they click.
              </p>
            </div>
            <p className="mb-0 text-sm text-slate-600">
              {countriesWithCounts.length} countr
              {countriesWithCounts.length === 1 ? "y" : "ies"}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {countriesWithCounts.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="group rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/50 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-blue-200 hover:shadow-lg motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-base font-semibold text-slate-950">
                    {c.name}
                  </div>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">
                    {c.count}
                  </span>
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-700">
                  View funding options, deadlines, and official links for {c.name}.
                </div>
                <div className="mt-4 text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  Browse {c.name} scholarships →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
