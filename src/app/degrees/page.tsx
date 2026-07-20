import type { Metadata } from "next";
import Link from "next/link";

import { scholarships } from "@/data/scholarships";
import { DEGREE_LEVELS } from "@/data/values";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { toSegment } from "@/lib/helpers";

export const metadata: Metadata = {
  title: "Scholarships by Degree",
  description:
    "Browse scholarships by degree level, including Bachelors, Masters, and PhD opportunities with official application links.",
  alternates: { canonical: "/degrees" },
};

export default function DegreesPage() {
  const counts = new Map<string, number>();
  for (const s of scholarships) {
    counts.set(s.degreeLevel, (counts.get(s.degreeLevel) ?? 0) + 1);
  }

  const items = DEGREE_LEVELS.map((degree) => ({
    degree,
    count: counts.get(degree) ?? 0,
    href: `/degrees/${toSegment(degree)}`,
  })).filter((x) => x.count > 0);

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Degrees", href: "/degrees" },
        ]}
      />

      <header className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/50 p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
          Degree-level scholarship search
        </div>
        <h1 className="mt-4 mb-0 text-3xl font-bold text-slate-950 sm:text-4xl">
          Scholarships by degree
        </h1>
        <p className="mt-3 mb-0 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
          Pick your study level first, then compare scholarships by destination,
          funding coverage, deadline, and official provider link.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-4 text-sm">
          <Link
            href="/scholarships"
            className="font-semibold text-blue-700 hover:underline"
          >
            All scholarships
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/countries" className="font-semibold text-blue-700 hover:underline">
            Browse by country
          </Link>
          <span className="text-slate-400">•</span>
          <Link href="/funding" className="font-semibold text-blue-700 hover:underline">
            Browse by funding
          </Link>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 text-sm text-slate-700 shadow-sm">
          <p className="mb-0">No degree pages available yet.</p>
        </div>
      ) : (
        <section className="space-y-4">
          <div>
            <h2 className="mt-0 text-2xl font-semibold text-slate-950">
              Choose your degree level
            </h2>
            <p className="mb-0 text-sm text-slate-600">
              These pages are useful when you already know whether you need a
              bachelor&apos;s, master&apos;s, or PhD scholarship.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {items.map((d) => (
              <Link
                key={d.degree}
                href={d.href}
                className="group rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/50 p-6 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-blue-200 hover:shadow-lg motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold text-slate-950">
                    {d.degree}
                  </div>
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">
                    {d.count}
                  </span>
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-700">
                  Browse {d.degree} opportunities with funding and deadline
                  details in one place.
                </div>
                <div className="mt-4 text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                  Explore {d.degree.toLowerCase()} scholarships →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
