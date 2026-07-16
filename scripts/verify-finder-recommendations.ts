import type { FundingType } from "@/data/primitives";
import { scholarships } from "@/data/scholarships";
import { getMatchingScholarships, type FinderFilters } from "@/lib/discovery";
import { classifyRecommendations } from "@/app/find-scholarships/lib/recommendations";
import type {
  FinderScholarship,
  FinderState,
  RecommendationLevel,
} from "@/app/find-scholarships/types";

const finderScholarships: FinderScholarship[] = scholarships.map((scholarship) => ({
  slug: scholarship.slug,
  title: scholarship.title,
  country: scholarship.country,
  degreeLevel: scholarship.degreeLevel,
  fundingType: scholarship.fundingType,
  deadline: scholarship.deadline,
  lastUpdated: scholarship.lastUpdated,
  discovery: scholarship.discovery,
}));

function filtersFor(state: FinderState): FinderFilters {
  const fundingTypes: FundingType[] = state.funding === "Any" ? [] : [state.funding];
  return {
    degreeLevels: state.degreeLevel ? [state.degreeLevel] : [],
    countries: state.countries,
    fundingTypes,
    withoutIelts: state.englishRequirement === "No IELTS",
    nationality: state.nationality || undefined,
    fieldsOfStudy: state.fieldOfStudy ? [state.fieldOfStudy] : [],
    statuses: ["Open", "Rolling", "Expected"],
  };
}

function verifyProfile(
  name: string,
  state: FinderState,
  allowedLevels: RecommendationLevel[],
) {
  const result = classifyRecommendations(
    getMatchingScholarships(finderScholarships, filtersFor(state)),
    state,
  );
  const counts = Object.fromEntries(
    allowedLevels.map((level) => [
      level,
      result.recommendations.filter((item) => item.recommendationLevel === level).length,
    ]),
  );
  const unexpected = result.recommendations.filter(
    (item) => !allowedLevels.includes(item.recommendationLevel),
  );
  if (unexpected.length > 0) throw new Error(`${name}: unexpected recommendation labels`);

  console.log(`\n${name} (${result.profileStrength})`, counts);
  console.table(
    result.recommendations.slice(0, 5).map((item) => ({
      title: item.scholarship.title,
      rawScore: item.score,
      normalizedScore: item.normalizedScore,
      recommendation: item.recommendationLevel,
      dataConfidence: item.dataConfidence,
    })),
  );
  return result;
}

const profileA = verifyProfile(
  "Profile A",
  {
    degreeLevel: "Masters",
    nationality: "Pakistan",
    countries: [],
    funding: "Any",
    englishRequirement: "No Preference",
    fieldOfStudy: "",
  },
  ["Broad Match", "Potential Match"],
);
if (!profileA.recommendations.some((item) => item.recommendationLevel === "Broad Match")) {
  throw new Error("Profile A: expected Broad Match recommendations");
}

const profileB = verifyProfile(
  "Profile B",
  {
    degreeLevel: "Masters",
    nationality: "Pakistan",
    countries: ["Germany"],
    funding: "Fully Funded",
    englishRequirement: "No Preference",
    fieldOfStudy: "",
  },
  ["Highly Recommended", "Good Match", "Worth Checking", "Not Recommended"],
);
if (!profileB.recommendations.some((item) => item.recommendationLevel === "Highly Recommended")) {
  throw new Error("Profile B: expected Highly Recommended results");
}

const profileC = verifyProfile(
  "Profile C",
  {
    degreeLevel: "PhD",
    nationality: "Pakistan",
    countries: ["Japan"],
    funding: "Fully Funded",
    englishRequirement: "No Preference",
    fieldOfStudy: "",
  },
  ["Highly Recommended", "Good Match", "Worth Checking", "Not Recommended"],
);
if (!profileC.recommendations.slice(0, 10).some((item) => /mext|japan/i.test(item.scholarship.title))) {
  throw new Error("Profile C: expected a Japan or MEXT scholarship near the top");
}

verifyProfile(
  "Profile D",
  {
    degreeLevel: "Bachelors",
    nationality: "Pakistan",
    countries: [],
    funding: "Partially Funded",
    englishRequirement: "No Preference",
    fieldOfStudy: "",
  },
  ["Good Match", "Worth Checking"],
);
