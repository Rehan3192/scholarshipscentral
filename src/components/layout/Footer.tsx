import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkClassName =
    "rounded-sm text-sm font-medium text-slate-700 hover:text-blue-700 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

  return (
    <footer className="mt-16 border-t border-blue-100 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/60 p-6 shadow-sm sm:p-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr]">
            <div className="space-y-3">
              <div className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-blue-800">
                Student-first scholarship search
              </div>
              <div className="text-xl font-bold text-slate-950">
                Scholarships Central
              </div>
              <p className="mb-0 max-w-sm text-sm leading-6 text-slate-700">
                Source-based scholarship guides, filters, and Finder tools for
                students comparing funding, deadlines, eligibility notes, and
                official application links.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-xs">
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-800">
                  No signup required
                </span>
                <span className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 font-semibold text-blue-800">
                  Official links
                </span>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 font-semibold text-amber-900">
                  Verify before applying
                </span>
              </div>
              <Link
                href="/find-scholarships"
                className="inline-flex w-fit items-center rounded-xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 motion-reduce:transition-none"
              >
                Try the Finder <span aria-hidden="true" className="ml-1">→</span>
              </Link>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-950">Browse</div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>
                  <Link href="/scholarships" className={linkClassName}>
                    All scholarships
                  </Link>
                </li>
                <li>
                  <Link href="/find-scholarships" className={linkClassName}>
                    Scholarship Finder
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className={linkClassName}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/scholarship-results-2026" className={linkClassName}>
                    Scholarship results 2026
                  </Link>
                </li>
                <li>
                  <Link href="/countries" className={linkClassName}>
                    Countries
                  </Link>
                </li>
                <li>
                  <Link href="/degrees" className={linkClassName}>
                    Degrees
                  </Link>
                </li>
                <li>
                  <Link href="/funding" className={linkClassName}>
                    Funding types
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-sm font-semibold text-slate-950">Support</div>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>
                  <Link href="/about" className={linkClassName}>
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={linkClassName}>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className={linkClassName}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className={linkClassName}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap.xml" className={linkClassName}>
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link href="/robots.txt" className={linkClassName}>
                    Robots
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-blue-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p className="m-0">© {year} Scholarships Central</p>
            <p className="m-0">
              Information-only. Always verify final details on the official
              provider website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
