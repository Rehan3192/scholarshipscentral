// FILE: src/components/scholarship/ScholarshipHeader.tsx

import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import type { Scholarship } from "@/data/types";
import { cleanDisplayText, toSegment } from "@/lib/helpers";

type Props = {
  scholarship: Scholarship;
  guideLink?: {
    href: string;
    anchorText: string;
  } | null;
};

function fundingPath(fundingType: Scholarship["fundingType"]) {
  if (fundingType === "Fully Funded") return "/funding/fully-funded";
  if (fundingType === "Partially Funded") return "/funding/partially-funded";
  return "/funding/self-funded";
}

export default function ScholarshipHeader({ scholarship, guideLink }: Props) {
  const summary =
    typeof scholarship.summary === "string" && scholarship.summary.trim() !== ""
      ? cleanDisplayText(scholarship.summary.trim())
      : cleanDisplayText(scholarship.overview);

  return (
    <header className="space-y-4">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          {
            label: scholarship.country,
            href: `/countries/${toSegment(scholarship.country)}`,
          },
          {
            label: scholarship.degreeLevel,
            href: `/degrees/${toSegment(scholarship.degreeLevel)}`,
          },
          {
            label: cleanDisplayText(scholarship.title),
            href: `/scholarships/${scholarship.slug}`,
          },
        ]}
      />

      <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/50 p-6 shadow-sm sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
            Scholarship guide
          </span>
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-800">
            Official-source based
          </span>
        </div>
        <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
          {cleanDisplayText(scholarship.title)}
        </h1>

        <p className="mt-4 mb-0 max-w-3xl break-words text-sm text-slate-700 sm:text-base">
          {summary}
          {guideLink ? (
            <>
              {" "}For a detailed breakdown, see our{" "}
              <Link
                href={guideLink.href}
                className="font-semibold text-blue-700 hover:underline"
              >
                {guideLink.anchorText}
              </Link>
              .
            </>
          ) : null}
        </p>

        <div className="mt-6 flex min-w-0 flex-wrap gap-2 text-sm">
          <Link
            href={`/countries/${toSegment(scholarship.country)}`}
            className="max-w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {scholarship.country}
          </Link>

          <Link
            href={`/degrees/${toSegment(scholarship.degreeLevel)}`}
            className="max-w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {scholarship.degreeLevel}
          </Link>

          <Link
            href={fundingPath(scholarship.fundingType)}
            className="max-w-full rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {scholarship.fundingType}
          </Link>

          <span className="max-w-full break-words rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-semibold text-slate-700">
            Deadline: {cleanDisplayText(scholarship.deadline)}
          </span>
        </div>

        <p className="mt-4 mb-0 break-words text-xs text-slate-500">
          Official source:{" "}
          <span className="font-medium text-slate-700">
            {cleanDisplayText(scholarship.officialSource)}
          </span>{" "}
          <span className="mx-1 text-slate-300">•</span>
          Last updated:{" "}
          <time dateTime={scholarship.lastUpdated}>
            {scholarship.lastUpdated}
          </time>
        </p>
      </div>
    </header>
  );
}
