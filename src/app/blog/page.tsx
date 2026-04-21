import type { Metadata } from "next";

import {
  getWordPressPostsPage,
  isWordPressConfigured,
  type WordPressPostListItem,
} from "@/lib/wordpress";
import BlogArchiveView, {
  BLOG_PAGE_SIZE,
  BLOG_REVALIDATE_SECONDS,
} from "./BlogArchiveView";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Scholarship guides, hub pages, result updates, and application-focused articles from Scholarships Central.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogPage() {
  const configured = isWordPressConfigured();

  let posts: WordPressPostListItem[] = [];
  let loadError: string | null = null;
  let totalPosts = 0;
  let totalPages = 1;

  if (configured) {
    try {
      const archive = await getWordPressPostsPage({
        page: 1,
        perPage: BLOG_PAGE_SIZE,
        revalidateSeconds: BLOG_REVALIDATE_SECONDS,
      });

      posts = archive.posts;
      totalPosts = archive.totalPosts;
      totalPages = archive.totalPages;
    } catch (err) {
      loadError = err instanceof Error ? err.message : "Unknown error";
      posts = [];
    }
  }

  return (
    <BlogArchiveView
      configured={configured}
      currentPage={1}
      totalPages={totalPages}
      totalPosts={totalPosts}
      posts={posts}
      loadError={loadError}
    />
  );
}
