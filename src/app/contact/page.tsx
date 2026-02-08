import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  title: "Contact | Scholarships Central",
  description:
    "Contact Scholarships Central for corrections, feedback, or scholarship listing updates.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <header className="space-y-2">
        <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
          Contact
        </h1>
        <p className="mb-0 text-sm text-gray-600">
          For corrections, feedback, or listing updates, reach us using the
          details below.
        </p>
      </header>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          Contact details
        </h2>

        <dl className="mt-5 grid gap-4 text-sm text-gray-700 sm:grid-cols-2">
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
              <span className="mx-2 text-gray-300">•</span>
              <a
                href="tel:+923182234605"
                className="text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
              >
                Call
              </a>
            </dd>
          </div>
        </dl>

        <p className="mt-6 mb-0 text-xs text-gray-500">
          Note: Scholarships Central is information-only. We do not accept
          applications. For application questions, always contact the official
          scholarship provider.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
        <h2 className="mt-0 text-lg font-semibold text-gray-900">
          What to include in your message
        </h2>
        <ul className="mt-4 ml-0 list-disc space-y-2 pl-5">
          <li>Scholarship title and country</li>
          <li>The page URL you’re referring to</li>
          <li>What’s outdated/incorrect and what it should be</li>
          <li>A link to the official source if available</li>
        </ul>
      </section>
    </div>
  );
}
