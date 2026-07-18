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
  title: "Scholarship Result Articles",
  description:
    "Browse scholarship result articles, expected announcement dates, checking methods, and official outcome updates.",
  alternates: {
    canonical: "/scholarship-results-2026",
  },
};

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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

const featuredResultArticle = {
  href: "/csc-scholarship-2027-results",
  title:
    "CSC Scholarship 2027 Results: Expected Date, How to Check Type A & Type B Status",
  excerpt:
    "Track the expected result period, Type A and Type B notification routes, status meanings, and what to do after selection.",
  date: "2026-07-17",
  status: "Expected",
} as const;

export default async function ScholarshipResults2026Page() {
  const configured = isWordPressConfigured();

  let posts: WordPressPostListItem[] = [];
  let loadError: string | null = null;

  if (configured) {
    try {
      posts = await getWordPressScholarshipResultPosts({
        perPage: 20,
        revalidateSeconds: RESULTS_REVALIDATE_SECONDS,
      });
    } catch (error) {
      loadError =
        error instanceof Error ? error.message : "Unknown error";
    }
  }

  const itemList = [
    { name: featuredResultArticle.title, href: featuredResultArticle.href },
    ...posts.slice(0, 19).map((post) => ({
      name: stripHtmlToText(post.title.rendered),
      href: `/blog/${post.slug}`,
    })),
  ];

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
        title="Scholarship Result Articles | Scholarships Central"
        description={metadata.description ?? undefined}
      />
      {itemList.length > 0 ? (
        <ItemListJsonLd pagePath="/scholarship-results-2026" items={itemList} />
      ) : null}

      <header className="space-y-3 rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-6 shadow-sm sm:p-8">
        <div className="inline-flex w-fit items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800">
          Results hub
        </div>
        <div className="space-y-2">
          <h1 className="mb-0 text-3xl font-bold text-slate-900 sm:text-4xl">
            Scholarship Result Articles
          </h1>
          <p className="mb-0 max-w-3xl text-sm text-slate-700 sm:text-base">
            Browse dedicated result guides, expected announcement dates, checking
            methods, and official outcome updates by scholarship.
          </p>
          <p className="mb-0 rounded-xl border border-blue-200 bg-blue-50/70 px-4 py-3 text-sm text-blue-900">
            If you are waiting for a decision, this page helps you find result-focused
            articles faster instead of relying on forum speculation or unverified dates.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-0 text-2xl font-semibold text-slate-900">
              Latest result articles
            </h2>
            <p className="mb-0 text-sm text-slate-600">
              Open a card to read the complete result guide.
            </p>
          </div>
          <p className="mb-0 text-sm text-slate-600">
            {posts.length + 1} article{posts.length === 0 ? "" : "s"}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <article className="rounded-2xl border border-blue-200 bg-white p-5 shadow-sm transition-transform duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-amber-900">
                {featuredResultArticle.status}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {formatDate(featuredResultArticle.date)}
              </span>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              <Link href={featuredResultArticle.href} className="hover:underline">
                {featuredResultArticle.title}
              </Link>
            </h3>
            <p className="mt-2 line-clamp-4 text-sm text-slate-700">
              {featuredResultArticle.excerpt}
            </p>
            <Link href={featuredResultArticle.href} className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline">
              Open result article &rarr;
            </Link>
          </article>

          {posts.map((post) => {
            const title = stripHtmlToText(post.title.rendered);
            const excerpt =
              stripHtmlToText(post.excerpt.rendered) ||
              "Read the full result article for official timing details.";

            return (
              <article key={post.id} className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-5 shadow-sm transition-transform duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-blue-800">
                    Results
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-4 text-sm text-slate-700">{excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-4 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline">
                  Open result article &rarr;
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {!configured || loadError ? (
        <aside className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          Additional WordPress result articles are temporarily unavailable. The published guides above remain accessible.
        </aside>
      ) : null}

      <section className="space-y-3">
        <h2 className="mt-0 text-xl font-semibold text-slate-900">Explore more</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {guideLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/40 p-4 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
              <span className="block font-semibold text-slate-900">{link.title}</span>
              <span className="mt-1 block text-sm text-slate-600">{link.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
