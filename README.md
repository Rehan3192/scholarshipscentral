Scholarships Central is an SEO-first, information-only scholarship directory (external links only — no accounts, no forms).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`.

### Windows note (PowerShell)
If `npm run ...` fails with an execution policy error (`npm.ps1 cannot be loaded because running scripts is disabled`), use:

```bash
npm.cmd run dev
```

## Import scholarships from CSV

Use the CSV importer to scale the dataset in `src/data/scholarships.ts`.

### CSV columns
Required columns:
- `title,overview,country,degree,funding,deadline,duration,applyUrl,officialSource`

Optional columns:
- `slug,lastUpdated,eligibility,benefits,applicationProcess,documents`

List fields (`eligibility`, `benefits`, `applicationProcess`, `documents`) can be separated by `|` or `;`.

### Commands
Dry run (no changes):

```bash
npm.cmd run import:csv -- --file=examples/scholarships.csv --dry-run=true
```

Append to the dataset:

```bash
npm.cmd run import:csv -- --file=PATH_TO.csv --append=true
```

Validate the dataset after importing:

```bash
npm.cmd run validate:data
```
