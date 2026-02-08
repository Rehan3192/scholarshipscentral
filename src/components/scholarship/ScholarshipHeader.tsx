// FILE: src/components/scholarship/ScholarshipHeader.tsx

import Link from "next/link";
import Breadcrumbs from "@/components/common/Breadcrumbs";
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

export default function ScholarshipHeader({ scholarship }: Props) {
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
            label: scholarship.title,
            href: `/scholarships/${scholarship.slug}`,
          },
        ]}
      />

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          {scholarship.title}
        </h1>

        <p className="mt-4 mb-0 max-w-3xl text-sm text-gray-700 sm:text-base">
          {scholarship.overview}
        </p>

        <div className="mt-6 flex flex-wrap gap-2 text-sm">
          <Link
            href={`/countries/${toSegment(scholarship.country)}`}
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {scholarship.country}
          </Link>

          <Link
            href={`/degrees/${toSegment(scholarship.degreeLevel)}`}
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {scholarship.degreeLevel}
          </Link>

          <Link
            href={fundingPath(scholarship.fundingType)}
            className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {scholarship.fundingType}
          </Link>

          <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 font-semibold text-gray-700">
            Deadline: {scholarship.deadline}
          </span>
        </div>

        <p className="mt-4 mb-0 text-xs text-gray-500">
          Official source:{" "}
          <span className="font-medium text-gray-700">
            {scholarship.officialSource}
          </span>{" "}
          • Last updated:{" "}
          <time dateTime={scholarship.lastUpdated}>
            {scholarship.lastUpdated}
          </time>
        </p>
      </div>
    </header>
  );
}
