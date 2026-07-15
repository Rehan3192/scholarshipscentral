export {
  calculateDataQuality,
  inferScholarshipStatus,
  inferTuitionCoverage,
  normalizeDiscovery,
  parseDeadline,
} from "@/lib/discovery/normalize";
export {
  calculateMatchScore,
  getMatchingScholarships,
  getOpenScholarships,
  getScholarshipsByCountry,
  getScholarshipsByDegree,
  getScholarshipsByField,
  getScholarshipsByFunding,
  getScholarshipsByNationality,
  getScholarshipsWithoutIELTS,
  matchScholarship,
  matchesCountry,
  matchesDegree,
  matchesField,
  matchesFunding,
  matchesIELTS,
  matchesNationality,
  matchesStatus,
} from "@/lib/discovery/matching";
export type { ParseDeadlineOptions } from "@/lib/discovery/normalize";
export type {
  FinderFilters,
  MatchReason,
  ScholarshipMatch,
} from "@/lib/discovery/matching";
export type {
  ApplicationMethod,
  DeadlineConfidence,
  DiscoveryBoolean,
  DiscoveryDataQuality,
  DiscoveryStatus,
  FundingLevel,
  NormalizedScholarshipDiscovery,
  ParsedDeadline,
  ScholarshipDiscovery,
  StudyMode,
  TuitionCoverage,
} from "@/lib/discovery/types";
