import type { DegreeLevel, FundingType } from "@/data/primitives";
import type { Scholarship } from "@/data/types";
import {
  inferTuitionCoverage,
  normalizeDiscovery,
  type DiscoveryScholarship,
} from "@/lib/discovery/normalize";
import type {
  DiscoveryStatus,
  NormalizedScholarshipDiscovery,
  TuitionCoverage,
} from "@/lib/discovery/types";

const SCORE_WEIGHTS = {
  country: 30,
  degree: 25,
  funding: 20,
  ielts: 15,
  nationality: 10,
  status: 15,
  field: 10,
  dataQuality: 5,
} as const;

type CriterionKey = keyof typeof SCORE_WEIGHTS;

export type FinderFilters = {
  countries?: string[];
  fundingTypes?: FundingType[];
  tuitionCoverage?: TuitionCoverage[];
  degreeLevels?: DegreeLevel[];
  statuses?: DiscoveryStatus[];
  withoutIelts?: boolean;
  nationality?: string;
  fieldsOfStudy?: string[];
};

export type MatchReason = {
  criterion: CriterionKey;
  matched: boolean;
  message: string;
  warning?: string;
};

export type ScholarshipMatch<TScholarship extends DiscoveryScholarship = Scholarship> = {
  scholarship: TScholarship;
  discovery: NormalizedScholarshipDiscovery;
  score: number;
  matchedCriteria: string[];
  missingCriteria: string[];
  warnings: string[];
};

type CriterionResult = {
  criterion: CriterionKey;
  active: boolean;
  matched: boolean;
  matchedMessage?: string;
  missingMessage?: string;
  warning?: string;
};

type NormalizedFinderFilters = {
  countries: string[];
  tuitionCoverage: TuitionCoverage[];
  degreeLevels: DegreeLevel[];
  statuses: DiscoveryStatus[];
  withoutIelts: boolean;
  nationality?: string;
  fieldsOfStudy: string[];
};

function normalizeText(value: string) {
  return value.trim().toLowerCase();
}

