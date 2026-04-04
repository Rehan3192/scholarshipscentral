import type { Scholarship } from "@/data/types";

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;

const MONTH_INDEX = new Map(
  MONTH_NAMES.map((month, index) => [month.toLowerCase(), index]),
);

const MONTH_PATTERN = MONTH_NAMES.join("|");
const ROLLING_DEADLINE_RE =
  /rolling|year-round|available year-round|subject to supervisor funding/i;

export const EUROPEAN_COUNTRIES = new Set<string>([
  "Armenia",
  "Austria",
  "Azerbaijan",
  "Belgium",
  "Denmark",
  "Finland",
  "France",
  "Georgia",
  "Germany",
  "Hungary",
  "Ireland",
  "Italy",
  "Luxembourg",
  "Netherlands",
  "Norway",
  "Portugal",
  "Romania",
  "Russia",
  "Slovakia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "United Kingdom",
]);

export const ASIAN_COUNTRIES = new Set<string>([
  "Azerbaijan",
  "Brunei",
  "Brunei Darussalam",
  "China",
  "Hong Kong",
  "India",
  "Indonesia",
  "Japan",
  "Kazakhstan",
  "Malaysia",
  "Qatar",
  "Russia",
  "Saudi Arabia",
  "Singapore",
  "South Korea",
  "Taiwan",
  "Thailand",
  "Turkey",
  "United Arab Emirates",
]);

export const AFRICAN_COUNTRIES = new Set<string>([
  "Algeria",
  "Botswana",
  "Egypt",
  "Ethiopia",
  "Ghana",
  "Kenya",
  "Morocco",
  "Nigeria",
  "Rwanda",
  "South Africa",
  "Tanzania",
  "Tunisia",
  "Uganda",
  "Zambia",
  "Zimbabwe",
]);

function startOfDay(value: Date) {
  return new Date(value.getFullYear(), value.getMonth(), value.getDate());
}

function buildDate(year: number, monthName: string, day: number) {
  const monthIndex = MONTH_INDEX.get(monthName.toLowerCase());
  if (monthIndex === undefined) return null;

  const candidate = new Date(year, monthIndex, day, 23, 59, 59, 999);
  if (Number.isNaN(candidate.getTime())) return null;
  return candidate;
}

export function extractDeadlineDates(deadline: string) {
  const dates: Date[] = [];

  const monthFirstRe = new RegExp(
    `\\b(${MONTH_PATTERN})\\s+(\\d{1,2}),\\s*(\\d{4})`,
    "gi",
  );
  const dayFirstRe = new RegExp(
    `\\b(\\d{1,2})\\s+(${MONTH_PATTERN})\\s+(\\d{4})`,
    "gi",
  );

  for (const match of deadline.matchAll(monthFirstRe)) {
    const candidate = buildDate(
      Number(match[3]),
      match[1],
      Number(match[2]),
    );
    if (candidate) dates.push(candidate);
  }

  for (const match of deadline.matchAll(dayFirstRe)) {
    const candidate = buildDate(
      Number(match[3]),
      match[2],
      Number(match[1]),
    );
    if (candidate) dates.push(candidate);
  }

  return dates;
}

function extractMonthOnlyRange(deadline: string) {
  const explicitDates = extractDeadlineDates(deadline);
  if (explicitDates.length > 0) return null;

  const months = [...deadline.matchAll(new RegExp(`\\b(${MONTH_PATTERN})\\b`, "gi"))]
    .map((match) => MONTH_INDEX.get(match[1].toLowerCase()))
    .filter((value): value is number => value !== undefined);

  if (months.length === 0) return null;

  return {
    start: Math.min(...months),
    end: Math.max(...months),
  };
}

export function isEuropeanScholarship(scholarship: Scholarship) {
  return scholarship.continent === "Europe" || EUROPEAN_COUNTRIES.has(scholarship.country);
}

export function isAsianScholarship(scholarship: Scholarship) {
  return scholarship.continent === "Asia" || ASIAN_COUNTRIES.has(scholarship.country);
}

export function isAfricanScholarship(scholarship: Scholarship) {
  return scholarship.continent === "Africa" || AFRICAN_COUNTRIES.has(scholarship.country);
}

