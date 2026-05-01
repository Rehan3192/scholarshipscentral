import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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

      {/* Header */}
      <header className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
            About Scholarships Central
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Scholarship information built for clearer decisions
          </h1>

          <p className="max-w-3xl text-sm text-gray-600 sm:text-base">
            Scholarships Central is an information-only scholarship platform
            focused on fully funded and partial scholarships worldwide.
            We publish source-based scholarship content for students who
            need a cleaner way to review opportunities without inflated
            claims or generic blog filler.
          </p>

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

          <p className="text-xs text-gray-500">
            Last reviewed: {lastReviewed}
          </p>
        </div>
      </header>

      {/* About Founder */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          About the Founder
        </h2>

        <div className="grid gap-6 md:grid-cols-[140px_1fr] items-start">
          <div className="flex justify-center md:justify-start">
            <Image
              src="/rehan.jpg"
              alt="Muhammad Rehan - Founder of Scholarships Central"
              width={120}
              height={120}
              className="rounded-full object-cover border border-gray-200"
              priority
            />
          </div>

          <div className="space-y-3 text-sm text-gray-700">
            <p>
              Muhammad Rehan is the founder of Scholarships Central and a
              Computer Engineering student at COMSATS University Islamabad.
            </p>

            <p>
              He personally researches and structures scholarship information
              before publishing to ensure clarity, accuracy, and practical value
              for students.
            </p>

            <p>
              He has hands-on experience building and managing multiple
              content platforms, handling content writing, SEO, and full
              website development independently.
            </p>

            <p>
              Scholarships Central was created to help students find
              reliable, structured, and realistic scholarship opportunities
              without misleading claims or unnecessary complexity.
            </p>

            <p className="text-xs text-gray-500">
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/muhammad-rehan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline"
              >
                View Profile
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-gray-900">Who We Are</h2>
        <p className="mt-4">
          Scholarships Central is an independent scholarship discovery and
          content platform. Our role is to research, organize, and explain
          scholarship opportunities in a way that helps users assess fit
          before they spend time preparing an application.
        </p>
        <p>
          We are not a university, embassy, scholarship board, admissions
          office, or application processor. We publish informational content only.
        </p>
      </section>

      {/* Internal Linking Boost */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-gray-900">
          Start Exploring Scholarships
        </h2>

        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/scholarships" className="text-blue-700 hover:underline">
              Browse all scholarships
            </Link>
          </li>
          <li>
            <Link href="/fully-funded-scholarships-2026" className="text-blue-700 hover:underline">
              Fully funded scholarships
            </Link>
          </li>
          <li>
            <Link href="/countries" className="text-blue-700 hover:underline">
              Scholarships by country
            </Link>
          </li>
        </ul>
      </section>

      {/* Contact */}
      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="text-lg font-semibold text-gray-900">
          Contact / Responsibility Statement
        </h2>

        <p className="mt-4">
          Questions or corrections can be sent to{" "}
          <a
            href="mailto:support@scholarshipscentral.com"
            className="text-blue-700 hover:underline"
          >
            support@scholarshipscentral.com
          </a>{" "}
          or through the{" "}
          <Link href="/contact" className="text-blue-700 hover:underline">
            contact page
          </Link>.
        </p>
      </section>
    </div>
  );
}