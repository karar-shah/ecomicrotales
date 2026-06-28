import Hero from "@/components/Nav/Hero";
import Link from "next/link";
import MicroStoriesList, { Post } from "@/components/MicroStoriesList";
import { sanityFetch } from "@/sanity/lib/live";
import { LATEST_POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data } = await sanityFetch({ query: LATEST_POSTS_QUERY });
  const posts = data as Post[];

  return (
    <main className="w-full bg-white">
      <Hero />
      <section className="max-w-7xl mx-auto px-10 py-20 text-brand-dark">
        <h2 className="text-4xl font-bold text-center mb-16">
          Latest Micro Stories
        </h2>
        <MicroStoriesList posts={posts} />

        <div className="flex justify-center mt-16">
          <Link
            href="/micro-stories"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors px-8 py-3 rounded-full font-semibold"
          >
            View All Stories
          </Link>
        </div>
      </section>
    </main>
  );
}
