import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { scholarships } from "@/data/scholarships";
import ScholarshipHeader from "@/components/scholarship/ScholarshipHeader";
import ScholarshipCard from "@/components/scholarship/ScholarshipCard";
import { BreadcrumbJsonLd, WebPageJsonLd } from "@/components/seo/StructuredData";
import { toSegment } from "@/lib/helpers";

type Props = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return scholarships.map((s) => ({ slug: s.slug }));
}

type KeyValueItem = {
  key: string;
  value: string;
};

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="mt-0 text-xl font-semibold text-gray-900">{title}</h2>
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
        <dl className="grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
          {keyValues.map((kv) => (
            <div key={`${kv.key}:${kv.value}`} className="space-y-1">
              <dt className="font-medium text-gray-600">{kv.key}</dt>
              <dd className="font-semibold text-gray-900">{kv.value}</dd>
            </div>
          ))}
        </dl>

        {rest.length > 0 ? (
          <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-gray-700">
            {rest.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-gray-700">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
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

  return {
    title: `${scholarship.title} | Scholarships Central`,
    description: scholarship.overview,
    alternates: {
      canonical: `/scholarships/${scholarship.slug}`,
    },
    openGraph: {
      title: scholarship.title,
      description: scholarship.overview,
      url: `/scholarships/${scholarship.slug}`,
      siteName: "Scholarships Central",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: scholarship.title,
      description: scholarship.overview,
    },
  };
}

export default async function ScholarshipPage({ params }: Props) {
  const { slug } = await params;
  const scholarship = scholarships.find((x) => x.slug === slug);
  if (!scholarship) notFound();

  const related = scholarships
    .filter((s) => s.slug !== scholarship.slug)
    .map((s) => {
      const score =
        (s.country === scholarship.country ? 2 : 0) +
        (s.degreeLevel === scholarship.degreeLevel ? 2 : 0) +
        (s.fundingType === scholarship.fundingType ? 1 : 0);
      return { s, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((x) => x.s);

  const withoutPlaceholders = (items?: string[]) =>
    (items ?? [])
      .map((x) => x.trim())
      .filter((x) => x.length > 0 && x.toUpperCase() !== "TODO");

  const eligibility = withoutPlaceholders(scholarship.eligibility);
  const benefits = withoutPlaceholders(scholarship.benefits);
  const applicationProcess = withoutPlaceholders(scholarship.applicationProcess);
  const documents = withoutPlaceholders(scholarship.documents);
  const goodToKnow = withoutPlaceholders(scholarship.goodToKnow);
  const faqs = (scholarship.faqs ?? []).filter((f) => {
    if (!f) return false;
    const q = String(f.question ?? "").trim();
    const a = String(f.answer ?? "").trim();
    if (!q || !a) return false;
    if (q.toUpperCase() === "TODO" || a.toUpperCase() === "TODO") return false;
    return true;
  });

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

      <ScholarshipHeader scholarship={scholarship} />

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <SectionCard title="Eligibility">
            {eligibility.length > 0 ? (
              renderKeyValueOrList(eligibility)
            ) : (
              <p className="mb-0 text-sm text-gray-700">
                See the official website for eligibility requirements.
              </p>
            )}
          </SectionCard>

          <SectionCard title="Benefits">
            {benefits.length > 0 ? (
              renderKeyValueOrList(benefits)
            ) : (
              <p className="mb-0 text-sm text-gray-700">
                See the official website for funding and benefits details.
              </p>
            )}
          </SectionCard>

          <SectionCard title="Application process">
            {applicationProcess.length > 0 ? (
              <ol className="ml-0 list-decimal space-y-2 pl-5 text-sm text-gray-700">
                {applicationProcess.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : (
              <p className="mb-0 text-sm text-gray-700">
                Apply via the official website (see the official source link).
              </p>
            )}
          </SectionCard>

          <SectionCard title="Required documents">
            {documents.length > 0 ? (
              <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {documents.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="mb-0 text-sm text-gray-700">
                See the official website for required documents.
              </p>
            )}
          </SectionCard>

          {goodToKnow.length > 0 ? (
            <SectionCard title="Good to know">
              <ul className="ml-0 list-disc space-y-2 pl-5 text-sm text-gray-700">
                {goodToKnow.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </SectionCard>
          ) : null}

          {faqs.length > 0 ? (
            <SectionCard title="FAQ">
              <div className="rounded-xl border border-gray-200 divide-y divide-gray-200">
                {faqs.map((f) => (
                  <details
                    key={`${f.question}::${f.answer}`}
                    className="group bg-white p-4 open:bg-gray-50"
                  >
                    <summary className="cursor-pointer list-none text-sm font-semibold text-gray-900">
                      {f.question}
                    </summary>
                    <p className="mt-3 mb-0 text-sm text-gray-700">
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
            </SectionCard>
          ) : null}

          {related.length > 0 ? (
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h2 className="mt-0 text-lg font-semibold text-gray-900">
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
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mt-0 text-base font-semibold text-gray-900">
              Apply safely
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              Scholarships Central does not accept applications. Apply only on the
              official provider website.
            </p>

            <a
              href={scholarship.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Apply on official website &rarr;
            </a>

            <a
              href={scholarship.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Official source: {scholarship.officialSource}
            </a>

            <p className="mt-3 mb-0 text-xs text-gray-500">
              Last updated: {scholarship.lastUpdated}
            </p>
          </section>

          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mt-0 text-base font-semibold text-gray-900">
              Key facts
            </h2>
            <dl className="mt-4 grid gap-3 text-sm text-gray-700">
              <div className="flex items-start justify-between gap-3">
                <dt className="font-medium text-gray-600">Country</dt>
                <dd className="text-right font-semibold text-gray-900">
                  <Link
                    href={`/countries/${toSegment(scholarship.country)}`}
                    className="text-blue-700 hover:underline"
                  >
                    {scholarship.country}
                  </Link>
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="font-medium text-gray-600">Degree</dt>
                <dd className="text-right font-semibold text-gray-900">
                  <Link
                    href={`/degrees/${toSegment(scholarship.degreeLevel)}`}
                    className="text-blue-700 hover:underline"
                  >
                    {scholarship.degreeLevel}
                  </Link>
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="font-medium text-gray-600">Funding</dt>
                <dd className="text-right font-semibold text-gray-900">
                  {scholarship.fundingType}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="font-medium text-gray-600">Deadline</dt>
                <dd className="text-right font-semibold text-gray-900">
                  {scholarship.deadline}
                </dd>
              </div>
              <div className="flex items-start justify-between gap-3">
                <dt className="font-medium text-gray-600">Duration</dt>
                <dd className="text-right font-semibold text-gray-900">
                  {scholarship.duration}
                </dd>
              </div>
            </dl>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href="/scholarships"
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Browse all
              </Link>
              <Link
                href={`/funding/${scholarship.fundingType === "Fully Funded" ? "fully-funded" : "partially-funded"}`}
                className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Similar funding
              </Link>
            </div>
          </section>
        </aside>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
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
          className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
        >
          Go to official application page &rarr;
        </a>
      </div>
    </div>
  );
}
