import type { Metadata } from "next";
import Link from "next/link";

import {
  BreadcrumbJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";

const lastReviewed = "April 21, 2026";

const trustSignals = [
  "Official-source based",
  "No scholarship guarantees",
  "Independent verification required",
];

const contentPrinciples = [
  "We review official scholarship pages, provider notices, and university or government sources before publishing summaries.",
  "We prioritize the details that affect decision-making first: eligibility, funding scope, deadlines, document requirements, and application route.",
  "We filter out vague promotional language and present realistic tradeoffs so users can decide whether a scholarship is worth deeper review.",
];

const nonServices = [
  "We do not issue scholarships, admissions, visas, or funding decisions.",
  "We do not process applications, sell guaranteed outcomes, or claim special access to providers.",
  "We do not promise that a user will be shortlisted, admitted, or awarded a scholarship.",
  "We do not replace the official scholarship page, provider instructions, or institutional policies.",
];

export const metadata: Metadata = {
  title: "About Scholarships Central",
  description:
    "Learn how Scholarships Central publishes source-based scholarship content with realistic expectations, clear filtering, and no misleading promises.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />
      <WebPageJsonLd
        pagePath="/about"
        title="About Scholarships Central"
        description="Source-based scholarship content built for filtering, accuracy, and realistic expectations."
        dateModified="2026-04-21"
      />

      <header className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="mb-0 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
              About Scholarships Central
            </p>
            <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
              Scholarship information built for clearer decisions
            </h1>
            <p className="mb-0 max-w-3xl text-sm text-gray-600 sm:text-base">
              Scholarships Central is an information-only scholarship platform
              focused on fully funded and partial scholarships worldwide. We
              publish source-based scholarship content for students who need a
              cleaner way to review opportunities without inflated claims or
              generic blog filler.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {trustSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800"
              >
                {signal}
              </span>
            ))}
          </div>

          <p className="mb-0 text-xs text-gray-500">Last reviewed: {lastReviewed}</p>
        </div>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Who We Are
        </h2>
        <p className="mt-4">
          Scholarships Central is an independent scholarship discovery and
          content platform. Our role is to research, organize, and explain
          scholarship opportunities in a way that helps users assess fit before
          they spend time preparing an application.
        </p>
        <p className="mb-0">
          We are not a university, embassy, scholarship board, admissions
          office, or application processor. We publish informational content
          only.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What We Do
        </h2>
        <p className="mt-4">
          We collect and structure scholarship information from official
          sources, then present it in a format that is easier to screen. That
          includes funding type, degree level, country, deadline status,
          eligibility signals, required documents, and the official application
          route.
        </p>
        <p className="mb-0">
          This site is different from generic scholarship blogs because the
          focus is not on publishing long lists or broad promises. The focus is
          on clarity, filtering, and realistic expectations so users can decide
          quickly whether an opportunity deserves further attention.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          How Our Content Works
        </h2>
        <ol className="mt-4 ml-0 space-y-3 pl-5">
          {contentPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What We Do NOT Do
        </h2>
        <ul className="mt-4 ml-0 space-y-3 pl-5">
          {nonServices.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-sm text-amber-950 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-amber-950">
          Data &amp; Accuracy Disclaimer
        </h2>
        <p className="mt-4">
          Our content is based on official sources available at the time of
          publication or update. Scholarship details can change without notice,
          including deadlines, eligibility rules, funding coverage, required
          documents, country restrictions, and application procedures.
        </p>
        <p className="mb-0">
          We do not guarantee that any scholarship listed on this site will
          remain open, remain unchanged, or be suitable for every applicant.
          Users must verify all important information independently on the
          official provider website before applying or making any financial or
          academic decision.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Contact / Responsibility Statement
        </h2>
        <p className="mt-4">
          We are responsible for how scholarship information is summarized and
          presented on Scholarships Central. If you find an outdated detail,
          broken official link, or factual error, contact us so the page can be
          reviewed.
        </p>
        <p>
          Questions, corrections, or source updates can be sent to{" "}
          <a
            href="mailto:support@scholarshipscentral.com"
            className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            support@scholarshipscentral.com
          </a>{" "}
          or through the{" "}
          <Link href="/contact" className="text-blue-700 hover:underline">
            contact page
          </Link>
          .
        </p>
        <p className="mb-0">
          Final eligibility, selection, and award decisions always belong to
          the official scholarship provider, not to Scholarships Central.
        </p>
      </section>
    </div>
  );
}
