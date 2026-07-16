import type {
  FinderRecommendation,
  FinderScholarship,
  FinderState,
  ProfileStrength,
  RecommendationLevel,
} from "../types";
import type { ScholarshipMatch } from "@/lib/discovery";

const UNKNOWN_SIGNAL = /unavailable|unknown|not verified|not confirmed/i;

export function calculateProfileStrength(state: FinderState): ProfileStrength {
  const specificPreferences = [
    state.countries.length > 0,
    state.funding !== "Any",
    state.englishRequirement !== "No Preference",
    Boolean(state.fieldOfStudy.trim()),
  ].filter(Boolean).length;

  if (specificPreferences === 0) return "Weak";
  if (specificPreferences === 1) return "Medium";
  return "Strong";
}

function calculateDataConfidence(
  match: ScholarshipMatch<FinderScholarship>,
  state: FinderState,
) {
  const discovery = match.discovery;
  const signals = [
    discovery.status !== "Unknown",
    discovery.deadlineConfidence !== "Text Only",
    discovery.applicationMethod !== undefined && discovery.applicationMethod !== "Unknown",
    (discovery.eligibleNationalities?.length ?? 0) > 0 ||
      (discovery.excludedNationalities?.length ?? 0) > 0,
  ];

  if (state.englishRequirement !== "No Preference") {
    signals.push(
      discovery.ieltsRequired !== undefined && discovery.ieltsRequired !== "Unknown",
    );
  }

  if (state.fieldOfStudy.trim()) {
    signals.push((discovery.fieldsOfStudy?.length ?? 0) > 0);
  }

  const evidenceScore = signals.filter(Boolean).length / signals.length;
  const qualityAdjustment =
    discovery.dataQuality === "Verified"
      ? 10
      : discovery.dataQuality === "Enhanced"
        ? 5
        : 0;

  return Math.min(100, Math.round(evidenceScore * 90 + qualityAdjustment));
}

function unknownCount(match: ScholarshipMatch<FinderScholarship>) {
  return [...match.missingCriteria, ...match.warnings].filter((item) =>
    UNKNOWN_SIGNAL.test(item),
  ).length;
}

function levelForRank(
  rank: number,
  total: number,
  strength: ProfileStrength,
  normalizedScore: number,
): RecommendationLevel {
  const percentile = total > 0 ? rank / total : 1;

  if (strength === "Weak") {
    return percentile <= 0.4 ? "Broad Match" : "Potential Match";
  }

  if (strength === "Medium") {
    return percentile <= 0.3 ? "Good Match" : "Worth Checking";
  }

  if (percentile <= 0.1 && normalizedScore >= 70) return "Highly Recommended";
  if (percentile <= 0.3) return "Good Match";
  if (percentile <= 0.7) return "Worth Checking";
  return "Not Recommended";
}

export function classifyRecommendations(
  matches: ScholarshipMatch<FinderScholarship>[],
  state: FinderState,
): { recommendations: FinderRecommendation[]; profileStrength: ProfileStrength } {
  const profileStrength = calculateProfileStrength(state);
  const ranked = matches
    .map((match) => ({
      match,
      dataConfidence: calculateDataConfidence(match, state),
      effectiveScore: Math.min(100, match.score + unknownCount(match) * 5),
    }))
    .sort(
      (left, right) =>
        right.effectiveScore - left.effectiveScore ||
        right.dataConfidence - left.dataConfidence ||
        right.match.score - left.match.score,
    );

  const scores = ranked.map((item) => item.effectiveScore);
  const minimum = Math.min(...scores);
  const maximum = Math.max(...scores);
  const spread = maximum - minimum;

  return {
    profileStrength,
    recommendations: ranked.map(({ match, effectiveScore, dataConfidence }, index) => {
      const normalizedScore =
        spread > 0 ? Math.round(((effectiveScore - minimum) / spread) * 100) : 100;

      return {
        scholarship: match.scholarship,
        discovery: match.discovery,
        score: match.score,
        normalizedScore,
        dataConfidence,
        recommendationLevel: levelForRank(
          index + 1,
          ranked.length,
          profileStrength,
          normalizedScore,
        ),
        matchedCriteria: match.matchedCriteria,
        missingCriteria: match.missingCriteria,
        warnings: match.warnings,
      };
    }),
  };
}

export function debugFinderRecommendations(
  recommendations: FinderRecommendation[],
  state: FinderState,
) {
  if (process.env.NODE_ENV !== "development") return;
  if (
    state.degreeLevel !== "Masters" ||
    state.nationality.trim().toLocaleLowerCase() !== "pakistan" ||
    !state.countries.some((country) => country.toLocaleLowerCase() === "germany") ||
    state.funding !== "Fully Funded" ||
    state.englishRequirement !== "No Preference" ||
    state.fieldOfStudy.trim()
  ) {
    return;
  }

  console.table(
    recommendations.slice(0, 15).map((recommendation) => ({
      title: recommendation.scholarship.title,
      rawScore: recommendation.score,
      normalizedScore: recommendation.normalizedScore,
      recommendation: recommendation.recommendationLevel,
      dataConfidence: recommendation.dataConfidence,
      reasons: recommendation.matchedCriteria.join(" | "),
      warnings: [...recommendation.missingCriteria, ...recommendation.warnings].join(" | "),
    })),
  );
}
