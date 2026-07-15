import Link from "next/link";

import { COUNTRIES } from "@/data/values";
import type { DegreeLevel, FundingType } from "@/data/primitives";

type Props = {
  country?: string;
  degree?: DegreeLevel;
  ielts?: boolean;
  funding?: FundingType;
};

type ArticleContext = {
  title: string;
  slug: string;
};

function includesTerm(text: string, term: string) {
  const normalizedText = ` ${text.toLocaleLowerCase().replaceAll(/[^a-z0-9]+/g, " ")} `;
  const normalizedTerm = ` ${term.toLocaleLowerCase().replaceAll(/[^a-z0-9]+/g, " ")} `;
  return normalizedText.includes(normalizedTerm);
}

export function detectScholarshipFinderContext({
  title,
  slug,
}: ArticleContext): Props {
  const contextText = `${title} ${slug}`;
  const country = [...COUNTRIES]
    .filter((value) => value !== "Multiple Countries")
    .sort((left, right) => right.length - left.length)
    .find((value) => includesTerm(contextText, value));

  let degree: DegreeLevel | undefined;
  if (/\b(phd|ph\.d|doctoral|doctorate)\b/i.test(contextText)) {
    degree = "PhD";
  } else if (/\b(master|masters|master's|postgraduate)\b/i.test(contextText)) {
    degree = "Masters";
  } else if (/\b(bachelor|bachelors|bachelor's|undergraduate)\b/i.test(contextText)) {
    degree = "Bachelors";
  }

  const withoutIelts = /\b(without[\s-]+ielts|no[\s-]+ielts|ielts[\s-]+free)\b/i.test(
    contextText,
  );
  const fullyFunded = /\bfully[\s-]+funded\b/i.test(contextText);

  return {
    country,
    degree,
    ielts: withoutIelts ? false : undefined,
    funding: fullyFunded ? "Fully Funded" : undefined,
  };
}

function buildFinderHref({ country, degree, ielts, funding }: Props) {
  const params = new URLSearchParams();

  if (country) params.set("country", country);
  if (degree) params.set("degree", degree.toLocaleLowerCase());
  if (ielts !== undefined) params.set("ielts", String(ielts));
  if (funding === "Fully Funded") params.set("funding", "fully-funded");
  if (funding === "Partially Funded") params.set("funding", "partially-funded");

  const query = params.toString();
  return query ? `/find-scholarships?${query}` : "/find-scholarships";
}

export default function ScholarshipFinderCTA(props: Props) {
  return (
    <aside
      aria-labelledby="scholarship-finder-cta-heading"
      className="my-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-gray-900 sm:p-6"
    >
      <p className="m-0 text-xs font-bold uppercase tracking-wide text-blue-700">
        <span aria-hidden="true">✨ </span>
        Personalized Tool
      </p>
      <h2
        id="scholarship-finder-cta-heading"
        className="mt-2 mb-0 text-xl font-semibold text-gray-900 sm:text-2xl"
      >
        Find Scholarships That Match Your Profile
      </h2>
      <p className="mt-3 mb-0 max-w-3xl text-sm leading-6 text-gray-700">
        Answer a few questions and instantly discover scholarships that match
        your degree, funding needs, destination, and study goals.
      </p>
      <ul className="mt-4 mb-0 grid gap-2 text-sm text-gray-700 sm:grid-cols-3">
        <li><span aria-hidden="true" className="font-semibold text-emerald-700">✓</span> Personalized recommendations</li>
        <li><span aria-hidden="true" className="font-semibold text-emerald-700">✓</span> Fully funded opportunities</li>
        <li><span aria-hidden="true" className="font-semibold text-emerald-700">✓</span> Takes less than 2 minutes</li>
      </ul>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Link
          href={buildFinderHref(props)}
          aria-label="Find scholarships that match your profile"
          className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          Find Scholarships &rarr;
        </Link>
        <span className="text-xs font-medium text-gray-600">No signup required.</span>
      </div>
    </aside>
  );
}