function normalizeList(items: string[] | undefined) {
  return (items ?? [])
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function uniqueItems<T>(items: T[]) {
  return Array.from(new Set(items));
}

function textIncludes(items: string[], value: string) {
  const target = normalizeText(value);
  return items.some((item) => normalizeText(item) === target);
}

function textIntersects(left: string[], right: string[]) {
  const normalizedRight = new Set(right.map(normalizeText));
  return left.some((item) => normalizedRight.has(normalizeText(item)));
}

function formatList(items: string[]) {
  if (items.length <= 1) return items[0] ?? "";
  if (items.length === 2) return `${items[0]} or ${items[1]}`;
  return `${items.slice(0, -1).join(", ")}, or ${items[items.length - 1]}`;
}

function normalizeFundingFilters(filters: FinderFilters) {
  return uniqueItems([
    ...(filters.tuitionCoverage ?? []),
    ...(filters.fundingTypes ?? []).map(inferTuitionCoverage),
  ]).filter((item) => item !== "Unknown");
}

function normalizeFilters(filters: FinderFilters = {}): NormalizedFinderFilters {
  const nationality = filters.nationality?.trim();

  return {
    countries: uniqueItems(normalizeList(filters.countries)),
    tuitionCoverage: normalizeFundingFilters(filters),
    degreeLevels: uniqueItems(filters.degreeLevels ?? []),
    statuses: uniqueItems(filters.statuses ?? []),
    withoutIelts: filters.withoutIelts === true,
    nationality: nationality ? nationality : undefined,
    fieldsOfStudy: uniqueItems(normalizeList(filters.fieldsOfStudy)),
  };
}

function hasBroadNationalitySignal(items: string[]) {
  return items.some((item) => {
    const value = normalizeText(item);
    return (
      value === "all" ||
      value === "all nationalities" ||
      value === "international" ||
      value === "international students" ||
      value === "international applicants" ||
      value.includes("all countries")
    );
  });
}

function hasQualityBonus(discovery: NormalizedScholarshipDiscovery) {
  return discovery.dataQuality === "Enhanced" || discovery.dataQuality === "Verified";
}

function toMatchReason(result: CriterionResult): MatchReason | null {
  if (!result.active) return null;

  return {
    criterion: result.criterion,
    matched: result.matched,
    message:
      result.matched
        ? result.matchedMessage ?? `${result.criterion} matched`
        : result.missingMessage ?? `${result.criterion} did not match`,
    warning: result.warning,
  };
}

/**
 * Checks whether a normalized scholarship supports at least one requested
 * country. Empty filter values make this criterion inactive.
 *
 * Example:
 * countries: ["Germany"], hostCountries: ["Germany"] -> matched
 * countries: ["Italy"], hostCountries: ["Germany"] -> missing
 */
export function matchesCountry(
  discovery: NormalizedScholarshipDiscovery,
  countries: string[] | undefined,
): CriterionResult {
  const requested = normalizeList(countries);
  if (requested.length === 0) {
    return { criterion: "country", active: false, matched: true };
  }

  const matched = textIntersects(discovery.hostCountries, requested);
  return {
    criterion: "country",
    active: true,
    matched,
    matchedMessage: `Country matches ${formatList(requested)}`,
    missingMessage: `Country does not match ${formatList(requested)}`,
  };
}

/**
 * Checks whether a normalized scholarship supports at least one requested
 * degree level. Empty filter values make this criterion inactive.
 */
export function matchesDegree(
  discovery: NormalizedScholarshipDiscovery,
  degreeLevels: DegreeLevel[] | undefined,
): CriterionResult {
  const requested = degreeLevels ?? [];
  if (requested.length === 0) {
    return { criterion: "degree", active: false, matched: true };
  }

  const matched = requested.some((degree) => discovery.degreeLevels.includes(degree));
  return {
    criterion: "degree",
    active: true,
    matched,
    matchedMessage: `${formatList(requested)} supported`,
    missingMessage: `${formatList(requested)} not listed as supported`,
  };
}

/**
 * Checks whether a normalized scholarship matches requested tuition coverage.
 * Empty filter values make this criterion inactive.
 */
export function matchesFunding(
  discovery: NormalizedScholarshipDiscovery,
  tuitionCoverage: TuitionCoverage[] | undefined,
): CriterionResult {
  const requested = tuitionCoverage ?? [];
  if (requested.length === 0) {
    return { criterion: "funding", active: false, matched: true };
  }

  const matched = requested.includes(discovery.tuitionCoverage);
  const label =
    discovery.tuitionCoverage === "Full"
      ? "Fully funded"
      : `${discovery.tuitionCoverage} tuition coverage`;

  return {
    criterion: "funding",
    active: true,
    matched,
    matchedMessage: label,
    missingMessage: `Funding does not match ${formatList(requested)}`,
  };
}

/**
 * Checks whether a normalized scholarship satisfies a without-IELTS request.
 * Unknown language data is treated as missing evidence rather than a match.
 */
export function matchesIELTS(
  discovery: NormalizedScholarshipDiscovery,
  withoutIelts: boolean | undefined,
): CriterionResult {
  if (!withoutIelts) {
    return { criterion: "ielts", active: false, matched: true };
  }

  const matched =
    discovery.ieltsRequired === false ||
    discovery.alternativeProofAccepted === true ||
    discovery.mediumOfInstructionAccepted === true;

  const unavailable =
    discovery.ieltsRequired === undefined ||
    discovery.ieltsRequired === "Unknown";

  return {
    criterion: "ielts",
    active: true,
    matched,
    matchedMessage:
      discovery.ieltsRequired === false
        ? "IELTS not required"
        : "IELTS alternative accepted",
    missingMessage: unavailable
      ? "IELTS information unavailable"
      : "IELTS flexibility not confirmed",
  };
}

/**
 * Checks whether a normalized scholarship appears compatible with a requested
 * nationality. Missing nationality data is reported as missing criteria.
 */
export function matchesNationality(
  discovery: NormalizedScholarshipDiscovery,
  nationality: string | undefined,
): CriterionResult {
  const requested = nationality?.trim();
  if (!requested) {
    return { criterion: "nationality", active: false, matched: true };
  }

  const excluded = normalizeList(discovery.excludedNationalities);
  if (textIncludes(excluded, requested)) {
    return {
      criterion: "nationality",
      active: true,
      matched: false,
      missingMessage: `${requested} is listed as excluded`,
    };
  }

  const eligible = normalizeList(discovery.eligibleNationalities);
  if (eligible.length === 0) {
    return {
      criterion: "nationality",
      active: true,
      matched: false,
      missingMessage: "Nationality information unavailable",
    };
  }

  const matched = textIncludes(eligible, requested) || hasBroadNationalitySignal(eligible);
  return {
    criterion: "nationality",
    active: true,
    matched,
    matchedMessage: `Nationality matches ${requested}`,
    missingMessage: `${requested} not listed as eligible`,
  };
}

/**
 * Checks whether a normalized scholarship matches requested discovery status.
 * Empty filter values make this criterion inactive.
 */
export function matchesStatus(
  discovery: NormalizedScholarshipDiscovery,
  statuses: DiscoveryStatus[] | undefined,
): CriterionResult {
  const requested = statuses ?? [];
  if (requested.length === 0) {
    return { criterion: "status", active: false, matched: true };
  }

  const matched = requested.includes(discovery.status);
  return {
    criterion: "status",
    active: true,
    matched,
    matchedMessage: `Status is ${discovery.status}`,
    missingMessage: `Status is ${discovery.status}, not ${formatList(requested)}`,
  };
}

/**
 * Checks whether a normalized scholarship supports at least one requested
 * field of study. Missing field data is reported as missing criteria.
 */
export function matchesField(
  discovery: NormalizedScholarshipDiscovery,
  fieldsOfStudy: string[] | undefined,
): CriterionResult {
  const requested = normalizeList(fieldsOfStudy);
  if (requested.length === 0) {
    return { criterion: "field", active: false, matched: true };
  }

  const scholarshipFields = normalizeList(discovery.fieldsOfStudy);
  if (scholarshipFields.length === 0) {
    return {
      criterion: "field",
      active: true,
      matched: false,
      missingMessage: "Field of study information unavailable",
    };
  }

  const matched =
    textIntersects(scholarshipFields, requested) ||
    hasBroadNationalitySignal(scholarshipFields);

  return {
    criterion: "field",
    active: true,
    matched,
    matchedMessage: `Field matches ${formatList(requested)}`,
    missingMessage: `Field does not match ${formatList(requested)}`,
  };
}

function buildCriterionResults(
  discovery: NormalizedScholarshipDiscovery,
  filters: NormalizedFinderFilters,
): CriterionResult[] {
  return [
    matchesCountry(discovery, filters.countries),
    matchesDegree(discovery, filters.degreeLevels),
    matchesFunding(discovery, filters.tuitionCoverage),
    matchesIELTS(discovery, filters.withoutIelts),
    matchesNationality(discovery, filters.nationality),
    matchesStatus(discovery, filters.statuses),
    matchesField(discovery, filters.fieldsOfStudy),
  ];
}

function getWarnings(discovery: NormalizedScholarshipDiscovery) {
  const warnings: string[] = [];

  if (discovery.deadlineConfidence === "Estimated") {
    warnings.push("Deadline date estimated");
  }

  if (discovery.deadlineConfidence === "Text Only") {
    warnings.push("Deadline is text-only");
  }

  if (discovery.status === "Unknown") {
    warnings.push("Scholarship status unknown");
  }

  return warnings;
}

/**
 * Calculates a normalized 0-100 weighted score for active Finder filters.
 * Data quality contributes a small bonus and is included in the max score so
 * every result remains normalized.
 *
 * Example:
 * active country + degree filters with both matched:
 * score = (30 + 25 + qualityBonus) / (30 + 25 + 5) * 100
 */
export function calculateMatchScore(
  discovery: NormalizedScholarshipDiscovery,
  results: CriterionResult[],
): number {
  const activeResults = results.filter((result) => result.active);
  const maxScore =
    activeResults.reduce((sum, result) => sum + SCORE_WEIGHTS[result.criterion], 0) +
    SCORE_WEIGHTS.dataQuality;

  if (maxScore <= 0) return 0;

  const matchedScore = activeResults
    .filter((result) => result.matched)
    .reduce((sum, result) => sum + SCORE_WEIGHTS[result.criterion], 0);

  const qualityScore = hasQualityBonus(discovery) ? SCORE_WEIGHTS.dataQuality : 0;
  return Math.round(((matchedScore + qualityScore) / maxScore) * 100);
}

/**
 * Scores and explains a single scholarship against normalized Finder filters.
 * The scholarship object is returned by reference but never mutated.
 */
export function matchScholarship<TScholarship extends DiscoveryScholarship>(
  scholarship: TScholarship,
  filters: FinderFilters = {},
): ScholarshipMatch<TScholarship> {
  const discovery = normalizeDiscovery(scholarship);
  const normalizedFilters = normalizeFilters(filters);
  const criteria = buildCriterionResults(discovery, normalizedFilters);
  const reasons = criteria
    .map(toMatchReason)
    .filter((reason): reason is MatchReason => reason !== null);

  return {
    scholarship,
    discovery,
    score: calculateMatchScore(discovery, criteria),
    matchedCriteria: reasons
      .filter((reason) => reason.matched)
      .map((reason) => reason.message),
    missingCriteria: reasons
      .filter((reason) => !reason.matched)
      .map((reason) => reason.message),
    warnings: uniqueItems([
      ...reasons.flatMap((reason) => reason.warning ? [reason.warning] : []),
      ...getWarnings(discovery),
    ]),
  };
}

/**
 * Returns scholarships scored against Finder filters, sorted by score
 * descending and then by last updated date descending.
 *
 * Example input:
 * { countries: ["Germany"], degreeLevels: ["Masters"], fundingTypes: ["Fully Funded"], withoutIelts: true }
 *
 * Example output:
 * [
 *   {
 *     score: 92,
 *     matchedCriteria: ["Country matches Germany", "Masters supported", "Fully funded"],
 *     missingCriteria: ["IELTS information unavailable"],
 *     warnings: ["Deadline date estimated"]
 *   }
 * ]
 *
 * Edge cases:
 * - Empty filters return all scholarships with a data-quality-only score.
 * - Unknown nationality or field data is reported as missing criteria.
 * - Scholarships are never mutated.
 */
export function getMatchingScholarships<TScholarship extends DiscoveryScholarship>(
  scholarships: TScholarship[],
  filters: FinderFilters = {},
): ScholarshipMatch<TScholarship>[] {
  return scholarships
    .map((scholarship) => matchScholarship(scholarship, filters))
    .sort(
      (left, right) =>
        right.score - left.score ||
        (right.scholarship.lastUpdated ?? "").localeCompare(left.scholarship.lastUpdated ?? ""),
    );
}

/**
 * Returns scholarships whose normalized host countries include the requested
 * country.
 */
export function getScholarshipsByCountry(
  scholarships: Scholarship[],
  country: string,
): Scholarship[] {
  return scholarships.filter((scholarship) =>
    matchesCountry(normalizeDiscovery(scholarship), [country]).matched,
  );
}

/**
 * Returns scholarships matching a funding type or direct tuition coverage
 * value.
 */
export function getScholarshipsByFunding(
  scholarships: Scholarship[],
  funding: FundingType | TuitionCoverage,
): Scholarship[] {
  const tuitionCoverage =
    funding === "Fully Funded" ||
    funding === "Partially Funded" ||
    funding === "Self Funded"
      ? inferTuitionCoverage(funding)
      : funding;

  return scholarships.filter((scholarship) =>
    matchesFunding(normalizeDiscovery(scholarship), [tuitionCoverage]).matched,
  );
}

/**
 * Returns scholarships whose normalized degree levels include the requested
 * degree.
 */
export function getScholarshipsByDegree(
  scholarships: Scholarship[],
  degreeLevel: DegreeLevel,
): Scholarship[] {
  return scholarships.filter((scholarship) =>
    matchesDegree(normalizeDiscovery(scholarship), [degreeLevel]).matched,
  );
}

/**
 * Returns scholarships currently marked as open or rolling by normalized
 * discovery status.
 */
export function getOpenScholarships(scholarships: Scholarship[]): Scholarship[] {
  return scholarships.filter((scholarship) => {
    const discovery = normalizeDiscovery(scholarship);
    return discovery.status === "Open" || discovery.status === "Rolling";
  });
}

/**
 * Returns scholarships where IELTS is explicitly not required or an accepted
 * alternative proof path is present.
 */
export function getScholarshipsWithoutIELTS(
  scholarships: Scholarship[],
): Scholarship[] {
  return scholarships.filter((scholarship) =>
    matchesIELTS(normalizeDiscovery(scholarship), true).matched,
  );
}

/**
 * Returns scholarships that explicitly include a nationality, include broad
 * international eligibility, and do not exclude the requested nationality.
 */
export function getScholarshipsByNationality(
  scholarships: Scholarship[],
  nationality: string,
): Scholarship[] {
  return scholarships.filter((scholarship) =>
    matchesNationality(normalizeDiscovery(scholarship), nationality).matched,
  );
}

/**
 * Returns scholarships whose normalized fields of study include the requested
 * field.
 */
export function getScholarshipsByField(
  scholarships: Scholarship[],
  fieldOfStudy: string,
): Scholarship[] {
  return scholarships.filter((scholarship) =>
    matchesField(normalizeDiscovery(scholarship), [fieldOfStudy]).matched,
  );
}
