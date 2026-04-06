import type { Metadata } from "next";
import Link from "next/link";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import {
  getWordPressPageBySlug,
  getWordPressScholarshipResultPosts,
  isWordPressConfigured,
  stripHtmlToText,
  type WordPressPage,
  type WordPressPostListItem,
} from "@/lib/wordpress";

const RESULTS_REVALIDATE_SECONDS = 60 * 30;

export const metadata: Metadata = {
  title: "Scholarship Results 2026 | Scholarships Central",
  description:
    "Track scholarship result articles, interview outcome updates, and official result-date guides for 2026 scholarship cycles.",
  alternates: {
    canonical: "/scholarship-results-2026",
  },
};

function formatDate(value: string) {
  const iso = value.split("T")[0];
  return iso || value;
}

const guideLinks = [
  {
    href: "/blog",
    title: "All scholarship blog posts",
    description:
      "Browse every scholarship article if you want deadline guides, application posts, and updates beyond result timelines.",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description:
      "Use this if you want live opportunities to apply for before focusing on outcomes.",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description:
      "Move here if your main priority is funding strength rather than result timing.",
  },
];

export default async function ScholarshipResults2026Page() {
  const configured = isWordPressConfigured();

  let posts: WordPressPostListItem[] = [];
  let pageContent: WordPressPage | null = null;
  let loadError: string | null = null;

  if (configured) {
    try {
      const [resultPosts, resultPage] = await Promise.all([
        getWordPressScholarshipResultPosts({
          perPage: 100,
          revalidateSeconds: RESULTS_REVALIDATE_SECONDS,
        }),
        getWordPressPageBySlug("scholarship-results-2026", {
          revalidateSeconds: RESULTS_REVALIDATE_SECONDS,
        }),
      ]);

      posts = resultPosts;
      pageContent = resultPage;
    } catch (error) {
      loadError = error instanceof Error ? error.message : "Unknown error";
      posts = [];
      pageContent = null;
    }
  }

  const latestDate = posts[0]?.date;
  const itemList = posts.slice(0, 20).map((post) => ({
    name: stripHtmlToText(post.title.rendered),
    href: `/blog/${post.slug}`,
  }));

  return (
    <div className="space-y-6">
      <BreadcrumbJsonLd
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Scholarship results 2026", href: "/scholarship-results-2026" },
        ]}
      />
      <WebPageJsonLd
        pagePath="/scholarship-results-2026"
        title="Scholarship Results 2026 | Scholarships Central"
        description={metadata.description ?? undefined}
      />
      {itemList.length > 0 ? (
        <ItemListJsonLd pagePath="/scholarship-results-2026" items={itemList} />
      ) : null}

      <header className="space-y-3 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="inline-flex w-fit items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
          Results hub
        </div>
        <div className="space-y-2">
          <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
            Scholarship Results 2026
          </h1>
          <p className="mb-0 max-w-3xl text-sm text-gray-700 sm:text-base">
            Use this page to track scholarship-specific result articles, interview
            outcome updates, and official announcement timelines for 2026 cycles.
          </p>
          <p className="mb-0 rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-3 text-sm text-blue-900">
            If you are waiting for a decision, this page helps you find result-focused
            articles faster instead of relying on forum speculation or unverified dates.
          </p>
        </div>
      </header>

      {pageContent ? (
        <article className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <div
            className="wp-content space-y-4"
            dangerouslySetInnerHTML={{ __html: pageContent.content.rendered }}
          />
        </article>
      ) : null}

      <section className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-3xl font-bold text-gray-900">{posts.length}</div>
          <p className="mb-0 mt-1 text-sm text-gray-600">
            Result-focused articles currently listed on this page.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-lg font-bold text-gray-900">
            {latestDate ? formatDate(latestDate) : "Waiting"}
          </div>
          <p className="mb-0 mt-1 text-sm text-gray-600">
            Latest published result-article date in the current feed.
          </p>
        </article>
        <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-lg font-bold text-gray-900">Result archive</div>
          <p className="mb-0 mt-1 text-sm text-gray-600">
            A focused place to browse scholarship outcome coverage without unrelated posts.
          </p>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mt-0 text-2xl font-semibold text-gray-900">
            What you can track here
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
            <p className="mb-0">
              This page is built for scholarship-specific result coverage, including
              interview outcomes, final selections, and official announcement timing
              where providers have published real date windows.
            </p>
            <p className="mb-0">
              It is most useful after you have already applied and are waiting for
              updates. If you are still choosing scholarships to apply for, pages
              like <span className="font-semibold">Scholarships Still Open 2026</span> or{" "}
              <span className="font-semibold">Fully Funded Scholarships 2026</span>{" "}
              are usually the better next step.
            </p>
            <p className="mb-0">
              The goal is to help you find official-timeline articles faster, so you
              can separate confirmed updates from speculation.
            </p>
          </div>
        </article>

        <aside className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mt-0 text-xl font-semibold text-gray-900">
            Best next pages
          </h2>
          <div className="mt-4 space-y-3">
            {guideLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-xl border border-gray-200 px-4 py-3 transition-colors duration-200 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <div className="font-semibold text-gray-900">{link.title}</div>
                <div className="mt-1 text-sm text-gray-600">{link.description}</div>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      {!configured ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Results page temporarily unavailable
          </h2>
          <p className="mt-2 mb-0">
            We could not load scholarship result articles right now. Please check back shortly.
          </p>
        </section>
      ) : loadError ? (
        <section className="rounded-2xl border border-red-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Results feed temporarily unavailable
          </h2>
          <p className="mt-2 mb-0">
            The page is live, but we could not load scholarship result articles right now.
            Please try again in a moment.
          </p>
          <p className="mt-3 mb-0 text-xs text-gray-500">Error: {loadError}</p>
        </section>
      ) : posts.length === 0 ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            No result articles are live yet
          </h2>
          <div className="mt-3 space-y-2 leading-6">
            <p className="mb-0">
              We have not published scholarship-specific result updates here yet.
            </p>
            <p className="mb-0">
              Once result articles are available, this page will become the central
              place to track them.
            </p>
          </div>
        </section>
      ) : (
        <section className="space-y-4">
          <div className="space-y-1">
            <h2 className="mt-0 text-2xl font-semibold text-gray-900">
              Published result articles
            </h2>
            <p className="mb-0 text-sm text-gray-600">
              Scholarship result posts currently matching the 2026 results feed.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {posts.map((post) => {
              const title = stripHtmlToText(post.title.rendered);
              const excerpt =
                stripHtmlToText(post.excerpt.rendered) ||
                "Read the full result article for official timing details.";

              return (
                <article
                  key={post.id}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-colors duration-200 hover:border-gray-300 hover:shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-800">
                      Results
                    </span>
                    <span className="text-xs font-semibold text-gray-500">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {title}
                    </Link>
                  </h3>
                  <p className="mt-2 line-clamp-4 text-sm text-gray-700">{excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline"
                  >
                    Open result article &rarr;
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
