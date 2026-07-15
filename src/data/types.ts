// FILE: src/data/types.ts

import type { DegreeLevel, FundingType } from "@/data/primitives";
import type { ScholarshipDiscovery } from "@/lib/discovery/types";

export type { DegreeLevel, FundingType } from "@/data/primitives";

export type ScholarshipContentSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  ordered?: string[];
  facts?: Array<{
    label: string;
    value: string;
  }>;
};

export type Scholarship = {
  slug: string;
  title: string;
  seoTitle?: string;
  metaDescription?: string;
  keywords?: string[];
  overview: string;
  introduction?: string;
  summary?: string;
  contentSections?: ScholarshipContentSection[];
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
  discovery?: ScholarshipDiscovery;
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
