/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");

const { registerTypeScriptRequire } = require("./ts-require");

function parseArgs(argv) {
  const args = {};
  for (const raw of argv) {
    if (!raw.startsWith("--")) continue;
    const [key, ...rest] = raw.slice(2).split("=");
    const value = rest.join("=");
    args[key] = value === "" ? true : value;
  }
  return args;
}

function requireString(args, key) {
  const value = args[key];
  if (typeof value !== "string" || value.trim() === "") {
    console.error(`Missing required flag: --${key}=...`);
    process.exit(1);
  }
  return value.trim();
}

function toSlug(input) {
  return input
    .trim()
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "");
}

function todayIso() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function buildObject({
  slug,
  title,
  overview,
  country,
  degreeLevel,
  fundingType,
  deadline,
  duration,
  applyUrl,
  officialSource,
}) {
  return {
    slug,
    title,
    overview,
    country,
    degreeLevel,
    fundingType,
    deadline,
    duration,
    eligibility: ["TODO"],
    benefits: ["TODO"],
    applicationProcess: ["TODO"],
    documents: ["TODO"],
    applyUrl,
    officialSource,
    lastUpdated: todayIso(),
  };
}

function formatTsObject(obj) {
  // Keep this intentionally simple and deterministic.
  return `  {
    slug: "${obj.slug}",

    title: "${obj.title}",
    overview:
      "${obj.overview}",

    country: "${obj.country}",
    degreeLevel: "${obj.degreeLevel}",
    fundingType: "${obj.fundingType}",

    deadline: "${obj.deadline}",
    duration: "${obj.duration}",

    eligibility: [
      "TODO",
    ],

    benefits: [
      "TODO",
    ],

    applicationProcess: [
      "TODO",
    ],

    documents: [
      "TODO",
    ],

    applyUrl: "${obj.applyUrl}",
    officialSource: "${obj.officialSource}",

    lastUpdated: "${obj.lastUpdated}",
  },`;
}

function appendToDataFile(snippet) {
  const dataPath = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "scholarships.ts"
  );
  const src = fs.readFileSync(dataPath, "utf8");

  const marker = "const rawScholarships: Scholarship[] = [";
  const startIdx = src.indexOf(marker);
  if (startIdx < 0) {
    console.error("Could not find rawScholarships array to append into.");
    process.exit(1);
  }

  const endIdx = src.lastIndexOf("];");
  if (endIdx < 0) {
    console.error("Could not find end of rawScholarships array (];).");
    process.exit(1);
  }

  const before = src.slice(0, endIdx);
  const after = src.slice(endIdx);

  const next = `${before}\n${snippet}\n${after}`;
  fs.writeFileSync(dataPath, next, "utf8");
}

function main() {
  const unregister = registerTypeScriptRequire();

  // eslint-disable-next-line global-require
  const {
    normalizeCountry,
    normalizeDegreeLevel,
    normalizeFundingType,
  } = require(path.join(__dirname, "..", "src", "data", "values.ts"));

  const args = parseArgs(process.argv.slice(2));
  const append =
    args.append === true ||
    args.append === "true" ||
    args.append === "1" ||
    args.append === "yes";

  const title = requireString(args, "title");
  const rawSlug = typeof args.slug === "string" ? args.slug : title;
  const slug = toSlug(rawSlug);

  const country = normalizeCountry(requireString(args, "country"));
  const degreeLevel = normalizeDegreeLevel(requireString(args, "degree"));
  const fundingType = normalizeFundingType(requireString(args, "funding"));

  const overview =
    typeof args.overview === "string" && args.overview.trim() !== ""
      ? args.overview.trim()
      : `TODO: Short summary of ${title}.`;

  const deadline =
    typeof args.deadline === "string" && args.deadline.trim() !== ""
      ? args.deadline.trim()
      : "TODO";

  const duration =
    typeof args.duration === "string" && args.duration.trim() !== ""
      ? args.duration.trim()
      : "TODO";

  const applyUrl =
    typeof args.applyUrl === "string" && args.applyUrl.trim() !== ""
      ? args.applyUrl.trim()
      : "https://example.com";

  const officialSource =
    typeof args.officialSource === "string" && args.officialSource.trim() !== ""
      ? args.officialSource.trim()
      : "TODO";

  const obj = buildObject({
    slug,
    title,
    overview,
    country,
    degreeLevel,
    fundingType,
    deadline,
    duration,
    applyUrl,
    officialSource,
  });

  const snippet = formatTsObject(obj);

  unregister();

  if (append) {
    appendToDataFile(snippet);
    console.log(`Appended scholarship: ${slug}`);
    console.log("Next: run `npm run validate:data`");
  } else {
    console.log(snippet);
    console.log("\nTip: re-run with `--append` to add it to the dataset.");
  }
}

main();
