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
  seoTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  overview: string;
  introduction?: string;
  summary?: string;
  guideUrl?: string;
  guideLabel?: string;
  country: string;
  continent?: string;
  degreeLevel: DegreeLevel;
  fundingType: FundingType;
  tags?: string[];
  deadline: string;
  duration: string;
  eligibility: string[];
  benefits: string[];
  applicationProcess: string[];
  documents: string[];
  selectionCriteria?: string[];
  tips?: string[];
  goodToKnow?: string[];
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
  relatedScholarships?: string[];
  categoryLinks?: string[];
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
