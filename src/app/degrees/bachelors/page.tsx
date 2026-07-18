import type { Metadata } from "next";
import Link from "next/link";
import { scholarships } from "@/data/scholarships";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import ScholarshipFilterBar from "@/components/scholarship/ScholarshipFilterBar";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Bachelor's Scholarships",
  description:
    "Explore fully funded and partially funded Bachelor's scholarships for international students worldwide.",
  alternates: {
    canonical: "/degrees/bachelors",
  },
};

export default function BachelorsScholarshipsPage() {
  const filtered = scholarships.filter((s) => s.degreeLevel === "Bachelors");
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
          { label: "Bachelor's Scholarships", href: "/degrees/bachelors" },
        ]}
      />
      <ItemListJsonLd pagePath="/degrees/bachelors" items={items} />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-slate-900 sm:text-4xl">
          Bachelor&apos;s Scholarships
        </h1>
        <p className="mb-0 text-sm text-slate-600">
          Browse scholarships at the Bachelors level. We only link to official
          external application pages.
        </p>
        <div className="pt-2">
          <ScholarshipFilterBar
            baseHref="/scholarships"
            primaryLabel="Filter: Bachelors"
            params={{ degree: "Bachelors" }}
          />
        </div>
      </header>

      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 text-sm text-slate-700">
          <p className="mb-3">No scholarships listed here yet.</p>
          <Link
            href="/scholarships"
            className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
          >
            Browse all scholarships
          </Link>
        </div>
      ) : (
        <section className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="mt-0 text-lg font-semibold text-slate-900">
              Results
            </h2>
            <p className="mb-0 text-sm text-slate-600">
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
