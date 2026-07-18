// FILE: src/app/degrees/[degree]/page.tsx

import type { Metadata } from "next";
import { scholarships } from "@/data/scholarships";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import ScholarshipFilterBar from "@/components/scholarship/ScholarshipFilterBar";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/StructuredData";

type Props = {
  params: Promise<{ degree: string }>;
};

const DEGREE_SLUGS = {
  bachelors: "Bachelors",
  masters: "Masters",
  phd: "PhD",
} as const;

function getDegreeLabel(degree: string) {
  return DEGREE_SLUGS[degree.toLowerCase() as keyof typeof DEGREE_SLUGS] ?? null;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(DEGREE_SLUGS).map((degree) => ({ degree }));
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { degree } = await params;
  const label = getDegreeLabel(decodeURIComponent(degree));

  if (!label) {
    return {
      title: "Degree Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${label} Scholarships`,
    description: `Browse ${label} scholarships worldwide.`,
    alternates: {
      canonical: `/degrees/${degree.toLowerCase()}`,
    },
  };
}

export default async function DegreePage({ params }: Props) {
  const { degree } = await params;
  const slug = decodeURIComponent(degree).toLowerCase();
  const label = getDegreeLabel(slug);
  if (!label) notFound();

  const filtered = scholarships.filter(
    (s) => s.degreeLevel === label
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
          { label: `${label} Scholarships`, href: `/degrees/${slug}` },
        ]}
      />
      <ItemListJsonLd pagePath={`/degrees/${slug}`} items={items} />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-slate-900 sm:text-4xl">
          {label} Scholarships
        </h1>
        <p className="mb-0 text-sm text-slate-600">
          Browse scholarships at the {label} level. We only link to official
          external application pages.
        </p>
        <div className="pt-2">
          <ScholarshipFilterBar
            baseHref="/scholarships"
            primaryLabel={`Filter: ${label}`}
            params={{ degree: label }}
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
