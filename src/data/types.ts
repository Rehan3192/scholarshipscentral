// FILE: src/data/types.ts

export type FundingType =
  | "Fully Funded"
  | "Partially Funded"
  | "Self Funded";

export type DegreeLevel =
  | "Bachelors"
  | "Masters"
  | "PhD"
  | "Postdoc";

export type Scholarship = {
  slug: string;
  title: string;
  overview: string;
  summary?: string;
  country: string;
  degreeLevel: DegreeLevel;
  fundingType: FundingType;
  deadline: string;
  duration: string;
  eligibility: string[];
  benefits: string[];
  applicationProcess: string[];
  documents: string[];
  goodToKnow?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  applyUrl: string;
  officialSource: string;
  lastUpdated: string;
};

export type ScholarshipListItem = Pick<
  Scholarship,
  | "slug"
  | "title"
  | "overview"
  | "country"
  | "degreeLevel"
  | "fundingType"
  | "deadline"
  | "duration"
  | "applyUrl"
  | "officialSource"
  | "lastUpdated"
>;
