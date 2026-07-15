import type { FundingType } from "@/data/primitives";
import type { Scholarship } from "@/data/types";
import type {
  DiscoveryDataQuality,
  DiscoveryStatus,
  NormalizedScholarshipDiscovery,
  ParsedDeadline,
  ScholarshipDiscovery,
  TuitionCoverage,
} from "@/lib/discovery/types";

export type DiscoveryScholarship = Pick<
  Scholarship,
  | "country"
  | "degreeLevel"
  | "fundingType"
  | "deadline"
  | "lastUpdated"
  | "discovery"
>;

const MONTH_INDEX = new Map<string, number>([
  ["january", 0],
  ["february", 1],
  ["march", 2],
  ["april", 3],
  ["may", 4],
  ["june", 5],
  ["july", 6],
  ["august", 7],
  ["september", 8],
  ["october", 9],
  ["november", 10],
  ["december", 11],
]);

const ROLLING_DEADLINE_RE =
  /rolling|year-round|available year-round|subject to supervisor funding/i;

type NormalizeDiscoveryOptions = {
  now?: Date;
};

export type ParseDeadlineOptions = {
  referenceYear?: number;
};

function toIsoDate(year: number, monthIndex: number, day: number) {
  return [
    String(year).padStart(4, "0"),
    String(monthIndex + 1).padStart(2, "0"),
    String(day).padStart(2, "0"),
  ].join("-");
}

function isValidDate(value: Date) {
  return !Number.isNaN(value.getTime());
}

function isValidDateParts(year: number, monthIndex: number, day: number) {
  if (!Number.isInteger(year) || !Number.isInteger(monthIndex) || !Number.isInteger(day)) {
    return false;
  }

  const candidate = new Date(year, monthIndex, day);
  return (
    isValidDate(candidate) &&
    candidate.getFullYear() === year &&
    candidate.getMonth() === monthIndex &&
    candidate.getDate() === day
  );
}

function normalizeInputText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeTextItems(items: string[] | undefined) {
  return (items ?? [])
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function clampPriorityScore(value: number | undefined) {
  if (value === undefined) return undefined;
  if (!Number.isFinite(value)) return undefined;
  return Math.min(100, Math.max(0, Math.round(value)));
}

function safeNow(options?: NormalizeDiscoveryOptions) {
  const now = options?.now;
  if (now && isValidDate(now)) return new Date(now.getTime());
  return new Date();
}

/**
 * Parses a scholarship deadline string into a minimal structured deadline.
 * It never throws and returns text-only confidence when the value cannot be
 * safely converted into an ISO date. Pass `referenceYear` when parsing
 * month/day values that omit an explicit year.
 */
export function parseDeadline(
  deadline: string,
  options: ParseDeadlineOptions = {},
): ParsedDeadline {
  const value = normalizeInputText(deadline);
  if (!value) {
    return {
      confidence: "Text Only",
      isRolling: false,
    };
  }

  if (ROLLING_DEADLINE_RE.test(value)) {
    return {
      confidence: "Text Only",
      isRolling: true,
    };
  }

  const isoDateMatch = value.match(/\b(\d{4})-(\d{2})-(\d{2})\b/);
  if (isoDateMatch) {
    const year = Number(isoDateMatch[1]);
    const monthIndex = Number(isoDateMatch[2]) - 1;
    const day = Number(isoDateMatch[3]);

    if (isValidDateParts(year, monthIndex, day)) {
      return {
        date: toIsoDate(year, monthIndex, day),
        confidence: "Exact",
        isRolling: false,
      };
    }
  }

  const monthFirstMatch = value.match(
    /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})(?:,\s*(\d{4}))?/i,
  );
  if (monthFirstMatch) {
    const monthIndex = MONTH_INDEX.get(monthFirstMatch[1].toLowerCase());
    const day = Number(monthFirstMatch[2]);
    const year = monthFirstMatch[3]
      ? Number(monthFirstMatch[3])
      : options.referenceYear;

    if (monthIndex !== undefined && year && isValidDateParts(year, monthIndex, day)) {
      return {
        date: toIsoDate(year, monthIndex, day),
        confidence: monthFirstMatch[3] ? "Exact" : "Estimated",
        isRolling: false,
      };
    }
  }

  const dayFirstMatch = value.match(
    /\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)(?:\s+(\d{4}))?/i,
  );
  if (dayFirstMatch) {
    const day = Number(dayFirstMatch[1]);
    const monthIndex = MONTH_INDEX.get(dayFirstMatch[2].toLowerCase());
    const year = dayFirstMatch[3]
      ? Number(dayFirstMatch[3])
      : options.referenceYear;

    if (monthIndex !== undefined && year && isValidDateParts(year, monthIndex, day)) {
      return {
        date: toIsoDate(year, monthIndex, day),
        confidence: dayFirstMatch[3] ? "Exact" : "Estimated",
        isRolling: false,
      };
    }
  }

  return {
    confidence: "Text Only",
    isRolling: false,
  };
}

/**
 * Infers a discovery status from parsed deadline data and a caller-provided
 * reference date. Malformed or missing deadline data returns "Unknown".
 */
