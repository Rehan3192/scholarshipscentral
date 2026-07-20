// FILE: src/app/funding/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Scholarships by Funding Type",
  description:
    "Browse scholarships by funding coverage, including fully funded and partially funded opportunities with official application links.",
  alternates: { canonical: "/funding" },
};

const fundingOptions = [
  {
    title: "Fully funded",
    href: "/funding/fully-funded",
    description:
      "Scholarships where tuition, stipend, and sometimes travel or insurance may be covered.",
    cta: "Explore fully funded scholarships",
    badge: "Highest demand",
  },
  {
    title: "Partially funded",
    href: "/funding/partially-funded",
    description:
      "Opportunities with partial tuition support, waivers, limited stipends, or cost-sharing awards.",
    cta: "Explore partially funded scholarships",
    badge: "More options",
  },
];

export default function FundingPage() {
  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          { label: "Funding", href: "/funding" },
        ]}
      />

      <header className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/50 p-6 shadow-sm sm:p-8">
        <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
          Funding-focused scholarship search
        </div>
        <h1 className="mt-4 mb-0 text-3xl font-bold text-slate-950 sm:text-4xl">
          Scholarships by funding type
        </h1>
        <p className="mt-3 mb-0 max-w-3xl text-sm leading-6 text-slate-700 sm:text-base">
          Start with the level of financial support you need, then compare
          deadlines, degree levels, destinations, and official application links.
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
          <Link href="/degrees" className="font-semibold text-blue-700 hover:underline">
            Browse by degree
          </Link>
        </div>
      </header>

      <section className="space-y-4">
        <div>
          <h2 className="mt-0 text-2xl font-semibold text-slate-950">
            Choose the funding coverage
          </h2>
          <p className="mb-0 text-sm text-slate-600">
            Use these pages when your main question is whether an opportunity
            can cover most of your study costs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {fundingOptions.map((option) => (
            <Link
              key={option.href}
              href={option.href}
              className="group rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/50 p-6 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-blue-200 hover:shadow-lg motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-lg font-semibold text-slate-950">
                  {option.title}
                </div>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">
                  {option.badge}
                </span>
              </div>
              <div className="mt-3 text-sm leading-6 text-slate-700">
                {option.description}
              </div>
              <div className="mt-4 text-sm font-semibold text-blue-700 group-hover:text-blue-800">
                {option.cta} →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
