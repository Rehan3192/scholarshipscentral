/* eslint-disable no-console */

const fs = require("fs");
const path = require("path");

const { registerTypeScriptRequire } = require("./ts-require");

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function fail(message) {
  console.error(`\nData validation failed: ${message}\n`);
  process.exit(1);
}

function validateUrl(value, field, slug) {
  if (!isNonEmptyString(value)) fail(`${slug}: ${field} is empty`);
  try {
    // eslint-disable-next-line no-new
    new URL(value);
  } catch {
    fail(`${slug}: ${field} is not a valid URL ("${value}")`);
  }
}

function main() {
  const unregister = registerTypeScriptRequire();

  const scholarshipsPath = path.join(
    __dirname,
    "..",
    "src",
    "data",
    "scholarships.ts"
  );
  const valuesPath = path.join(__dirname, "..", "src", "data", "values.ts");

  // eslint-disable-next-line global-require, import/no-dynamic-require
  const { ensureInAllowedSets } = require(valuesPath);
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const { scholarships } = require(scholarshipsPath);

  unregister();

  if (!Array.isArray(scholarships)) fail("scholarships export is not an array");
  if (scholarships.length === 0) fail("scholarships array is empty");

  const slugs = new Set();

  for (const s of scholarships) {
    if (!s || typeof s !== "object") fail("found non-object scholarship entry");

    const slug = s.slug;
    if (!isNonEmptyString(slug)) fail("found scholarship with empty slug");
    if (slugs.has(slug)) fail(`duplicate slug: "${slug}"`);
    slugs.add(slug);

    const requiredStrings = [
      "title",
      "overview",
      "country",
      "degreeLevel",
      "fundingType",
      "deadline",
      "duration",
      "officialSource",
      "lastUpdated",
    ];
    for (const field of requiredStrings) {
      if (!isNonEmptyString(s[field])) fail(`${slug}: ${field} is empty`);
    }

    validateUrl(s.applyUrl, "applyUrl", slug);

    // Allowed-set validation (throws on invalid).
    ensureInAllowedSets({
      country: s.country,
      degreeLevel: s.degreeLevel,
      fundingType: s.fundingType,
    });

    const arrayFields = ["eligibility", "benefits", "applicationProcess", "documents"];
    for (const field of arrayFields) {
      if (!Array.isArray(s[field]) || s[field].length === 0) {
        fail(`${slug}: ${field} must be a non-empty array`);
      }
      for (const item of s[field]) {
        if (!isNonEmptyString(item)) fail(`${slug}: ${field} contains empty item`);
      }
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.lastUpdated)) {
      fail(`${slug}: lastUpdated must be YYYY-MM-DD (got "${s.lastUpdated}")`);
    }
  }

  console.log(`OK: validated ${scholarships.length} scholarship(s)`);
}

main();
