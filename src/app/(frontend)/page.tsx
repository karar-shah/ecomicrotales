import Hero from "@/components/Nav/Hero";
import Link from "next/link";
import MicroStoriesList, { Post } from "@/components/MicroStoriesList";
import CategoryList, { Category } from "@/components/CategoryList";
import { sanityFetch } from "@/sanity/lib/live";
import { LATEST_POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const { data: postsData } = await sanityFetch({ query: LATEST_POSTS_QUERY });
  const posts = postsData as Post[];

  // Fetch only top 3 categories for the home page
  const { data: categoriesData } = await sanityFetch({
    query: CATEGORIES_QUERY,
  });
  const categories = (categoriesData as Category[]).slice(0, 3);

  return (
    <main className="w-full bg-white">
      <Hero />
      <section className="bg-[#eff1ed] w-full py-24">
        <div className="max-w-7xl mx-auto px-10 text-brand-dark ">
          <h2 className="text-4xl font-bold text-center mb-16">
            Explore Categories
          </h2>
          <CategoryList categories={categories} />

          <div className="flex justify-center mt-12">
            <Link
              href="/categories"
              className="bg-brand text-brand-dark hover:bg-brand/90 transition-colors px-8 py-3 rounded-full font-semibold"
            >
              View All Categories
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-10 py-20 text-brand-dark">
        <h2 className="text-4xl font-bold text-center mb-16">
          Latest Micro Stories
        </h2>
        <MicroStoriesList posts={posts} />
      </section>
    </main>
  );
}
