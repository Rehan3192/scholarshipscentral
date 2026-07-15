import Link from "next/link";
import type { FinderRecommendation } from "../types";
import { trackFinderEvent } from "../hooks/analytics";

const BADGE_STYLES: Record<FinderRecommendation["recommendationLevel"], string> = {
  "Highly Recommended": "border-emerald-200 bg-emerald-50 text-emerald-900",
  "Good Match": "border-blue-200 bg-blue-50 text-blue-900",
  "Worth Checking": "border-amber-200 bg-amber-50 text-amber-900",
  "Not Recommended": "border-gray-200 bg-gray-50 text-gray-700",
};

function displayItems(items: string[], fallback: string) {
  return items.length > 0 ? items.slice(0, 4) : [fallback];
}

export default function RecommendationCard({
  recommendation,
}: {
  recommendation: FinderRecommendation;
}) {
  const scholarship = recommendation.scholarship;

  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="m-0 text-lg font-semibold leading-snug text-gray-900">
            {scholarship.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold text-gray-700">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1">
              {recommendation.discovery.hostCountries.join(", ")}
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1">
              {recommendation.discovery.degreeLevels.join(", ")}
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1">
              {scholarship.fundingType}
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1">
              Deadline: {scholarship.deadline}
            </span>
          </div>
        </div>
        <span
          className={[
            "w-fit shrink-0 rounded-full border px-3 py-1 text-xs font-bold",
            BADGE_STYLES[recommendation.recommendationLevel],
          ].join(" ")}
        >
          {recommendation.recommendationLevel}
        </span>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_1fr_220px]">
        <div>
          <h4 className="m-0 text-xs font-bold uppercase tracking-wide text-gray-500">
            Why this matches
          </h4>
          <ul className="mt-2 ml-0 list-none space-y-1 text-sm text-gray-700">
            {displayItems(recommendation.matchedCriteria, "Matches your broad preferences").map((item) => (
              <li key={item} className="break-words">
                <span className="font-semibold text-emerald-700" aria-hidden="true">✓</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="m-0 text-xs font-bold uppercase tracking-wide text-gray-500">
            Verify before applying
          </h4>
          <ul className="mt-2 ml-0 list-none space-y-1 text-sm text-gray-700">
            {displayItems(recommendation.missingCriteria, "No major eligibility gaps found").map((item) => (
              <li key={item} className="break-words">
                <span className="font-semibold text-amber-700" aria-hidden="true">⚠</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="m-0 text-xs font-bold uppercase tracking-wide text-gray-500">
            Timing
          </h4>
          <dl className="mt-2 space-y-2 text-sm text-gray-700">
            <div>
              <dt className="font-semibold text-gray-900">Deadline</dt>
              <dd className="break-words">{scholarship.deadline}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Last Updated</dt>
              <dd>{scholarship.lastUpdated}</dd>
            </div>
          </dl>
          {recommendation.warnings.length > 0 ? (
            <ul className="mt-3 ml-0 list-none space-y-1 text-sm text-gray-700">
              {recommendation.warnings.slice(0, 2).map((item) => (
                <li key={item} className="break-words">
                  <span className="font-semibold text-amber-700">Timing:</span> {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="mt-5">
        <Link
          href={`/scholarships/${scholarship.slug}`}
          onClick={() =>
            trackFinderEvent("finder_scholarship_clicked", {
              scholarshipSlug: scholarship.slug,
              recommendationLevel: recommendation.recommendationLevel,
              score: recommendation.score,
            })
          }
          className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          View Scholarship &rarr;
        </Link>
      </div>
    </article>
  );
}
