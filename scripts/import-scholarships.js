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

function boolFlag(value) {
  return value === true || value === "true" || value === "1" || value === "yes";
}

function fail(message) {
  console.error(`\nImport failed: ${message}\n`);
  process.exit(1);
}

function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function todayIso() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;

  const pushField = () => {
    row.push(field);
    field = "";
  };
  const pushRow = () => {
    // Skip empty trailing row
    if (row.length === 1 && row[0] === "") return;
    rows.push(row);
    row = [];
  };

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];

    if (inQuotes) {
      if (ch === '"') {
        const next = text[i + 1];
        if (next === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
      continue;
    }

    if (ch === '"') {
      inQuotes = true;
      continue;
    }

    if (ch === ",") {
      pushField();
      continue;
    }

    if (ch === "\r") continue;
    if (ch === "\n") {
      pushField();
      pushRow();
      continue;
    }

    field += ch;
  }

  pushField();
  pushRow();

  return rows;
}

function toSlug(input) {
  return input
    .trim()
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "");
}

function keyForExistingMatch({ a, b, c }) {
  return `${String(a).trim().toLowerCase()}|${String(b)
    .trim()
    .toLowerCase()}|${String(c).trim().toLowerCase()}`;
}

function splitList(value) {
  if (!isNonEmptyString(value)) return [];
  // Accept either "a | b | c" or "a; b; c" formats.
  const sep = value.includes("|") ? "|" : ";";
  return value
    .split(sep)
    .map((x) => x.trim())
    .filter(Boolean);
}

