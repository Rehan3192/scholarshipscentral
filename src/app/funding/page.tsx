// FILE: src/app/funding/page.tsx

import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";

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

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-slate-900 sm:text-4xl">
          Scholarships by funding type
        </h1>
        <p className="mb-0 text-sm text-slate-600">
          Browse scholarships by funding coverage. We only link to official
          external application pages.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/funding/fully-funded"
          className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          <div className="text-lg font-semibold text-slate-900">
            Fully funded
          </div>
          <div className="mt-2 text-sm text-slate-700">
            Tuition + stipend (and often travel) covered.
          </div>
          <div className="mt-4 text-sm font-medium text-blue-700">
            Explore fully funded &rarr;
          </div>
        </Link>

        <Link
          href="/funding/partially-funded"
          className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          <div className="text-lg font-semibold text-slate-900">
            Partially funded
          </div>
          <div className="mt-2 text-sm text-slate-700">
            Partial tuition support, waivers, or limited stipends.
          </div>
          <div className="mt-4 text-sm font-medium text-blue-700">
            Explore partially funded &rarr;
          </div>
        </Link>
      </div>
    </div>
  );
}
