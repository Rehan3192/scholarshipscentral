// FILE: src/app/countries/[country]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import ScholarshipFilterBar from "@/components/scholarship/ScholarshipFilterBar";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/StructuredData";
import { scholarships } from "@/data/scholarships";
import { normalizeCountry } from "@/data/values";

type Props = {
  params: Promise<{ country: string }>;
};

function getCountryLabel(countryParam: string): string | null {
  try {
    const decoded = decodeURIComponent(countryParam);
    return normalizeCountry(decoded);
  } catch {
    return null;
  }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { country } = await params;
  const label = getCountryLabel(country);

  if (!label) {
    return {
      title: "Country Not Found",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `Scholarships in ${label} | Scholarships Central`,
    description: `Explore scholarships available in ${label}.`,
    alternates: {
      canonical: `/countries/${country}`,
    },
  };
}

export default async function CountryPage({ params }: Props) {
  const { country } = await params;
  const label = getCountryLabel(country);
  if (!label) notFound();

  const filtered = scholarships.filter(
    (s) => s.country === label
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
            label: `Scholarships in ${label}`,
            href: `/countries/${country}`,
          },
        ]}
      />
      <ItemListJsonLd pagePath={`/countries/${country}`} items={items} />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Scholarships in {label}
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Explore scholarships available in {label}. We only link to official
          external application pages.
        </p>
        <div className="pt-2">
          <ScholarshipFilterBar
            baseHref="/scholarships"
            primaryLabel={`Filter: ${label}`}
            params={{ country: label }}
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
