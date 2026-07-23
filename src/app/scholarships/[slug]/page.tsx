import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { scholarships } from "@/data/scholarships";
import type { ScholarshipContentSection } from "@/data/types";
import ScholarshipHeader from "@/components/scholarship/ScholarshipHeader";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import {
  BreadcrumbJsonLd,
  FaqJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import { cleanDisplayText, toSegment } from "@/lib/helpers";
import {
  buildScholarshipExplorationLinks,
  getScholarshipBlogGuideLink,
} from "@/lib/internal-linking";

type Props = {
  params: Promise<{ slug: string }>;
};

const CANONICAL_ROUTE_OVERRIDES: Record<string, string> = {
  "marshall-scholarship-2027": "/marshall-scholarship-2027",
  "fulbright-us-student-program-2027-2028": "/fulbright-us-student-program-2027-2028",
  "fulbright-study-research-awards-2027-2028": "/fulbright-study-research-awards-2027-2028",
  "fulbright-english-teaching-assistant-awards-2027-2028": "/fulbright-english-teaching-assistant-awards-2027-2028",
  "fulbright-application-documents-essay-limits-2027-2028": "/fulbright-application-documents-essay-limits-2027-2028",
  "fulbright-countries-without-language-requirement-2027-2028": "/fulbright-countries-without-language-requirement-2027-2028",
  "fulbright-graduate-degree-funding-2027-2028": "/fulbright-graduate-degree-funding-2027-2028",
  "fulbright-stipend-benefits-by-country-2027-2028": "/fulbright-stipend-benefits-by-country-2027-2028",
  "fulbright-acceptance-rates-by-country-2027-2028": "/fulbright-acceptance-rates-by-country-2027-2028",
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return scholarships.map((s) => ({ slug: s.slug }));
}

type KeyValueItem = {
  key: string;
  value: string;
};

type CleanContentSection = {
  title: string;
  paragraphs: string[];
  bullets: string[];
  ordered: string[];
  facts: Array<{
    label: string;
    value: string;
  }>;
};

const COUNTRY_CLUSTER_PATHS = {
  Italy: [
    {
      href: "/countries/italy",
      title: "Italy scholarships 2026",
      description: "Return to the full Italy scholarship list for all Italy scholarship routes.",
    },
    {
      href: "/fully-funded-scholarships-in-italy-2026",
      title: "Fully funded scholarships in Italy 2026",
      description: "Use this when stronger funding is the next filter for Italy.",
    },
    {
      href: "/italy-scholarships-still-open-2026",
      title: "Italy scholarships still open 2026",
      description: "Use this when you want Italy routes currently accepting applications.",
    },
    {
      href: "/italy-scholarships-without-ielts-2026",
      title: "Italy scholarships without IELTS 2026",
      description: "Use this when language flexibility matters for Italy.",
    },
  ],
  "United Kingdom": [
    {
      href: "/countries/united-kingdom",
      title: "UK scholarships 2026",
      description: "Return to the full UK scholarship list before deciding which route deserves your effort.",
    },
    {
      href: "/fully-funded-scholarships-in-uk-2026",
      title: "Fully funded scholarships in UK 2026",
      description: "Use this when full cost coverage is the next filter for the UK.",
    },
    {
      href: "/uk-scholarships-without-ielts-2026",
      title: "UK scholarships without IELTS 2026",
      description: "Use this when language flexibility is the next filter for the UK.",
    },
    {
      href: "/fully-funded-scholarships-2026",
      title: "Fully funded scholarships 2026",
      description: "Use this when you want to compare UK routes against the full-funding options.",
    },
    {
      href: "/scholarships-still-open-2026",
      title: "Scholarships still open 2026",
      description: "Use this when you want UK routes with deadlines approaching first.",
    },
  ],
  Germany: [
    {
      href: "/countries/germany",
      title: "Germany scholarships 2026",
      description: "Return to the full Germany scholarship list before deciding which route deserves your effort.",
    },
    {
      href: "/germany-scholarships-without-ielts-2026",
      title: "Germany scholarships without IELTS 2026",
      description: "Use this when language flexibility is the next filter for Germany.",
    },
    {
      href: "/fully-funded-scholarships-2026",
      title: "Fully funded scholarships 2026",
      description: "Use this when you want to compare Germany routes against the full-funding options.",
    },
    {
      href: "/scholarships-still-open-2026",
      title: "Scholarships still open 2026",
      description: "Use this when you want Germany routes with deadlines approaching first.",
    },
  ],
} as const;

const COUNTRY_CLUSTER_LABELS: Record<string, string> = {
  Italy: "Italy",
  "United Kingdom": "UK",
  Germany: "Germany",
};

const STRICT_COUNTRY_RELATED = new Set(["Italy", "United Kingdom", "Germany"]);

const INTERNAL_CLUSTER_SUPPORT: Record<
  string,
  {
    title: string;
    href: string;
    anchorText: string;
    trailingCopy: string;
  }
> = {
  "italy-university-of-padua-excellence-scholarship": {
    title: "Compare Italy full-funding routes",
    href: "/fully-funded-scholarships-in-italy-2026",
    anchorText: "fully funded scholarships in Italy 2026",
    trailingCopy:
      "before you decide whether Padua's package is strong enough for your Italy shortlist.",
  },
  "italy-university-of-tuscia-scholarship-masters": {
    title: "Compare stronger Italy funding options",
    href: "/fully-funded-scholarships-in-italy-2026",
    anchorText: "Italy fully funded scholarship options for 2026",
    trailingCopy:
      "before you commit to a route with call-based funding terms and variable annual coverage.",
  },
  "university-of-turin-scholarships-2026": {
    title: "Need more Italy routes still accepting applications?",
    href: "/italy-scholarships-still-open-2026",
    anchorText: "Italy scholarships still open 2026",
    trailingCopy:
      "if you want backup Italy options that are currently open or using rolling deadline language.",
  },
  "italy-university-of-insubria-scholarship-masters": {
    title: "Need more live Italy options?",
    href: "/italy-scholarships-still-open-2026",
    anchorText: "Italy scholarships still accepting applications in 2026",
    trailingCopy:
      "before you narrow your shortlist to one call-based university route.",
  },
  "italy-university-of-camerino-scholarship-masters": {
    title: "Compare other Italy deadlines approaching",
    href: "/italy-scholarships-still-open-2026",
    anchorText: "currently open scholarships in Italy for 2026",
    trailingCopy:
      "if you want more Italy routes you can act on now.",
  },
  "italy-unicore-8-scholarship-masters": {
    title: "Need more Italy routes to apply for now?",
    href: "/italy-scholarships-still-open-2026",
    anchorText: "Italy scholarships still open 2026",
    trailingCopy:
      "if this deadline feels too close and you need other active Italy options immediately.",
  },
  "chevening-scholarship": {
    title: "Need the full UK funding shortlist?",
    href: "/fully-funded-scholarships-in-uk-2026",
    anchorText: "fully funded scholarships in UK 2026",
    trailingCopy:
      "before you decide whether Chevening is the right first-choice route inside the UK fully funded scholarship options.",
  },
  "commonwealth-scholarship": {
    title: "Compare this with the wider UK funding options",
    href: "/fully-funded-scholarships-in-uk-2026",
    anchorText: "UK fully funded scholarship options for 2026",
    trailingCopy:
      "if you want to compare Commonwealth against the broader mix of fully funded UK routes.",
  },
  "uk-gates-cambridge-scholarship": {
    title: "Need more top-end UK funding routes?",
    href: "/fully-funded-scholarships-in-uk-2026",
    anchorText: "top fully funded scholarships in the UK for 2026",
    trailingCopy:
      "before you narrow your shortlist to Cambridge-only routes.",
  },
  "uk-clarendon-scholarship": {
    title: "Review the wider UK flagship funding options",
    href: "/fully-funded-scholarships-in-uk-2026",
    anchorText: "full UK fully funded scholarship shortlist for 2026",
    trailingCopy:
      "if you want to compare Clarendon with other flagship UK funding options.",
  },
  "daad-postgraduate-scholarship-germany": {
    title: "Need the full Germany shortlist?",
    href: "/countries/germany",
    anchorText: "Germany scholarships 2026",
    trailingCopy:
      "before you decide whether the DAAD postgraduate route is the right first-choice page inside the wider Germany scholarship options.",
  },
  "daad-epos-scholarship-masters": {
    title: "Compare this with the wider Germany pool",
    href: "/countries/germany",
    anchorText: "scholarships in Germany for 2026",
    trailingCopy:
      "if you want to compare DAAD EPOS against the broader mix of Germany scholarship routes.",
  },
  "daad-research-grants": {
    title: "Need more Germany doctoral routes?",
    href: "/countries/germany",
    anchorText: "Germany scholarship options for 2026",
    trailingCopy:
      "before you narrow your shortlist to research-grant routes alone.",
  },
  "germany-heinrich-b-ll-scholarship": {
    title: "Review more Germany funding options",
    href: "/countries/germany",
    anchorText: "full Germany scholarship shortlist for 2026",
    trailingCopy:
      "if you want to compare Heinrich Böll with the rest of the Germany foundation and DAAD pool.",
  },
  "germany-konrad-adenauer-scholarship": {
    title: "Compare more Germany-funded postgraduate routes",
    href: "/countries/germany",
    anchorText: "Germany funded scholarship routes for 2026",
    trailingCopy:
      "before you commit to one foundation-led route for Germany.",
  },
  "germany-friedrich-ebert-stiftung-scholarship": {
    title: "Need the wider Germany route mix?",
    href: "/countries/germany",
    anchorText: "Germany scholarship shortlist for 2026",
    trailingCopy:
      "if you want to compare Friedrich Ebert with the wider Germany scholarship options first.",
  },
};

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8">
      <h2 className="mt-0 text-xl font-semibold text-slate-900">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function parseKeyValue(item: string): KeyValueItem | null {
  const idx = item.indexOf(":");
  if (idx < 0) return null;

  const key = item.slice(0, idx).trim();
  const value = item.slice(idx + 1).trim();
  if (!key || !value) return null;
  if (key.length > 40) return null;

  return { key, value };
}

function renderKeyValueOrList(items: string[]) {
  const keyValues: KeyValueItem[] = [];
  const rest: string[] = [];

  for (const item of items) {
    const kv = parseKeyValue(item);
    if (kv) keyValues.push(kv);
    else rest.push(item);
  }

  if (keyValues.length >= 2) {
    return (
      <div className="space-y-4">
        <dl className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
          {keyValues.map((kv) => (
            <div key={`${kv.key}:${kv.value}`} className="space-y-1">
              <dt className="font-medium text-slate-600">{kv.key}</dt>
              <dd className="font-semibold text-slate-900">{kv.value}</dd>
            </div>
          ))}
        </dl>

        {rest.length > 0 ? (
          <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-slate-700">
            {rest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-slate-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function cleanTextItems(items?: string[]) {
  return (items ?? [])
    .map((item) => cleanDisplayText(item).trim())
    .filter((item) => item.length > 0 && item.toUpperCase() !== "TODO");
}

function renderLinkedText(text: string) {
  const parts = text.split(/(https?:\/\/[^\s]+|\/[A-Za-z0-9][^\s]*)/g);

  return parts.map((part, index) => {
    if (!part) return null;

    const trailing = part.match(/[),.;:]+$/)?.[0] ?? "";
    const href = trailing ? part.slice(0, -trailing.length) : part;

    if (href.startsWith("https://") || href.startsWith("http://")) {
      return (
        <span key={`${part}-${index}`}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {href}
          </a>
          {trailing}
        </span>
      );
    }

    if (href.startsWith("/")) {
      return (
        <span key={`${part}-${index}`}>
          <Link
            href={href}
            className="font-semibold text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            {href}
          </Link>
          {trailing}
        </span>
      );
    }

    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

function cleanContentSections(sections?: ScholarshipContentSection[]): CleanContentSection[] {
  return (sections ?? [])
    .map((section) => {
      const title = cleanDisplayText(section.title).trim();
      const paragraphs = cleanTextItems(section.paragraphs);
      const bullets = cleanTextItems(section.bullets);
      const ordered = cleanTextItems(section.ordered);
      const facts = (section.facts ?? [])
        .map((fact) => ({
          label: cleanDisplayText(fact.label).trim(),
          value: cleanDisplayText(fact.value).trim(),
        }))
        .filter(
          (fact) =>
            fact.label.length > 0 &&
            fact.value.length > 0 &&
            fact.label.toUpperCase() !== "TODO" &&
            fact.value.toUpperCase() !== "TODO",
        );

      if (!title) return null;
      if (paragraphs.length === 0 && bullets.length === 0 && ordered.length === 0 && facts.length === 0) {
        return null;
      }

      return {
        title,
        paragraphs,
        bullets,
        ordered,
        facts,
      };
    })
    .filter((section): section is CleanContentSection => Boolean(section));
}

function scholarshipScore(candidate: (typeof scholarships)[number], current: (typeof scholarships)[number]) {
  return (
    (candidate.country === current.country ? 2 : 0) +
    (candidate.degreeLevel === current.degreeLevel ? 2 : 0) +
    (candidate.fundingType === current.fundingType ? 1 : 0)
  );
}

function buildRelatedScholarships(current: (typeof scholarships)[number]) {
  const pool = scholarships.filter((candidate) => candidate.slug !== current.slug);

  const sameCountry = pool
    .filter((candidate) => candidate.country === current.country)
    .map((candidate) => ({ scholarship: candidate, score: scholarshipScore(candidate, current) }))
    .sort(
      (left, right) =>
        right.score - left.score ||
        (right.scholarship.lastUpdated ?? "").localeCompare(left.scholarship.lastUpdated ?? ""),
    )
    .map((entry) => entry.scholarship);

  if (STRICT_COUNTRY_RELATED.has(current.country)) {
    const countryFirst = sameCountry.slice(0, 4);
    if (countryFirst.length >= 4) return countryFirst;

    const fallback = pool
      .filter((candidate) => candidate.country !== current.country)
      .map((candidate) => ({ scholarship: candidate, score: scholarshipScore(candidate, current) }))
      .filter((entry) => entry.score > 0)
      .sort(
        (left, right) =>
          right.score - left.score ||
          (right.scholarship.lastUpdated ?? "").localeCompare(left.scholarship.lastUpdated ?? ""),
      )
      .map((entry) => entry.scholarship);

    return [...countryFirst, ...fallback].slice(0, 4);
  }

  return pool
    .map((candidate) => ({ scholarship: candidate, score: scholarshipScore(candidate, current) }))
    .filter((entry) => entry.score > 0)
    .sort(
      (left, right) =>
        right.score - left.score ||
        (right.scholarship.lastUpdated ?? "").localeCompare(left.scholarship.lastUpdated ?? ""),
    )
    .slice(0, 4)
    .map((entry) => entry.scholarship);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const scholarship = scholarships.find((x) => x.slug === slug);

  if (!scholarship) {
    return {
      title: "Scholarship Not Found",
      robots: { index: false, follow: false },
    };
  }

  const metaTitle =
    scholarship.seoTitle && scholarship.seoTitle.trim()
      ? scholarship.seoTitle.trim()
      : `${scholarship.title} | Scholarships Central`;
  const metaDescription =
    scholarship.metaDescription && scholarship.metaDescription.trim()
      ? scholarship.metaDescription.trim()
      : scholarship.overview;

  const canonicalPath =
    CANONICAL_ROUTE_OVERRIDES[scholarship.slug] ??
    `/scholarships/${scholarship.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: scholarship.keywords,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalPath,
      siteName: "Scholarships Central",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: metaTitle,
      description: metaDescription,
    },
  };
}

export default async function ScholarshipPage({ params }: Props) {
  const { slug } = await params;
  const scholarship = scholarships.find((x) => x.slug === slug);
  if (!scholarship) notFound();

  const related = buildRelatedScholarships(scholarship);
  const contentSections = cleanContentSections(scholarship.contentSections);
  const eligibility = cleanTextItems(scholarship.eligibility);
  const benefits = cleanTextItems(scholarship.benefits);
  const applicationProcess = cleanTextItems(scholarship.applicationProcess);
  const documents = cleanTextItems(scholarship.documents);
  const goodToKnow = cleanTextItems(scholarship.goodToKnow);
  const selectionCriteria = cleanTextItems(scholarship.selectionCriteria);
  const tips = cleanTextItems(scholarship.tips);
  const faqs = (scholarship.faqs ?? []).filter((f) => {
    if (!f) return false;
    const q = String(f.question ?? "").trim();
    const a = String(f.answer ?? "").trim();
    if (!q || !a) return false;
    if (q.toUpperCase() === "TODO" || a.toUpperCase() === "TODO") return false;
    return true;
  });
  const internalClusterSupport = INTERNAL_CLUSTER_SUPPORT[scholarship.slug];
  const countryClusterPaths =
    COUNTRY_CLUSTER_PATHS[
      scholarship.country as keyof typeof COUNTRY_CLUSTER_PATHS
    ] ?? [];
  const countryClusterLabel = COUNTRY_CLUSTER_LABELS[scholarship.country] ?? scholarship.country;
  const supportingPathHrefs = new Set<string>(
    countryClusterPaths.map((path) => path.href),
  );
  if (internalClusterSupport) supportingPathHrefs.add(internalClusterSupport.href);
  const blogGuideLink = getScholarshipBlogGuideLink(scholarship);
  const broaderLinks = buildScholarshipExplorationLinks(scholarship).filter(
    (link) => !supportingPathHrefs.has(link.href),
  );

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarships", href: "/scholarships" },
          {
            label: `Scholarships in ${scholarship.country}`,
            href: `/countries/${toSegment(scholarship.country)}`,
          },
          {
            label: `${scholarship.degreeLevel} Scholarships`,
            href: `/degrees/${toSegment(scholarship.degreeLevel)}`,
          },
          { label: scholarship.title, href: `/scholarships/${scholarship.slug}` },
        ]}
      />
      <WebPageJsonLd
        pagePath={`/scholarships/${scholarship.slug}`}
        title={scholarship.title}
        description={scholarship.overview}
        dateModified={scholarship.lastUpdated}
      />
      {faqs.length > 0 ? <FaqJsonLd items={faqs} /> : null}

      <ScholarshipHeader scholarship={scholarship} guideLink={blogGuideLink} />

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          {scholarship.introduction ? (
            <SectionCard title="Introduction">
              <p className="mb-0 text-sm text-slate-700 break-words">
                {cleanDisplayText(scholarship.introduction)}
              </p>
            </SectionCard>
          ) : null}

          {scholarship.summary ? (
            <SectionCard title="Quick summary">
              <p className="mb-0 text-sm text-slate-700 break-words">
                {cleanDisplayText(scholarship.summary)}
              </p>
            </SectionCard>
          ) : null}

          {contentSections.map((section) => (
            <SectionCard key={section.title} title={section.title}>
              <div className="space-y-4 text-sm text-slate-700">
                {section.facts.length > 0 ? (
                  <dl className="grid gap-3 sm:grid-cols-2">
                    {section.facts.map((fact) => (
                      <div
                        key={`${fact.label}:${fact.value}`}
                        className="rounded-2xl border border-blue-200 bg-white/80 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.06)] transition duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-[0_16px_36px_rgba(37,99,235,0.12)]"
                      >
                        <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-700">
                          {fact.label}
                        </dt>
                        <dd className="mt-2 text-sm font-semibold leading-relaxed text-slate-950 break-words">
                          {renderLinkedText(fact.value)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mb-0 break-words">
                    {renderLinkedText(paragraph)}
                  </p>
                ))}

                {section.bullets.length > 0 ? (
                  <ul className="ml-0 list-disc space-y-2 pl-5 break-words">
                    {section.bullets.map((item) => (
                      <li key={item}>{renderLinkedText(item)}</li>
                    ))}
                  </ul>
                ) : null}

                {section.ordered.length > 0 ? (
                  <ol className="ml-0 list-decimal space-y-2 pl-5 break-words">
                    {section.ordered.map((item) => (
                      <li key={item}>{renderLinkedText(item)}</li>
                    ))}
                  </ol>
                ) : null}
              </div>
            </SectionCard>
          ))}

          <SectionCard title="Eligibility">
            {eligibility.length > 0 ? (
              renderKeyValueOrList(eligibility)
            ) : (
              <p className="mb-0 text-sm text-slate-700">
                See the official website for eligibility requirements.
              </p>
            )}
          </SectionCard>

          <SectionCard title="Benefits">
            {benefits.length > 0 ? (
              renderKeyValueOrList(benefits)
            ) : (
              <p className="mb-0 text-sm text-slate-700">
                See the official website for funding and benefits details.
              </p>
            )}
          </SectionCard>

          <SectionCard title="Application process">
            {applicationProcess.length > 0 ? (
              <ol className="ml-0 list-decimal space-y-2 pl-5 text-sm text-slate-700 break-words">
                {applicationProcess.map((item) => (
                  <li key={item}>{renderLinkedText(item)}</li>
                ))}
              </ol>
            ) : (
              <p className="mb-0 text-sm text-slate-700">
                Apply via the official website (see the official source link).
              </p>
            )}
          </SectionCard>

          <SectionCard title="Required documents">
            {documents.length > 0 ? (
              <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-slate-700 break-words">
                {documents.map((item) => (
                  <li key={item}>{renderLinkedText(item)}</li>
                ))}
              </ul>
            ) : (
              <p className="mb-0 text-sm text-slate-700">
                See the official website for required documents.
              </p>
            )}
          </SectionCard>

          {selectionCriteria.length > 0 ? (
            <SectionCard title="Selection criteria">
              <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-slate-700 break-words">
                {selectionCriteria.map((item) => (
                  <li key={item}>{renderLinkedText(item)}</li>
                ))}
              </ul>
            </SectionCard>
          ) : null}

          {tips.length > 0 ? (
            <SectionCard title="Tips to win">
              <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-slate-700 break-words">
                {tips.map((item) => (
                  <li key={item}>{renderLinkedText(item)}</li>
                ))}
              </ul>
            </SectionCard>
          ) : null}

          {goodToKnow.length > 0 ? (
            <SectionCard title="Good to know">
              <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-slate-700 break-words">
                {goodToKnow.map((item) => (
                  <li key={item}>{renderLinkedText(item)}</li>
                ))}
              </ul>
            </SectionCard>
          ) : null}

          {faqs.length > 0 ? (
            <SectionCard title="FAQ">
              <div className="rounded-xl border border-slate-200 divide-y divide-slate-200">
                {faqs.map((f) => (
                  <details
                    key={`${f.question}::${f.answer}`}
                    className="group bg-white p-4 open:bg-slate-50"
                  >
                    <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">
                      {f.question}
                    </summary>
                    <p className="mt-3 mb-0 break-words text-sm text-slate-700">
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
            </SectionCard>
          ) : null}

          {internalClusterSupport ? (
            <SectionCard title={internalClusterSupport.title}>
              <p className="mb-0 text-sm text-slate-700">
                If this scholarship is on your shortlist, review{" "}
                <Link
                  href={internalClusterSupport.href}
                  className="font-medium text-blue-700 hover:underline"
                >
                  {internalClusterSupport.anchorText}
                </Link>{" "}
                {internalClusterSupport.trailingCopy}
              </p>
            </SectionCard>
          ) : null}

          {countryClusterPaths.length > 0 ? (
            <SectionCard title={`More ${countryClusterLabel} scholarship paths`}>
              <p className="mb-4 text-sm text-slate-700">
                Compare more scholarships in {countryClusterLabel} before widening your destination search.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {countryClusterPaths.map((path) => (
                  <Link
                    key={path.href}
                    href={path.href}
                    className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-4 text-sm text-slate-700 transition-colors duration-200 motion-reduce:transition-none hover:border-slate-300 hover:bg-slate-50"
                  >
                    <div className="font-semibold text-slate-900">{path.title}</div>
                    <div className="mt-2">{path.description}</div>
                  </Link>
                ))}
              </div>
            </SectionCard>
          ) : null}

          {broaderLinks.length > 0 ? (
            <SectionCard title="Broaden this shortlist">
              <p className="mb-4 text-sm text-slate-700">
                Use these routes to move from one scholarship page into the
                wider country and hub structure before you make a final choice.
              </p>
              <div className="space-y-3 text-sm text-slate-700">
                {broaderLinks.map((link) => (
                  <p
                    key={link.href}
                    className="mb-0"
                  >
                    <Link href={link.href} className="font-semibold text-blue-700 hover:underline">
                      {link.title}
                    </Link>{" "}
                    {link.description}
                  </p>
                ))}
              </div>
            </SectionCard>
          ) : null}

          {related.length > 0 ? (
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="mt-0 text-lg font-semibold text-slate-900">
                  Related scholarships
                </h2>
                <Link
                  href="/scholarships"
                  className="text-sm font-medium text-blue-700 hover:underline"
                >
                  View all
                </Link>
              </div>
              <div className="grid gap-4">
                {related.map((s) => (
                  <ScholarshipCard key={s.slug} scholarship={s} />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm">
            <h2 className="mt-0 text-base font-semibold text-slate-900">
              Apply safely
            </h2>
            <p className="mt-2 break-words text-sm text-slate-700">
              Scholarships Central does not accept applications. Apply only on the
              official provider website.
            </p>

            <a
              href={scholarship.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
            >
              Apply on official website &rarr;
            </a>

            {scholarship.guideUrl ? (
              <a
                href={scholarship.guideUrl}
                className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 break-words"
              >
                Read: {cleanDisplayText(scholarship.guideLabel ?? "Application guide")}
              </a>
            ) : null}

            <a
              href={scholarship.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-center text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 break-words"
            >
              Official source: {cleanDisplayText(scholarship.officialSource)}
            </a>

            <p className="mt-3 mb-0 text-xs text-slate-500">
              Last updated: {scholarship.lastUpdated}
            </p>
          </section>

          <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm">
            <h2 className="mt-0 text-base font-semibold text-slate-900">
              Key facts
            </h2>
            <dl className="mt-4 grid gap-4 text-sm text-slate-700">
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Country
                </dt>
                <dd className="mt-1 break-words font-semibold text-slate-900">
                  <Link
                    href={`/countries/${toSegment(scholarship.country)}`}
                    className="text-blue-700 hover:underline"
                  >
                    {scholarship.country}
                  </Link>
                </dd>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Degree
                </dt>
                <dd className="mt-1 break-words font-semibold text-slate-900">
                  <Link
                    href={`/degrees/${toSegment(scholarship.degreeLevel)}`}
                    className="text-blue-700 hover:underline"
                  >
                    {scholarship.degreeLevel}
                  </Link>
                </dd>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Funding
                </dt>
                <dd className="mt-1 break-words font-semibold text-slate-900">
                  {scholarship.fundingType}
                </dd>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Deadline
                </dt>
                <dd className="mt-1 break-words font-semibold leading-6 text-slate-900">
                  {cleanDisplayText(scholarship.deadline)}
                </dd>
              </div>
              <div className="rounded-2xl border border-blue-100 bg-white/70 p-3">
                <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                  Duration
                </dt>
                <dd className="mt-1 break-words font-semibold leading-6 text-slate-900">
                  {cleanDisplayText(scholarship.duration)}
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/scholarships"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Browse all
              </Link>
              <Link
                href="/find-scholarships"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Find my matches
              </Link>
              <Link
                href={`/funding/${scholarship.fundingType === "Fully Funded" ? "fully-funded" : "partially-funded"}`}
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Similar funding
              </Link>
            </div>
          </section>
        </aside>
      </div>

      <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 text-sm text-slate-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-slate-900">
          Ready to apply?
        </h2>
        <p className="mt-2 mb-4">
          Applications are completed on the official provider website. Be cautious
          with third-party sites and always verify scholarship details at the
          source.
        </p>
        <a
          href={scholarship.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          Go to official application page &rarr;
        </a>
      </div>
    </div>
  );
}
