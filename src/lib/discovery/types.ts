import type { DegreeLevel } from "@/data/primitives";

export type DiscoveryStatus =
  | "Open"
  | "Closed"
  | "Expected"
  | "Rolling"
  | "Unknown";

export type DiscoveryBoolean = boolean | "Unknown";

export type TuitionCoverage =
  | "Full"
  | "Partial"
  | "None"
  | "Unknown";

export type FundingLevel =
  | "Full"
  | "High"
  | "Medium"
  | "Low"
  | "Unknown";

export type DeadlineConfidence =
  | "Exact"
  | "Estimated"
  | "Text Only";

export type StudyMode =
  | "On Campus"
  | "Online"
  | "Hybrid";

export type ApplicationMethod =
  | "Provider Portal"
  | "University Portal"
  | "Embassy/Nomination"
  | "Email"
  | "Other"
  | "Unknown";

export type DiscoveryDataQuality =
  | "Basic"
  | "Enhanced"
  | "Verified";

export type ScholarshipDiscovery = {
  hostCountries?: string[];
  degreeLevels?: DegreeLevel[];

  status?: DiscoveryStatus;

  deadlineDate?: string;
  deadlineConfidence?: DeadlineConfidence;

  tuitionCoverage?: TuitionCoverage;
  fundingLevel?: FundingLevel;

  stipendAvailable?: DiscoveryBoolean;
  travelSupport?: DiscoveryBoolean;
  accommodationSupport?: DiscoveryBoolean;

  eligibleNationalities?: string[];
  excludedNationalities?: string[];

  ieltsRequired?: DiscoveryBoolean;
  alternativeProofAccepted?: DiscoveryBoolean;
  mediumOfInstructionAccepted?: DiscoveryBoolean;

  fieldsOfStudy?: string[];

  studyMode?: StudyMode[];

  applicationMethod?: ApplicationMethod;

  priorityScore?: number;

  dataQuality?: DiscoveryDataQuality;
};

export type ParsedDeadline = {
  date?: string;
  confidence: DeadlineConfidence;
  isRolling: boolean;
};

export type NormalizedScholarshipDiscovery = ScholarshipDiscovery & {
  hostCountries: string[];
  degreeLevels: DegreeLevel[];
  status: DiscoveryStatus;
  deadlineConfidence: DeadlineConfidence;
  tuitionCoverage: TuitionCoverage;
  dataQuality: DiscoveryDataQuality;
};
