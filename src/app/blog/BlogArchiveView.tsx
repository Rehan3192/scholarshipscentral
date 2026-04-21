import Link from "next/link";

import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import { FEATURED_HUB_PAGES } from "@/lib/featuredHubPages";
import { stripHtmlToText, type WordPressPostListItem } from "@/lib/wordpress";

export const BLOG_REVALIDATE_SECONDS = 60 * 60;
export const BLOG_PAGE_SIZE = 20;

type Props = {
  configured: boolean;
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  posts: WordPressPostListItem[];
  loadError: string | null;
};

function formatDate(value: string) {
  const iso = value.split("T")[0];
  return iso || value;
}

export function buildBlogArchivePath(page: number) {
  return page <= 1 ? "/blog" : `/blog/page/${page}`;
}

function getPaginationTokens(currentPage: number, totalPages: number) {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const visiblePages = new Set<number>([1, totalPages]);

  if (currentPage <= 3) {
    visiblePages.add(2);
    visiblePages.add(3);
    visiblePages.add(4);
  } else if (currentPage >= totalPages - 2) {
    visiblePages.add(totalPages - 1);
    visiblePages.add(totalPages - 2);
    visiblePages.add(totalPages - 3);
  } else {
    visiblePages.add(currentPage - 1);
    visiblePages.add(currentPage);
    visiblePages.add(currentPage + 1);
  }

  const pages = [...visiblePages]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  const tokens: Array<number | string> = [];

  pages.forEach((page, index) => {
    const previousPage = pages[index - 1];

    if (index > 0 && previousPage && page - previousPage > 1) {
      tokens.push(`ellipsis-${previousPage}-${page}`);
    }

    tokens.push(page);
  });

  return tokens;
}