export function isRollingDeadline(deadline: string) {
  return ROLLING_DEADLINE_RE.test(deadline);
}

function scholarshipText(scholarship: Scholarship) {
  return [
    scholarship.title,
    scholarship.overview,
    scholarship.introduction,
    scholarship.summary,
    scholarship.country,
    scholarship.officialSource,
    ...(scholarship.keywords ?? []),
    ...(scholarship.tags ?? []),
    ...scholarship.eligibility,
    ...scholarship.benefits,
    ...scholarship.applicationProcess,
    ...scholarship.documents,
    ...(scholarship.selectionCriteria ?? []),
    ...(scholarship.tips ?? []),
    ...(scholarship.goodToKnow ?? []),
    ...(scholarship.faqs?.flatMap((faq) => [faq.question, faq.answer]) ?? []),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

const GOVERNMENT_PATTERNS = [
  /\bgovernment scholarship\b/,
  /\bgovernment-funded\b/,
  /\bgovernment funded\b/,
  /\bgovernment-backed\b/,
  /\bministry\b/,
  /\beuropean commission\b/,
  /\bforeign commonwealth and development office\b/,
  /\bswiss confederation\b/,
  /\bdaad\b/,
  /\bpresidency for turks abroad\b/,
  /\bpublic funding\b/,
] as const;

const LANGUAGE_FLEXIBILITY_PATTERNS = [
  /\bwithout ielts\b/,
  /\bcan i apply without ielts\b/,
  /\balternative proof\b/,
  /\baccepted alternative\b/,
  /\baccepted alternatives\b/,
  /\baccepted equivalent\b/,
  /\baccepted equivalents\b/,
  /\bexemption\b/,
  /\bexemptions\b/,
  /\benglish-medium instruction\b/,
  /\benglish medium instruction\b/,
  /\bmoi\b/,
  /\bnot mandatory\b/,
  /\bnot the only routes\b/,
  /\boptional for pre-admission\b/,
  /\bprevious degree was taught in english\b/,
] as const;

export function isGovernmentScholarship(scholarship: Scholarship) {
  const text = scholarshipText(scholarship);
  return GOVERNMENT_PATTERNS.some((pattern) => pattern.test(text));
}

export function hasLanguageFlexibleRoute(scholarship: Scholarship) {
  const text = scholarshipText(scholarship);
  const mentionsLanguageEvidence =
    /\bielts\b|\btoefl\b|\benglish proficiency\b|\benglish certificates?\b|\blanguage requirement\b/.test(
      text,
    );

  if (!mentionsLanguageEvidence) return false;

  return LANGUAGE_FLEXIBILITY_PATTERNS.some((pattern) => pattern.test(text));
}

export function isStillOpen(deadline: string, now = new Date()) {
  if (isRollingDeadline(deadline)) return true;

  const today = startOfDay(now);
  const explicitDates = extractDeadlineDates(deadline);
  if (explicitDates.length > 0) {
    return explicitDates.some((date) => date.getTime() >= today.getTime());
  }

  const monthRange = extractMonthOnlyRange(deadline);
  if (!monthRange) return false;

  return monthRange.end >= now.getMonth();
}

export function upcomingDeadlineScore(deadline: string, now = new Date()) {
  if (isRollingDeadline(deadline)) {
    return Number.POSITIVE_INFINITY;
  }

  const today = startOfDay(now);
  const explicitDates = extractDeadlineDates(deadline)
    .map((date) => date.getTime())
    .filter((timestamp) => timestamp >= today.getTime())
    .sort((a, b) => a - b);

  if (explicitDates.length > 0) {
    return explicitDates[0];
  }

  const monthRange = extractMonthOnlyRange(deadline);
  if (!monthRange) return Number.POSITIVE_INFINITY;

  return new Date(now.getFullYear(), monthRange.end, 28, 23, 59, 59, 999).getTime();
}

export function sortByUpcomingDeadline<T extends Pick<Scholarship, "deadline" | "lastUpdated">>(
  left: T,
  right: T,
) {
  const deadlineDiff = upcomingDeadlineScore(left.deadline) - upcomingDeadlineScore(right.deadline);
  if (deadlineDiff !== 0) return deadlineDiff;

  return (right.lastUpdated ?? "").localeCompare(left.lastUpdated ?? "");
}
