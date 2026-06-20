import type { Metadata } from "next";
import Link from "next/link";
import { PostsArchive } from "@/components/resources/posts-archive";

export const metadata: Metadata = {
  title: "News & Blogs",
  description:
    "Stories, updates, reflections, and mental health education from Bhaavam Foundation.",
};

export default function NewsAndBlogsPage() {
  return (
    <main id="main-content">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <h1 className="font-display text-4xl font-semibold text-ink sm:text-5xl">
          News & Blogs
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-muted">
          Explore articles, campaign stories, reflections, and educational
          resources from Bhaavam Foundation.
        </p>

        <PostsArchive />
      </div>

      <p className="mx-auto max-w-7xl px-4 pb-12 text-center sm:px-6">
        <Link href="/" className="text-sm text-blush-700 hover:underline">
          ← Back to Home
        </Link>
      </p>
    </main>
  );
}
