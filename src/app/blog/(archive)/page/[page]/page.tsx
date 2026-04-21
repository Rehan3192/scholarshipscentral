import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogArchiveView, {
  BLOG_PAGE_SIZE,
  BLOG_REVALIDATE_SECONDS,
  buildBlogArchivePath,
} from "../../../BlogArchiveView";
import {
  getWordPressPostsPage,
  isWordPressConfigured,
  type WordPressPostListItem,
} from "@/lib/wordpress";

type Props = {
  params: Promise<{ page: string }>;
};

export const dynamicParams = false;

function parseArchivePage(value: string) {
  if (!/^\d+$/.test(value)) return null;

  const parsed = Number.parseInt(value, 10);
  if (!Number.isFinite(parsed) || parsed < 2) return null;

  return parsed;
}

export async function generateStaticParams() {
  if (!isWordPressConfigured()) return [];

  try {
    const archive = await getWordPressPostsPage({
      page: 1,
      perPage: BLOG_PAGE_SIZE,
      revalidateSeconds: BLOG_REVALIDATE_SECONDS,
    });

    return Array.from(
      { length: Math.max(0, archive.totalPages - 1) },
      (_, index) => ({
        page: String(index + 2),
      }),
    );
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = parseArchivePage(page);

  if (!pageNumber) {
    return {
      title: "Blog",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `Blog - Page ${pageNumber}`,
    description: `Page ${pageNumber} of scholarship guides, hub pages, result updates, and application-focused articles from Scholarships Central.`,
    alternates: {
      canonical: buildBlogArchivePath(pageNumber),
    },
  };
}

export default async function BlogArchivePage({ params }: Props) {
  const { page } = await params;
  const pageNumber = parseArchivePage(page);

  if (!pageNumber || !isWordPressConfigured()) {
    notFound();
  }

  let posts: WordPressPostListItem[] = [];
  let totalPosts = 0;
  let totalPages = pageNumber;
  let loadError: string | null = null;

  try {
    const archive = await getWordPressPostsPage({
      page: pageNumber,
      perPage: BLOG_PAGE_SIZE,
      revalidateSeconds: BLOG_REVALIDATE_SECONDS,
    });

    posts = archive.posts;
    totalPosts = archive.totalPosts;
    totalPages = archive.totalPages;

    if (pageNumber > totalPages || posts.length === 0) {
      notFound();
    }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";

    if (message.includes("WordPress API error (400) for /posts")) {
      notFound();
    }

    loadError = message;
  }

  return (
    <BlogArchiveView
      configured
      currentPage={pageNumber}
      totalPages={totalPages}
      totalPosts={totalPosts}
      posts={posts}
      loadError={loadError}
    />
  );
}