function ArchivePagination({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const previousHref = buildBlogArchivePath(currentPage - 1);
  const nextHref = buildBlogArchivePath(currentPage + 1);
  const tokens = getPaginationTokens(currentPage, totalPages);

  return (
    <nav
      aria-label="Blog pagination"
      className="rounded-2xl border border-gray-200 bg-white px-4 py-4 shadow-sm sm:px-5"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="mb-0 text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Link
            href={previousHref}
            rel="prev"
            aria-disabled={currentPage <= 1}
            className={[
              "inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
              currentPage <= 1 ? "pointer-events-none opacity-50" : "",
            ].join(" ")}
          >
            Newer posts
          </Link>

          <div className="flex flex-wrap items-center gap-2">
            {tokens.map((token) =>
              typeof token === "number" ? (
                <Link
                  key={token}
                  href={buildBlogArchivePath(token)}
                  aria-current={token === currentPage ? "page" : undefined}
                  className={[
                    "inline-flex min-w-10 items-center justify-center rounded-lg border px-3 py-2 text-sm font-semibold transition-colors duration-200 motion-reduce:transition-none focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
                    token === currentPage
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {token}
                </Link>
              ) : (
                <span
                  key={token}
                  className="inline-flex min-w-10 items-center justify-center px-1 text-sm font-semibold text-gray-400"
                >
                  ...
                </span>
              ),
            )}
          </div>

          <Link
            href={nextHref}
            rel="next"
            aria-disabled={currentPage >= totalPages}
            className={[
              "inline-flex items-center rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 transition-colors duration-200 motion-reduce:transition-none hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2",
              currentPage >= totalPages ? "pointer-events-none opacity-50" : "",
            ].join(" ")}
          >
            Older posts
          </Link>
        </div>
      </div>
    </nav>
  );
}

function FeaturedPagesSection() {
  return (
    <section className="space-y-4">
      <div className="space-y-1">
        <h2 className="mt-0 text-2xl font-semibold text-gray-900">
          Featured scholarship pages
        </h2>
        <p className="mb-0 text-sm text-gray-600">
          Start with these key pages when you want the fastest path into major scholarship topics.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {FEATURED_HUB_PAGES.map((page) => (
          <article
            key={page.slug}
            className="group rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50/60 to-white p-5 shadow-sm transition-all duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-800">
                Featured
              </span>
              <span className="inline-flex items-center rounded-full border border-blue-200 bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-700">
                {page.label}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900">
              <Link href={page.href} className="hover:underline group-hover:text-blue-800">
                {page.title}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-3 text-sm text-gray-700">
              {page.description}
            </p>
            <Link
              href={page.href}
              className="mt-4 inline-flex items-center rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 transition-colors duration-200 motion-reduce:transition-none hover:border-blue-300 hover:bg-blue-50"
            >
              Open page &rarr;
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function BlogArchiveView({
  configured,
  currentPage,
  totalPages,
  totalPosts,
  posts,
  loadError,
}: Props) {
  const pagePath = buildBlogArchivePath(currentPage);
  const description =
    currentPage === 1
      ? "Scholarship guides, hub pages, result updates, and application-focused articles from Scholarships Central."
      : `Page ${currentPage} of scholarship guides, hub pages, result updates, and application-focused articles from Scholarships Central.`;
  const webPageTitle =
    currentPage === 1
      ? "Blog | Scholarships Central"
      : `Blog - Page ${currentPage} | Scholarships Central`;
  const pageHeading = currentPage === 1 ? "Blog" : `Blog archive - page ${currentPage}`;
  const itemListItems =
    currentPage === 1
      ? [
          ...FEATURED_HUB_PAGES.map((page) => ({
            name: page.title,
            href: page.href,
          })),
          ...posts.slice(0, 10).map((post) => ({
            name: stripHtmlToText(post.title.rendered),
            href: `/blog/${post.slug}`,
          })),
        ].slice(0, 10)
      : posts.slice(0, 10).map((post) => ({
          name: stripHtmlToText(post.title.rendered),
          href: `/blog/${post.slug}`,
        }));

  const rangeStart = posts.length > 0 ? (currentPage - 1) * BLOG_PAGE_SIZE + 1 : 0;
  const rangeEnd = posts.length > 0 ? rangeStart + posts.length - 1 : 0;

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={
          currentPage === 1
            ? [
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
              ]
            : [
                { label: "Home", href: "/" },
                { label: "Blog", href: "/blog" },
                { label: `Page ${currentPage}`, href: pagePath },
              ]
        }
      />
      <WebPageJsonLd
        pagePath={pagePath}
        title={webPageTitle}
        description={description}
      />
      {itemListItems.length > 0 ? (
        <ItemListJsonLd pagePath={pagePath} items={itemListItems} />
      ) : null}

      <header className="space-y-3">
        {currentPage > 1 ? (
          <div className="inline-flex w-fit items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
            Archive page {currentPage} of {totalPages}
          </div>
        ) : null}
        <div className="space-y-2">
          <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
            {pageHeading}
          </h1>
          <p className="mb-0 text-sm text-gray-600">
            Scholarship guides, hub pages, and result updates in one place.
          </p>
          <p className="mb-0 text-sm text-blue-700">
            Need result-date articles? Browse the{" "}
            <Link href="/scholarship-results-2026" className="font-semibold hover:underline">
              Scholarship Results 2026
            </Link>{" "}
            hub.
          </p>
        </div>
      </header>

      <div className="space-y-6">
        {currentPage === 1 ? <FeaturedPagesSection /> : null}

        {!configured ? (
          <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Blog temporarily unavailable
            </h2>
            <p className="mt-2 mb-0">
              Please check back shortly for scholarship guides and updates.
            </p>
          </section>
        ) : loadError ? (
          <section className="rounded-2xl border border-red-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              Blog temporarily unavailable
            </h2>
            <p className="mt-2 mb-0">
              Some scholarship pages are still available, but we couldn&apos;t load
              blog posts right now. Please try again in a moment.
            </p>
            <p className="mt-3 mb-0 text-xs text-gray-500">
              Error: {loadError}
            </p>
          </section>
        ) : posts.length === 0 ? (
          <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
            <h2 className="mt-0 text-lg font-semibold text-gray-900">
              No blog posts yet
            </h2>
            <p className="mt-2 mb-0">
              Check back soon for scholarship guides, updates, and result articles.
            </p>
          </section>
        ) : (
          <section className="space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-1">
                <h2 className="mt-0 text-2xl font-semibold text-gray-900">
                  {currentPage === 1 ? "Latest posts" : "Archive posts"}
                </h2>
                <p className="mb-0 text-sm text-gray-600">
                  Scholarship news, guides, and application-focused blog posts.
                </p>
              </div>
              <p className="mb-0 text-sm text-gray-600">
                Showing {rangeStart}-{rangeEnd} of {Math.max(totalPosts, posts.length)} posts
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {posts.map((post) => {
                const title = stripHtmlToText(post.title.rendered);
                const excerpt =
                  stripHtmlToText(post.excerpt.rendered) ||
                  "Read the full post for details.";

                return (
                  <article
                    key={post.id}
                    className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-transform duration-200 motion-reduce:transition-none hover:-translate-y-0.5"
                  >
                    <div className="text-xs font-semibold text-gray-500">
                      {formatDate(post.date)}
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:underline"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-700">{excerpt}</p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline"
                    >
                      Read more &rarr;
                    </Link>
                  </article>
                );
              })}
            </div>

            <ArchivePagination
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </section>
        )}
      </div>
    </div>
  );
}
