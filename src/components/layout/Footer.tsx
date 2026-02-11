import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const linkClassName =
    "rounded-sm text-sm text-gray-700 hover:text-gray-900 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-3">
            <div className="text-base font-semibold text-gray-900">
              Scholarships Central
            </div>
            <p className="mb-0 text-sm text-gray-700">
              Information-only scholarship directory. We always link to official
              external application pages.
            </p>
            <div className="flex flex-wrap gap-2 pt-1 text-xs">
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold text-gray-700">
                No accounts
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold text-gray-700">
                No forms
              </span>
              <span className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 font-semibold text-gray-700">
                External links only
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-sm font-semibold text-gray-900">Browse</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/scholarships" className={linkClassName}>
                  All scholarships
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkClassName}>
                  Blog
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
            <div className="text-sm font-semibold text-gray-900">Support</div>
            <ul className="space-y-2 text-sm text-gray-700">
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
              <li className="text-xs text-gray-500">
                Tip: bookmark filtered URLs like{" "}
                <span className="font-mono">/scholarships?q=...</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">© {year} Scholarships Central</p>
          <p className="m-0">
            Always verify details on the official provider website.
          </p>
        </div>
      </div>
    </footer>
  );
}
