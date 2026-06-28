import React from "react";
import CategoryList, { Category } from "@/components/CategoryList";
import PageHero from "@/components/Nav/PageHero";
import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORIES_QUERY } from "@/sanity/lib/queries";

export default async function CategoriesPage() {
  const { data } = await sanityFetch({ query: CATEGORIES_QUERY });
  const categories = data as Category[];

  return (
    <main className="w-full min-h-screen bg-[#eff1ed] text-neutral-900">
      <PageHero
        title="Categories"
        imageSrc="/category4.png"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Categories" }]}
      />

      <div className="max-w-7xl mx-auto px-10 py-24">
        {categories.length > 0 ? (
          <CategoryList categories={categories} />
        ) : (
          <div className="text-center text-neutral-500 py-20">
            No categories found.
          </div>
        )}
      </div>
    </main>
  );
}