export function inferScholarshipStatus(
  parsedDeadline: ParsedDeadline,
  now: Date,
): DiscoveryStatus {
  if (parsedDeadline.isRolling) return "Rolling";
  if (!isValidDate(now)) return "Unknown";
  if (!parsedDeadline.date) return "Unknown";

  const deadlineDate = new Date(`${parsedDeadline.date}T23:59:59.999Z`);
  if (!isValidDate(deadlineDate)) return "Unknown";

  return deadlineDate.getTime() >= now.getTime() ? "Open" : "Closed";
}

/**
 * Maps the existing high-level funding type into a Finder-friendly tuition
 * coverage value. Unknown or malformed strings safely return "Unknown".
 */
export function inferTuitionCoverage(fundingType: FundingType): TuitionCoverage {
  if (fundingType === "Fully Funded") return "Full";
  if (fundingType === "Partially Funded") return "Partial";
  if (fundingType === "Self Funded") return "None";
  return "Unknown";
}

/**
 * Calculates a conservative data quality label from a normalized discovery
 * object. "Verified" is only preserved when manually provided.
 */
export function calculateDataQuality(
  discovery: ScholarshipDiscovery,
): DiscoveryDataQuality {
  if (discovery.dataQuality === "Verified") return "Verified";
  if (discovery.dataQuality === "Enhanced") return "Enhanced";

  const manualSignals = [
    discovery.eligibleNationalities,
    discovery.excludedNationalities,
    discovery.fieldsOfStudy,
    discovery.studyMode,
  ].filter((items) => Array.isArray(items) && items.length > 0).length;

  const booleanSignals = [
    discovery.stipendAvailable,
    discovery.travelSupport,
    discovery.accommodationSupport,
    discovery.ieltsRequired,
    discovery.alternativeProofAccepted,
    discovery.mediumOfInstructionAccepted,
  ].filter((value) => value !== undefined && value !== "Unknown").length;

  const methodSignal =
    discovery.applicationMethod !== undefined &&
    discovery.applicationMethod !== "Unknown"
      ? 1
      : 0;

  return manualSignals + booleanSignals + methodSignal >= 3 ? "Enhanced" : "Basic";
}

/**
 * Builds the additive Discovery Layer for an existing scholarship record.
 * Generated values are merged with manual `scholarship.discovery` overrides,
 * and the source scholarship object is never mutated.
 *
 * Unit-test-style examples:
 *
 * 1. Exact future deadline
 * Input: { country: "Germany", degreeLevel: "Masters", fundingType: "Fully Funded", deadline: "October 15, 2026" }
 * Output: { hostCountries: ["Germany"], degreeLevels: ["Masters"], status: "Open", tuitionCoverage: "Full", deadlineDate: "2026-10-15" }
 *
 * 2. Rolling deadline
 * Input: { country: "USA", degreeLevel: "PhD", fundingType: "Partially Funded", deadline: "Rolling deadline" }
 * Output: { hostCountries: ["USA"], degreeLevels: ["PhD"], status: "Rolling", tuitionCoverage: "Partial", deadlineConfidence: "Text Only" }
 *
 * 3. Month-only deadline
 * Input: { country: "United Kingdom", degreeLevel: "Masters", fundingType: "Fully Funded", deadline: "November" }
 * Output: { hostCountries: ["United Kingdom"], degreeLevels: ["Masters"], status: "Unknown", tuitionCoverage: "Full" }
 *
 * 4. Manual override
 * Input: { country: "Italy", degreeLevel: "Bachelors", fundingType: "Partially Funded", deadline: "May 1, 2026", discovery: { status: "Expected" } }
 * Output: { hostCountries: ["Italy"], degreeLevels: ["Bachelors"], status: "Expected", tuitionCoverage: "Partial" }
 *
 * 5. Malformed deadline
 * Input: { country: "Multiple Countries", degreeLevel: "Masters", fundingType: "Self Funded", deadline: "Check official website" }
 * Output: { hostCountries: ["Multiple Countries"], degreeLevels: ["Masters"], status: "Unknown", tuitionCoverage: "None", deadlineConfidence: "Text Only" }
 */
export function normalizeDiscovery(
  scholarship: DiscoveryScholarship,
  options?: NormalizeDiscoveryOptions,
): NormalizedScholarshipDiscovery {
  const now = safeNow(options);
  const parsedDeadline = parseDeadline(scholarship.deadline, {
    referenceYear: now.getFullYear(),
  });
  const generated: NormalizedScholarshipDiscovery = {
    hostCountries: normalizeTextItems([scholarship.country]),
    degreeLevels: [scholarship.degreeLevel],
    status: inferScholarshipStatus(parsedDeadline, now),
    deadlineDate: parsedDeadline.date,
    deadlineConfidence: parsedDeadline.confidence,
    tuitionCoverage: inferTuitionCoverage(scholarship.fundingType),
    dataQuality: "Basic",
  };

  const manual = scholarship.discovery ?? {};
  const manualHostCountries = normalizeTextItems(manual.hostCountries);
  const merged: NormalizedScholarshipDiscovery = {
    ...generated,
    ...manual,
    hostCountries:
      manualHostCountries.length > 0
        ? manualHostCountries
        : generated.hostCountries,
    degreeLevels:
      manual.degreeLevels && manual.degreeLevels.length > 0
        ? [...manual.degreeLevels]
        : generated.degreeLevels,
    priorityScore: clampPriorityScore(manual.priorityScore),
    dataQuality: calculateDataQuality({
      ...generated,
      ...manual,
    }),
  };

  return merged;
}
