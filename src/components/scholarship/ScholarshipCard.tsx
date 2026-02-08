import Link from "next/link";
import type { Scholarship } from "@/data/types";
import { toSegment } from "@/lib/helpers";

type Props = {
  scholarship: Scholarship;
};

function fundingPath(fundingType: Scholarship["fundingType"]) {
  if (fundingType === "Fully Funded") return "/funding/fully-funded";
  if (fundingType === "Partially Funded") return "/funding/partially-funded";
  return "/funding/self-funded";
}

export default function ScholarshipCard({ scholarship }: Props) {
  const href = `/scholarships/${scholarship.slug}`;
  const countryHref = `/countries/${toSegment(scholarship.country)}`;
  const degreeHref = `/degrees/${toSegment(scholarship.degreeLevel)}`;
  const fundingHref = fundingPath(scholarship.fundingType);

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 motion-reduce:transition-none hover:border-gray-300 hover:bg-gray-50/50 hover:shadow-md motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-0.5">
      <h3 className="text-base font-semibold leading-snug text-gray-900 sm:text-lg">
        <Link
          href={href}
          className="rounded-sm text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {scholarship.title}
        </Link>
      </h3>

      <p className="mt-2 mb-0 text-sm text-gray-700 line-clamp-3">
        {scholarship.overview}
      </p>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <Link
          href={countryHref}
          className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold text-gray-800 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {scholarship.country}
        </Link>
        <Link
          href={degreeHref}
          className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold text-gray-800 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {scholarship.degreeLevel}
        </Link>
        <Link
          href={fundingHref}
          className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold text-gray-800 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          {scholarship.fundingType}
        </Link>
        <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold text-gray-700">
          Deadline: {scholarship.deadline}
        </span>
      </div>

      <p className="mt-3 mb-0 text-xs text-gray-500">
        Official source:{" "}
        <span className="font-medium text-gray-700">
          {scholarship.officialSource}
        </span>{" "}
        • Updated:{" "}
        <time dateTime={scholarship.lastUpdated}>
          {scholarship.lastUpdated}
        </time>
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Link
          href={href}
          className="inline-flex items-center rounded-lg bg-gray-900 px-3 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          Details
        </Link>
        <a
          href={scholarship.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Apply
        </a>
      </div>
    </article>
  );
}
