import type { DegreeLevel, FundingType } from "@/data/primitives";
import type { Scholarship } from "@/data/types";
import type { NormalizedScholarshipDiscovery } from "@/lib/discovery";

export type FinderScholarship = Pick<
  Scholarship,
  | "slug"
  | "title"
  | "country"
  | "degreeLevel"
  | "fundingType"
  | "deadline"
  | "lastUpdated"
  | "discovery"
>;

export type FinderOptions = {
  countries: string[];
  popularCountries: string[];
  nationalities: string[];
  fieldsOfStudy: string[];
};

export type FinderState = {
  degreeLevel: DegreeLevel | "";
  countries: string[];
  funding: FundingType | "Any";
  englishRequirement: "No IELTS" | "IELTS OK" | "No Preference";
  nationality: string;
  fieldOfStudy: string;
};

export type RecommendationLevel =
  | "Highly Recommended"
  | "Good Match"
  | "Worth Checking"
  | "Not Recommended";

export type FinderRecommendation = {
  scholarship: FinderScholarship;
  discovery: NormalizedScholarshipDiscovery;
  score: number;
  recommendationLevel: RecommendationLevel;
  matchedCriteria: string[];
  missingCriteria: string[];
  warnings: string[];
};

export type RecommendationCounts = Record<RecommendationLevel, number>;
