import type { FinderRecommendation, RecommendationCounts } from "../types";
import RecommendationCard from "./RecommendationCard";

type Props = {
  recommendations: FinderRecommendation[];
  totalRecommendations: number;
  recommendationCounts: RecommendationCounts;
};

export default function FinderResults({
  recommendations,
  totalRecommendations,
  recommendationCounts,
}: Props) {
  return (
    <section className="space-y-5" aria-labelledby="finder-results-heading">
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-gray-900">
        <h2 id="finder-results-heading" className="m-0 text-xl font-semibold">
          <span aria-hidden="true">🎉 </span>
          Your personalized scholarship recommendations are ready.
        </h2>
        <p className="mt-2 mb-0 text-sm">Based on your profile we found:</p>
        <ul className="mt-2 mb-0 space-y-1 text-sm">
          <li>{recommendationCounts["Highly Recommended"]} Highly Recommended</li>
          <li>{recommendationCounts["Good Match"]} Good Matches</li>
          <li>{recommendationCounts["Worth Checking"]} Worth Checking</li>
        </ul>
        <p className="mt-2 mb-0 text-sm font-medium">Scroll below to review them.</p>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="m-0 text-base font-semibold text-gray-900">What the recommendation labels mean</h3>
        <dl className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
          <div><dt className="font-semibold text-emerald-800">Highly Recommended</dt><dd className="mt-1 text-gray-600">Strong match based on your profile and available eligibility information.</dd></div>
          <div><dt className="font-semibold text-blue-800">Good Match</dt><dd className="mt-1 text-gray-600">Matches most of your preferences.</dd></div>
          <div><dt className="font-semibold text-amber-800">Worth Checking</dt><dd className="mt-1 text-gray-600">May be suitable but important eligibility details should be verified.</dd></div>
          <div><dt className="font-semibold text-gray-800">Not Recommended</dt><dd className="mt-1 text-gray-600">Important mismatches were detected.</dd></div>
        </dl>
      </div>

      <aside className="rounded-2xl border border-blue-200 bg-blue-50 p-5 text-sm leading-6 text-gray-800" aria-label="Recommendation trust notice">
        <p className="m-0">Recommendations are generated using scholarship eligibility, funding, destination preferences and currently available structured data.</p>
        <p className="mt-2 mb-0 font-medium">Always verify final eligibility on the official scholarship website before applying.</p>
      </aside>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="m-0 text-2xl font-semibold text-gray-900">
            Recommendations
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Showing {recommendations.length} of {totalRecommendations} scholarship matches.
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {recommendations.map((recommendation) => (
          <RecommendationCard
            key={recommendation.scholarship.slug}
            recommendation={recommendation}
          />
        ))}
      </div>
    </section>
  );
}
