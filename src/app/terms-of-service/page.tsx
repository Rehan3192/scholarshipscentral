import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Terms of Service | Scholarships Central",
  description:
    "Terms of Service for Scholarships Central. Informational-only directory with external links to official scholarship providers.",
  alternates: { canonical: "/terms-of-service" },
};

export default function TermsOfServicePage() {
  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Service", href: "/terms-of-service" },
        ]}
      />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Last updated: February 8, 2026
        </p>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Informational-only
        </h2>
        <p className="mt-4 mb-0">
          Scholarships Central is an information-only scholarship directory. We
          do not accept applications, do not create accounts for users, and do
          not process payments. All applications are completed on external
          websites operated by scholarship providers.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Accuracy and deadlines
        </h2>
        <p className="mt-4 mb-0">
          Scholarship details (including deadlines, benefits, eligibility, and
          application links) can change at any time. We do our best to keep
          listings up to date, but we do not guarantee accuracy or completeness.
          Always verify the latest information on the official provider website
          before taking any action.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          External links
        </h2>
        <p className="mt-4 mb-0">
          Our site contains links to third-party websites. We do not control
          those sites and are not responsible for their content, availability,
          security, or privacy practices. Visiting external links is at your
          own risk.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Limitation of liability
        </h2>
        <p className="mt-4 mb-0">
          To the maximum extent permitted by law, Scholarships Central will not
          be liable for any losses or damages resulting from use of this site or
          from relying on information found here, including missed deadlines or
          incorrect information.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Governing law
        </h2>
        <p className="mt-4 mb-0">
          These Terms are governed by the laws of Pakistan, without regard to
          conflict of law principles.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Contact
        </h2>
        <p className="mt-4 mb-0">
          Questions or corrections? Visit our{" "}
          <Link href="/contact" className="text-blue-700 hover:underline">
            Contact page
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