function formatTsObject(obj) {
  const list = (items) =>
    items.length
      ? items.map((x) => `      "${x}",`).join("\n")
      : '      "TODO",';

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
${list(obj.eligibility)}
    ],

    benefits: [
${list(obj.benefits)}
    ],

    applicationProcess: [
${list(obj.applicationProcess)}
    ],

    documents: [
${list(obj.documents)}
    ],

    applyUrl: "${obj.applyUrl}",
    officialSource: "${obj.officialSource}",

    lastUpdated: "${obj.lastUpdated}",
  },`;
}

function appendSnippetsToDataFile(snippets) {
  const dataPath = path.join(__dirname, "..", "src", "data", "scholarships.ts");
  const src = fs.readFileSync(dataPath, "utf8");

  const marker = "const rawScholarships: Scholarship[] = [";
  const startIdx = src.indexOf(marker);
  if (startIdx < 0) fail("Could not find rawScholarships array to append into.");

  const endIdx = src.lastIndexOf("];");
  if (endIdx < 0) fail("Could not find end of rawScholarships array (];).");

  const before = src.slice(0, endIdx);
  const after = src.slice(endIdx);

  const joined = snippets.join("\n\n");
  const next = `${before}\n\n${joined}\n${after}`;
  fs.writeFileSync(dataPath, next, "utf8");
}

function existingSlugsFromDataFile() {
  const dataPath = path.join(__dirname, "..", "src", "data", "scholarships.ts");
  const src = fs.readFileSync(dataPath, "utf8");
  const re = /slug:\s*"([^"]+)"/g;
  const slugs = new Set();
  for (;;) {
    const m = re.exec(src);
    if (!m) break;
    slugs.add(m[1]);
  }
  return slugs;
}

function existingKeysFromRuntime(ensureInAllowedSets) {
  const scholarshipsPath = path.join(__dirname, "..", "src", "data", "scholarships.ts");
  // eslint-disable-next-line global-require
  const { scholarships } = require(scholarshipsPath);

  const keys = new Set();
  for (const s of scholarships) {
    const normalized = ensureInAllowedSets({
      country: s.country,
      degreeLevel: s.degreeLevel,
      fundingType: s.fundingType,
    });

    keys.add(keyForExistingMatch({ a: s.title, b: normalized.country, c: normalized.degreeLevel }));
    keys.add(keyForExistingMatch({ a: s.applyUrl, b: normalized.country, c: normalized.degreeLevel }));
  }
  return keys;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  const fileArg = args.file || args.path;
  if (!isNonEmptyString(fileArg)) {
    fail('Missing required flag: --file="C:\\path\\to\\scholarships.csv"');
  }

  const csvPath = path.isAbsolute(fileArg)
    ? fileArg
    : path.join(process.cwd(), fileArg);
  if (!fs.existsSync(csvPath)) {
    fail(`CSV file not found: ${csvPath}`);
  }

  const dryRun = boolFlag(args["dry-run"]) || boolFlag(args.dryRun);
  const append = boolFlag(args.append) && !dryRun;
  const skipExisting =
    boolFlag(args["skip-existing"]) || boolFlag(args.skipExisting) || false;

  const unregister = registerTypeScriptRequire();
  // eslint-disable-next-line global-require
  const {
    normalizeCountry,
    normalizeDegreeLevel,
    normalizeFundingType,
    ensureInAllowedSets,
  } = require(path.join(__dirname, "..", "src", "data", "values.ts"));
  const existingKeys = skipExisting ? existingKeysFromRuntime(ensureInAllowedSets) : null;
  unregister();

  const text = fs.readFileSync(csvPath, "utf8");
  const rows = parseCsv(text);
  if (rows.length < 2) fail("CSV must include a header row and at least 1 data row.");

  const header = rows[0].map((h) => h.trim());
  const idx = Object.fromEntries(header.map((h, i) => [h, i]));

  const required = [
    "title",
    "overview",
    "country",
    "degree",
    "funding",
    "deadline",
    "duration",
    "applyUrl",
    "officialSource",
  ];

  for (const col of required) {
    if (!(col in idx)) {
      fail(
        `Missing required column "${col}". Expected columns: ${required.join(
          ", "
        )} (optional: slug,lastUpdated,eligibility,benefits,applicationProcess,documents)`
      );
    }
  }

  const existing = existingSlugsFromDataFile();
  const incoming = new Set();
  const snippets = [];
  let skipped = 0;

  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (row.length === 0) continue;

    const get = (name) => (idx[name] != null ? (row[idx[name]] ?? "").trim() : "");

    const title = get("title");
    const overview = get("overview");
    const rawCountry = get("country");
    const rawDegree = get("degree");
    const rawFunding = get("funding");
    const deadline = get("deadline");
    const duration = get("duration");
    const applyUrl = get("applyUrl");
    const officialSource = get("officialSource");

    if (!isNonEmptyString(title)) fail(`Row ${r + 1}: title is empty`);

    const explicitSlug = get("slug");
    const slugBase = toSlug(explicitSlug || title);
    let slug = slugBase;

    // If slug isn't explicitly provided, and we see collisions, disambiguate using degree.
    if (!explicitSlug) {
      const degreeHint = toSlug(rawDegree);
      if ((existing.has(slug) || incoming.has(slug)) && degreeHint) {
        slug = `${slugBase}-${degreeHint}`;
      }
      let i = 2;
      while (existing.has(slug) || incoming.has(slug)) {
        slug = `${slugBase}-${degreeHint || "entry"}-${i}`;
        i++;
      }
    }

    if (explicitSlug) {
      if (existing.has(slug)) fail(`Row ${r + 1}: slug already exists: "${slug}"`);
      if (incoming.has(slug)) fail(`Row ${r + 1}: duplicate slug in CSV: "${slug}"`);
    }
    incoming.add(slug);

    const country = normalizeCountry(rawCountry);
    const degreeLevel = normalizeDegreeLevel(rawDegree);
    const fundingType = normalizeFundingType(rawFunding);

    if (existingKeys) {
      const byTitle = keyForExistingMatch({ a: title, b: country, c: degreeLevel });
      const byUrl = keyForExistingMatch({ a: applyUrl, b: country, c: degreeLevel });
      if (existingKeys.has(byTitle) || existingKeys.has(byUrl)) {
        skipped++;
        continue;
      }
    }

    const lastUpdated = get("lastUpdated") || todayIso();
    if (!/^\d{4}-\d{2}-\d{2}$/.test(lastUpdated)) {
      fail(`Row ${r + 1}: lastUpdated must be YYYY-MM-DD (got "${lastUpdated}")`);
    }

    const eligibility = splitList(get("eligibility"));
    const benefits = splitList(get("benefits"));
    const applicationProcess = splitList(get("applicationProcess"));
    const documents = splitList(get("documents"));

    if (!isNonEmptyString(overview)) fail(`Row ${r + 1}: overview is empty`);
    if (!isNonEmptyString(deadline)) fail(`Row ${r + 1}: deadline is empty`);
    if (!isNonEmptyString(duration)) fail(`Row ${r + 1}: duration is empty`);
    if (!isNonEmptyString(applyUrl)) fail(`Row ${r + 1}: applyUrl is empty`);
    if (!isNonEmptyString(officialSource)) {
      fail(`Row ${r + 1}: officialSource is empty`);
    }

    // Basic URL sanity:
    try {
      // eslint-disable-next-line no-new
      new URL(applyUrl);
    } catch {
      fail(`Row ${r + 1}: applyUrl is not a valid URL ("${applyUrl}")`);
    }

    const obj = {
      slug,
      title,
      overview,
      country,
      degreeLevel,
      fundingType,
      deadline,
      duration,
      eligibility,
      benefits,
      applicationProcess,
      documents,
      applyUrl,
      officialSource,
      lastUpdated,
    };

    snippets.push(formatTsObject(obj));
  }

  if (snippets.length === 0) fail("No importable rows found.");

  if (dryRun) {
    const skipMsg = skipped ? ` (skipped ${skipped} existing)` : "";
    console.log(`Dry run OK: would import ${snippets.length} scholarship(s)${skipMsg}`);
    console.log("\nFirst entry preview:\n");
    console.log(snippets[0]);
    console.log("\nRe-run with `--append=true` to append to src/data/scholarships.ts");
    return;
  }

  if (!append) {
    console.log(`Parsed ${snippets.length} scholarship(s).`);
    if (skipped) console.log(`Skipped ${skipped} existing scholarship(s).`);
    console.log("Re-run with `--append=true` to append to src/data/scholarships.ts");
    return;
  }

  appendSnippetsToDataFile(snippets);
  console.log(`Imported ${snippets.length} scholarship(s).`);
  if (skipped) console.log(`Skipped ${skipped} existing scholarship(s).`);
  console.log("Next: run `npm run validate:data`");
}

main();
