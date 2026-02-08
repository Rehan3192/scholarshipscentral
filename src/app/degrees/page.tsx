import type { Metadata } from "next";
import Link from "next/link";

import { scholarships } from "@/data/scholarships";
import { DEGREE_LEVELS } from "@/data/values";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";
import { toSegment } from "@/lib/helpers";

export const metadata: Metadata = {
  title: "Scholarships by Degree | Scholarships Central",
  description:
    "Browse scholarships by degree level (Bachelors, Masters, PhD). We only link to official external application pages.",
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

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Scholarships by degree
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Browse scholarships by program level. We only link to official
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
          <Link href="/countries" className="font-medium text-blue-700 hover:underline">
            Browse by country
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/funding" className="font-medium text-blue-700 hover:underline">
            Browse by funding
          </Link>
        </div>
      </header>

      {items.length === 0 ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm">
          <p className="mb-0">No degree pages available yet.</p>
        </div>
      ) : (
        <section className="grid gap-4 sm:grid-cols-3">
          {items.map((d) => (
            <Link
              key={d.degree}
              href={d.href}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-lg font-semibold text-gray-900">
                  {d.degree}
                </div>
                <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-semibold text-gray-700">
                  {d.count}
                </span>
              </div>
              <div className="mt-2 text-sm text-gray-700">
                Browse {d.degree} scholarships worldwide.
              </div>
              <div className="mt-4 text-sm font-medium text-blue-700">
                Explore {d.degree.toLowerCase()} &rarr;
              </div>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
