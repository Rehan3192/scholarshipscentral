import type { Metadata } from "next";
import Link from "next/link";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo/StructuredData";
import {
  getWordPressScholarshipResultPosts,
  isWordPressConfigured,
  stripHtmlToText,
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
      "Browse every WordPress article if you want application guides, deadline posts, and updates beyond result dates.",
  },
  {
    href: "/scholarships-still-open-2026",
    title: "Scholarships still open 2026",
    description:
      "Use this if you want live opportunities to apply for before focusing on result timelines.",
  },
  {
    href: "/fully-funded-scholarships-2026",
    title: "Fully funded scholarships 2026",
    description:
      "Move here if your real priority is stronger funding coverage rather than announcement timing.",
  },
];

export default async function ScholarshipResults2026Page() {
  const configured = isWordPressConfigured();

  let posts: WordPressPostListItem[] = [];
  let loadError: string | null = null;

  if (configured) {
    try {
      posts = await getWordPressScholarshipResultPosts({
        perPage: 100,
        revalidateSeconds: RESULTS_REVALIDATE_SECONDS,
      });
    } catch (error) {
      loadError = error instanceof Error ? error.message : "Unknown error";
      posts = [];
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
          Editorial hub
        </div>
        <div className="space-y-2">
          <h1 className="mb-0 text-3xl font-bold text-gray-900 sm:text-4xl">
            Scholarship Results 2026
          </h1>
          <p className="mb-0 max-w-3xl text-sm text-gray-700 sm:text-base">
            Use this page to track result-date articles, interview outcome updates,
            and scholarship selection guides published on the blog for 2026 cycles.
          </p>
          <p className="mb-0 rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-3 text-sm text-blue-900">
            Publish a normal WordPress post with <span className="font-semibold">result</span>{" "}
            or <span className="font-semibold">results</span> in the title or slug
            — for example, <span className="font-semibold">Chevening Scholarship Results 2026</span> —
            and it will appear here automatically.
          </p>
        </div>
      </header>

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
          <div className="text-lg font-bold text-gray-900">WordPress posts</div>
          <p className="mb-0 mt-1 text-sm text-gray-600">
            This hub reads normal blog posts, so you do not need a separate CMS flow.
          </p>
        </article>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.3fr_0.9fr]">
        <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mt-0 text-2xl font-semibold text-gray-900">
            How this results page works
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
            <p className="mb-0">
              This page is meant for scholarship result articles only. Instead of
              creating a separate content type, we filter normal WordPress posts
              that signal result intent through words like{" "}
              <span className="font-semibold">result</span>,{" "}
              <span className="font-semibold">results</span>, or{" "}
              <span className="font-semibold">interview outcome</span>.
            </p>
            <p className="mb-0">
              That means your publishing workflow stays simple: write a normal
              blog post, keep the title clear, and this page becomes the archive
              layer for result-date content.
            </p>
            <p className="mb-0">
              If a post does not need to appear here, avoid using result-focused
              wording in the title or slug.
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
            WordPress connection not configured yet
          </h2>
          <p className="mt-2 mb-0">
            Once the WordPress connection is active, result articles published as
            normal blog posts will appear here automatically.
          </p>
        </section>
      ) : loadError ? (
        <section className="rounded-2xl border border-red-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            Results feed temporarily unavailable
          </h2>
          <p className="mt-2 mb-0">
            The page is live, but we could not load WordPress result posts right now.
            Please try again in a moment.
          </p>
          <p className="mt-3 mb-0 text-xs text-gray-500">Error: {loadError}</p>
        </section>
      ) : posts.length === 0 ? (
        <section className="rounded-2xl border border-gray-200 bg-white p-6 text-sm text-gray-700 shadow-sm sm:p-8">
          <h2 className="mt-0 text-lg font-semibold text-gray-900">
            No result articles published yet
          </h2>
          <div className="mt-3 space-y-2 leading-6">
            <p className="mb-0">
              You can start filling this page by publishing normal WordPress posts
              such as:
            </p>
            <ul className="mb-0 list-disc space-y-1 pl-5">
              <li>Chevening Scholarship Results 2026</li>
              <li>Eiffel Scholarship Results 2026</li>
              <li>MEXT Scholarship Interview Outcome 2026</li>
            </ul>
            <p className="mb-0">
              Once published, they will appear here automatically as long as the
              title or slug clearly signals result intent.
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
