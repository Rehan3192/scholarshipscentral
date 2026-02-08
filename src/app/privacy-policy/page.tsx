import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Privacy Policy | Scholarships Central",
  description: "Learn how Scholarships Central handles analytics and contact data.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          Last updated: February 8, 2026
        </p>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Overview
        </h2>
        <p className="mt-4">
          Scholarships Central is an information-only scholarship directory. We
          do not offer accounts, internal applications, or forms. When you click
          an &quot;Apply&quot; button, you are redirected to an external website operated
          by the official scholarship provider.
        </p>
        <p className="mb-0">
          This policy explains what information may be collected when you visit
          our site and how it is used.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Owner and contact
        </h2>
        <dl className="mt-5 grid gap-4 text-sm text-gray-700 sm:grid-cols-2">
          <div className="space-y-1">
            <dt className="font-medium text-gray-600">Owner / operator</dt>
            <dd className="font-semibold text-gray-900">
              Scholarships Central
            </dd>
          </div>

          <div className="space-y-1">
            <dt className="font-medium text-gray-600">Email</dt>
            <dd className="font-semibold text-gray-900">
              <a
                href="mailto:support@scholarshipscentral.com"
                className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                support@scholarshipscentral.com
              </a>
            </dd>
          </div>

          <div className="space-y-1">
            <dt className="font-medium text-gray-600">WhatsApp</dt>
            <dd className="font-semibold text-gray-900">
              <a
                href="https://wa.me/923182234605"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                +92 318 2234605
              </a>
            </dd>
          </div>

          <div className="space-y-1">
            <dt className="font-medium text-gray-600">More</dt>
            <dd className="font-semibold text-gray-900">
              <Link href="/contact" className="text-blue-700 hover:underline">
                Contact page
              </Link>
            </dd>
          </div>
        </dl>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Analytics (Google Analytics 4)
        </h2>
        <p className="mt-4">
          We use Google Analytics 4 (GA4) to understand how visitors use the
          site (for example: which pages are visited and which links are
          clicked). GA4 may collect usage data and device/browser information,
          and may use cookies or similar technologies.
        </p>
        <p className="mb-0">
          Our GA4 Measurement ID is{" "}
          <span className="font-mono">G-YMEB4WNX7G</span>. Google processes this
          data according to its own privacy policy.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Contact information
        </h2>
        <p className="mt-4">
          If you contact us (for example via email or phone), we will receive
          the information you choose to share. We use it only to respond and to
          address issues such as corrections to listings.
        </p>
        <p className="mb-0">
          Contact details are available on our{" "}
          <Link href="/contact" className="text-blue-700 hover:underline">
            Contact page
          </Link>
          .
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          External links
        </h2>
        <p className="mt-4 mb-0">
          Our site contains links to third-party websites (including scholarship
          providers). We are not responsible for the privacy practices of those
          websites. Please review the provider&apos;s privacy policy before sharing
          information on their site.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Changes to this policy
        </h2>
        <p className="mt-4 mb-0">
          We may update this Privacy Policy from time to time. The Last updated
          date at the top of this page reflects the most recent
          version.
        </p>
      </section>
    </div>
  );
}
