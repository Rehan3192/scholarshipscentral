import Link from "next/link";
import type { ScholarshipListItem } from "@/data/types";
import { cleanDisplayText, toSegment } from "@/lib/helpers";
import { isStillOpen } from "@/lib/scholarship-taxonomy";

type Props = {
  scholarship: ScholarshipListItem;
};

function fundingPath(fundingType: ScholarshipListItem["fundingType"]) {
  if (fundingType === "Fully Funded") return "/funding/fully-funded";
  if (fundingType === "Partially Funded") return "/funding/partially-funded";
  return "/funding/self-funded";
}

export default function ScholarshipCard({ scholarship }: Props) {
  const href = `/scholarships/${scholarship.slug}`;
  const countryHref = `/countries/${toSegment(scholarship.country)}`;
  const degreeHref = `/degrees/${toSegment(scholarship.degreeLevel)}`;
  const fundingHref = fundingPath(scholarship.fundingType);
  const applicationMayBeOpen = isStillOpen(scholarship.deadline);
  const updatedDate = new Date(scholarship.lastUpdated);
  const formattedUpdatedDate = Number.isNaN(updatedDate.getTime())
    ? scholarship.lastUpdated
    : updatedDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

  return (
    <article className="group rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/50 p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-blue-200 hover:shadow-lg motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-800">
          Scholarship guide
        </span>
        {applicationMayBeOpen ? (
          <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-800">
            Open / expected
          </span>
        ) : null}
      </div>
      <h3 className="text-base font-semibold leading-snug text-slate-900 sm:text-lg">
        <Link
          href={href}
          className="rounded-sm text-slate-950 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {cleanDisplayText(scholarship.title)}
        </Link>
      </h3>

      <p className="mt-2 mb-0 text-sm text-slate-700 line-clamp-3 break-words">
        {cleanDisplayText(scholarship.overview)}
      </p>

      <div className="mt-4 flex min-w-0 flex-wrap gap-2 text-xs">
        <Link
          href={countryHref}
          className="max-w-full rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold text-slate-800 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {scholarship.country}
        </Link>
        <Link
          href={degreeHref}
          className="max-w-full rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold text-slate-800 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {scholarship.degreeLevel}
        </Link>
        <Link
          href={fundingHref}
          className="max-w-full rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold text-slate-800 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {scholarship.fundingType}
        </Link>
        <span className="max-w-full break-words rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 font-semibold text-slate-700">
          Deadline: {cleanDisplayText(scholarship.deadline)}
        </span>
      </div>

      <p className="mt-3 mb-0 text-xs text-slate-500">
        Official source:{" "}
        <span className="font-medium text-slate-700">
          {cleanDisplayText(scholarship.officialSource)}
        </span>{" "}
        <span className="mx-1 text-slate-300">•</span>
        Updated:{" "}
        <time dateTime={scholarship.lastUpdated}>
          {formattedUpdatedDate}
        </time>
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={href}
          className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          View guide
        </Link>
        <a
          href={scholarship.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {applicationMayBeOpen ? "Official application" : "Official page"}
        </a>
      </div>
    </article>
  );
}
