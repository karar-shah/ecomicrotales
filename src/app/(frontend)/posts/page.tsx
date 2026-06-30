import React from "react";
import MicroStoriesList, { Post } from "@/components/MicroStoriesList";
import { sanityFetch } from "@/sanity/lib/live";
import { PAGINATED_POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import PageHero from "@/components/Nav/PageHero";

export default async function PostsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const limit = 6;
  const start = (page - 1) * limit;
  const end = start + limit;

  // We fetch one extra to see if there is a next page
  const { data } = await sanityFetch({
    query: PAGINATED_POSTS_QUERY(start, end + 1),
  });

  const posts = data as Post[];
  console.log("posts/slug/ [posts]", posts);

  const hasNextPage = posts.length > limit;
  const displayedPosts = posts.slice(0, limit);

  return (
    <main className="w-full min-h-screen bg-[#eff1ed] text-neutral-900">
      <PageHero
        title="Our Micro Stories"
        imageSrc="/category4.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <div className="max-w-7xl mx-auto px-10 py-24">
        {displayedPosts.length > 0 ? (
          <MicroStoriesList posts={displayedPosts} />
        ) : (
          <div className="text-center text-neutral-500 py-20">
            No stories found.
          </div>
        )}

        <div className="flex justify-center items-center gap-6 mt-16">
          {page > 1 ? (
            <Link
              href={`/posts?page=${page - 1}`}
              className="bg-brand text-black font-semibold px-6 py-2.5 rounded-full hover:bg-brand/90 transition-colors"
            >
              &larr; Previous
            </Link>
          ) : (
            <div className="px-6 py-2.5 opacity-50 cursor-not-allowed">
              &larr; Previous
            </div>
          )}

          <span className="text-neutral-600 font-medium">Page {page}</span>

          {hasNextPage ? (
            <Link
              href={`/posts?page=${page + 1}`}
              className="bg-brand text-black font-semibold px-6 py-2.5 rounded-full hover:bg-brand/90 transition-colors"
            >
              Next &rarr;
            </Link>
          ) : (
            <div className="px-6 py-2.5 opacity-50 cursor-not-allowed">
              Next &rarr;
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
