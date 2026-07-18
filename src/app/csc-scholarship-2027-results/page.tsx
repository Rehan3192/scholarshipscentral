import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleJsonLd,
  BreadcrumbJsonLd,
  FaqJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";

const PAGE_PATH = "/csc-scholarship-2027-results";
const PUBLISHED_DATE = "2026-07-17";
const LAST_UPDATED = "2026-07-17";
const TITLE =
  "CSC Scholarship 2027 Results: Expected Date, How to Check Type A & Type B Status";
const DESCRIPTION =
  "Check the expected CSC Scholarship 2027 result period, Type A and Type B notification routes, status meanings, and what to do after selection.";

export const metadata: Metadata = {
  title: "CSC Scholarship 2027 Results: Dates & Status",
  description: DESCRIPTION,
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_PATH,
    type: "article",
    publishedTime: PUBLISHED_DATE,
    modifiedTime: LAST_UPDATED,
  },
  twitter: {
    title: "CSC Scholarship 2027 Results: Dates & Status",
    description: DESCRIPTION,
  },
};

const faqs = [
  {
    question: "Are CSC Scholarship 2027 results announced?",
    answer:
      "No official nationwide CSC Scholarship 2027 result release has been confirmed as of July 17, 2026. The 2027 selection cycle is still ahead, so applicants should treat any current result claim as unverified unless it comes from CSC, their university, embassy, or dispatching authority.",
  },
  {
    question: "When are CSC Type A results expected?",
    answer:
      "Type A timing depends on the embassy or other dispatching authority. July to August 2027 is a reasonable monitoring window based on the usual sequence, but it is an editorial estimate rather than an official universal deadline.",
  },
  {
    question: "When are CSC Type B results expected?",
    answer:
      "Universities may send preliminary or nomination updates before final CSC approval. Final notifications commonly arrive during the summer, but every university follows its own schedule and July to August 2027 is not a guaranteed official window.",
  },
  {
    question: "How can I check my CSC scholarship result?",
    answer:
      "Check the email used in your application, your university international office or admissions system, the CSC application portal, and—if you used Type A—the Chinese embassy or dispatching authority that accepted your application.",
  },
  {
    question: "What does Recommended mean in a CSC application?",
    answer:
      "It generally indicates that an institution or nominating authority has advanced the application. It should not be treated as a final scholarship award unless the responsible authority issues a final admission or award notice.",
  },
  {
    question: "Does pre-admission guarantee a CSC scholarship?",
    answer:
      "No. A pre-admission document or university recommendation can support an application, but final scholarship approval may still depend on CSC and the route-specific selection process.",
  },
  {
    question: "Can CSC results be delayed?",
    answer:
      "Yes. University review, nomination checks, CSC approval, document verification, embassy processing, and public holidays can produce different announcement dates.",
  },
  {
    question: "How will selected applicants be notified?",
    answer:
      "Notification may come from the university, the Chinese embassy or dispatching authority, or an update associated with the CSC application process. Applicants should monitor every official channel used for their application.",
  },
];

const statusRows = [
  ["Submitted", "The application was received by the system or accepting authority."],
  ["Under Review", "The application is being checked or evaluated."],
  ["Recommended", "A university or nominating authority may have advanced the application; this is not necessarily final approval."],
  ["CSC Reviewing", "Wording sometimes used for a later review stage; the exact label can vary by portal and route."],
  ["Admitted", "An admission or award decision has been issued; confirm the official documents and funding terms."],
  ["Rejected", "The application was not selected for that route or institution."],
  ["Waitlisted", "A final place may depend on availability; this label is not used uniformly by every authority."],
] as const;

const relatedLinks = [
  {
    href: "/scholarships/chinese-government-scholarship-masters",
    label: "Chinese Government Scholarship for Master's students",
  },
  {
    href: "/scholarships/chinese-government-scholarship-phd",
    label: "Chinese Government Scholarship for PhD students",
  },
  {
    href: "/scholarships/chinese-government-scholarship-bachelors",
    label: "Chinese Government Scholarship for Bachelor's students",
  },
  { href: "/countries/china", label: "Scholarships in China" },
  { href: "/government-scholarships-in-asia-2026", label: "Government scholarships in Asia" },
  { href: "/scholarship-results-2026", label: "Scholarship results hub" },
] as const;

export default function CscScholarship2027ResultsPage() {
  return (
    <article className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Scholarship results", href: "/scholarship-results-2026" },
          { label: "CSC Scholarship 2027 results", href: PAGE_PATH },
        ]}
      />
      <WebPageJsonLd
        pagePath={PAGE_PATH}
        title={TITLE}
        description={DESCRIPTION}
        dateModified={LAST_UPDATED}
      />
      <ArticleJsonLd
        pagePath={PAGE_PATH}
        headline={TITLE}
        description={DESCRIPTION}
        datePublished={PUBLISHED_DATE}
        dateModified={LAST_UPDATED}
        news
      />
      <FaqJsonLd items={faqs} />

      <header className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-amber-900">
            Result status: Expected
          </span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-700">
            China Scholarship Council
          </span>
        </div>
        <h1 className="mt-4 mb-0 max-w-4xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {TITLE}
        </h1>
        <p className="mt-4 mb-0 max-w-3xl text-base leading-7 text-slate-700">
          Track the expected Chinese Government Scholarship result period, learn
          where Type A and Type B decisions appear, and prepare for the steps
          that follow a confirmed selection.
        </p>
        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          <div><dt className="font-semibold text-slate-500">Last updated</dt><dd className="mt-1 text-slate-900"><time dateTime={LAST_UPDATED}>July 17, 2026</time></dd></div>
          <div><dt className="font-semibold text-slate-500">Country</dt><dd className="mt-1 text-slate-900">China</dd></div>
          <div><dt className="font-semibold text-slate-500">Degree levels</dt><dd className="mt-1 text-slate-900">Bachelor&apos;s, Master&apos;s, PhD</dd></div>
          <div><dt className="font-semibold text-slate-500">Reading time</dt><dd className="mt-1 text-slate-900">10 minutes</dd></div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="https://studyinchina.csc.edu.cn/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2">
            Open CSC application portal <span aria-hidden="true">↗</span>
          </a>
          <Link href="/scholarship-results-2026" className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
            View results hub
          </Link>
        </div>
      </header>

      <section className="rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:p-6" aria-labelledby="quick-summary">
        <h2 id="quick-summary" className="mt-0 text-xl font-semibold text-slate-900">Quick summary</h2>
        <dl className="mt-4 grid gap-x-6 gap-y-4 text-sm sm:grid-cols-2">
          {[
            ["Scholarship", "Chinese Government Scholarship (CSC)"],
            ["Result status", "Expected; update as official decisions are released"],
            ["Expected monitoring period", "July–August 2027 (editorial estimate, not an official universal date)"],
            ["Tracks", "Type A (dispatching authority) and Type B (university)"],
            ["Official authority", "China Scholarship Council (CSC)"],
            ["Notification channels", "University, embassy or dispatching authority, and CSC application system"],
          ].map(([term, detail]) => (
            <div key={term}><dt className="font-semibold text-blue-900">{term}</dt><dd className="mt-1 text-slate-800">{detail}</dd></div>
          ))}
        </dl>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-2xl font-semibold text-slate-900">Are CSC Scholarship 2027 results out?</h2>
        <p className="mt-4 mb-0 leading-7 text-slate-700">
          <strong>No official nationwide CSC Scholarship 2027 result release has been confirmed.</strong> As of July 17, 2026, the 2027 result cycle is still in the future. No university notification should be presented as a complete national release because universities, embassies, and other dispatching authorities can communicate on different schedules.
        </p>
        <p className="mt-4 mb-0 leading-7 text-slate-700">
          July–August 2027 is the period applicants should provisionally monitor most closely, but it is an editorial estimate rather than a date announced for every route. This page should be updated when identifiable universities, embassies, or CSC publish confirmations.
        </p>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-2xl font-semibold text-slate-900">CSC Scholarship 2027 result timeline</h2>
        <ol className="mt-5 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {["Application submitted", "University or dispatching-authority review", "CSC review and approval process", "Result notification", "Admission package", "Visa preparation", "Travel and registration"].map((step, index) => (
            <li key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><span className="block text-xs font-bold text-blue-700">STEP {index + 1}</span><span className="mt-1 block font-semibold text-slate-900">{step}</span></li>
          ))}
        </ol>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm"><h2 className="mt-0 text-xl font-semibold text-slate-900">Type A: embassy or dispatching-authority track</h2><p className="mt-3 mb-0 text-sm leading-6 text-slate-700">The authority that accepted or nominated the application normally controls communication. Monitor its website, email, and applicant instructions. Local review calendars and document delivery can make Type A dates vary by country.</p></div>
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm"><h2 className="mt-0 text-xl font-semibold text-slate-900">Type B: university track</h2><p className="mt-3 mb-0 text-sm leading-6 text-slate-700">A university may issue pre-admission, nomination, or internal selection information before final scholarship confirmation. Treat a university recommendation as provisional until the responsible authority provides the final result and admission documents.</p></div>
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm"><h2 className="mt-0 text-xl font-semibold text-slate-900">Type C: other designated routes</h2><p className="mt-3 mb-0 text-sm leading-6 text-slate-700">Type C can refer to other application channels identified in a specific programme notice. Follow it only when the official call explicitly gives a Type C agency number and notification process.</p></div>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-2xl font-semibold text-slate-900">How to check your CSC Scholarship result</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            ["1. University email and admissions system", "Check the inbox and spam folder associated with your application. Type B applicants should also check the university's international admissions system and official notices."],
            ["2. CSC application portal", "Sign in through the official application system and review any available application update. Portal wording may differ by route and should be read together with formal notices."],
            ["3. Chinese embassy or dispatching authority", "Type A applicants should follow the organization that received their documents. It may publish a list, email selected applicants, or provide another official checking method."],
            ["4. University international office", "If the published result window has passed, send one concise enquiry containing your name, application number, programme, and application route."],
          ].map(([heading, text]) => (
            <div key={heading} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><h3 className="m-0 text-base font-semibold text-slate-900">{heading}</h3><p className="mt-2 mb-0 text-sm leading-6 text-slate-700">{text}</p></div>
          ))}
        </div>
      </section>

      <section className="overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 shadow-sm">
        <div className="p-6 pb-3 sm:px-8"><h2 className="mt-0 text-2xl font-semibold text-slate-900">CSC result status meanings</h2><p className="mt-2 mb-0 text-sm text-slate-600">These are practical interpretations, not a guarantee that every portal or authority uses identical labels.</p></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left text-sm"><thead className="bg-slate-50 text-slate-700"><tr><th className="px-6 py-3 font-semibold sm:px-8">Status</th><th className="px-6 py-3 font-semibold">What it generally means</th></tr></thead><tbody className="divide-y divide-slate-200">{statusRows.map(([status, meaning]) => <tr key={status}><th scope="row" className="px-6 py-3 font-semibold text-slate-900 sm:px-8">{status}</th><td className="px-6 py-3 text-slate-700">{meaning}</td></tr>)}</tbody></table></div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm"><h2 className="mt-0 text-2xl font-semibold text-slate-900">What happens after selection?</h2><ol className="mt-4 mb-0 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-700"><li>Confirm that the notice is final and check the scholarship coverage.</li><li>Receive or download the admission notice and route-specific documents.</li><li>Prepare the visa application form, including JW201 or JW202 when issued and applicable.</li><li>Complete the required physical examination and visa process.</li><li>Follow the university&apos;s registration, accommodation, and arrival instructions.</li><li>Travel to China only after the visa and admission arrangements are confirmed.</li></ol></div>
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm"><h2 className="mt-0 text-2xl font-semibold text-slate-900">Documents commonly needed after selection</h2><ul className="mt-4 mb-0 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700"><li>Valid passport</li><li>Official admission or scholarship notice</li><li>Visa application documents supplied for the case</li><li>Foreigner physical examination documentation when required</li><li>Original or authenticated degree certificates and transcripts</li><li>Police clearance if requested by the university or visa authority</li><li>Passport photographs meeting the stated specifications</li></ul><p className="mt-4 mb-0 text-sm font-medium text-slate-800">Use the final university and visa instructions as the controlling checklist.</p></div>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
        <h2 className="mt-0 text-2xl font-semibold text-slate-900">If you have not received your result yet</h2>
        <p className="mt-3 mb-0 leading-7 text-slate-700">Do not assume silence means rejection. Universities and dispatching authorities release decisions at different times, and administrative processing can continue after another institution has announced its list. Check official channels regularly, confirm that your contact details are correct, and avoid sending repeated daily emails.</p>
        <h3 className="mt-5 text-lg font-semibold text-slate-900">Common reasons for a delay</h3>
        <ul className="mt-3 mb-0 grid gap-2 text-sm text-slate-700 sm:grid-cols-2"><li>Additional document or identity verification</li><li>CSC approval still pending</li><li>University nomination processing</li><li>Embassy or dispatching-authority scheduling</li><li>Public holidays and administrative closures</li><li>Missing or inconsistent documents</li></ul>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-2xl font-semibold text-slate-900">Frequently asked questions</h2>
        <div className="mt-5 space-y-5">{faqs.map((faq) => <div key={faq.question}><h3 className="m-0 text-base font-semibold text-slate-900">{faq.question}</h3><p className="mt-2 mb-0 text-sm leading-6 text-slate-700">{faq.answer}</p></div>)}</div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm"><h2 className="mt-0 text-2xl font-semibold text-slate-900">Official resources</h2><ul className="mt-4 mb-0 space-y-3 text-sm"><li><a href="https://www.campuschina.org/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">Campus China / China Scholarship Council ↗</a></li><li><a href="https://studyinchina.csc.edu.cn/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">CSC application system ↗</a></li><li><a href="https://www.studyinchina.edu.cn/" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 hover:underline">Study in China portal ↗</a></li><li><span className="font-semibold text-slate-900">Your university:</span> use its official international admissions website.</li><li><span className="font-semibold text-slate-900">Your embassy or dispatching authority:</span> use the exact office named in the Type A call.</li></ul></div>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6"><h2 className="mt-0 text-2xl font-semibold text-slate-900">Key takeaways</h2><ul className="mt-4 mb-0 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700"><li>CSC Scholarship 2027 results are not currently released.</li><li>July–August 2027 is an expected monitoring period, not an official universal promise.</li><li>Type A and Type B use different notification paths.</li><li>Pre-admission or recommendation does not necessarily equal final CSC approval.</li><li>Rely on CSC, your university, embassy, or dispatching authority—not social-media rumors.</li></ul></div>
      </section>

      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8">
        <h2 className="mt-0 text-2xl font-semibold text-slate-900">Related resources</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">{relatedLinks.map((item) => <Link key={item.href} href={item.href} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-900 hover:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">{item.label} <span aria-hidden="true">→</span></Link>)}</div>
      </section>

      <footer className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
        <p className="m-0"><strong className="text-slate-900">Editorial note:</strong> Published <time dateTime={PUBLISHED_DATE}>July 17, 2026</time>; last reviewed <time dateTime={LAST_UPDATED}>July 17, 2026</time>. Sources reviewed: Campus China, the CSC application system, and Study in China. This page separates confirmed information from editorial timing estimates and should be updated as official 2027 announcements appear.</p>
      </footer>
    </article>
  );
}
