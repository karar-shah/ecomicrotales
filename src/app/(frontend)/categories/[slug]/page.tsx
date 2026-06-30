import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import PageHero from "@/components/Nav/PageHero";
import MicroStoriesList, { Post } from "@/components/MicroStoriesList";
import { Category } from "@/components/CategoryList";

interface CategoryDetail extends Omit<Category, "slug"> {
  slug: { current: string };
  posts?: Post[];
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await params;
  const { data } = await sanityFetch({
    query: CATEGORY_QUERY,
    params: slug,
  });

  const category = data as CategoryDetail | null;

  if (!category) {
    notFound();
  }

  const categoryImage = category.mainImage
    ? urlFor(category.mainImage).url()
    : "/category4.png";

  return (
    <main className="w-full min-h-screen bg-[#eff1ed] text-neutral-900">
      <PageHero
        title={category.title}
        imageSrc={categoryImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/categories" },
          { label: category.title },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-16">
        {/* Category Description / Intro */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-neutral-200/60 shadow-sm">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand"></span>
              <span className="text-sm font-semibold tracking-wide uppercase text-brand-dark/80">
                Explore Category
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark">
              {category.title}
            </h2>
            {category.description ? (
              <p className="text-base md:text-lg text-brand-dark/70 leading-relaxed">
                {category.description}
              </p>
            ) : (
              <p className="text-neutral-400 italic">
                No description available for this category yet.
              </p>
            )}
            <div className="pt-2">
              <Link
                href="/categories"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-[#3b7d20] transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back to All Categories</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-inner">
            {category.mainImage ? (
              <Image
                src={urlFor(category.mainImage).url()}
                alt={category.mainImage.alt || category.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            ) : (
              <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-400">
                <BookOpen size={48} />
              </div>
            )}
          </div>
        </section>

        {/* Associated Posts */}
        <section className="space-y-8">
          <div className="border-b border-neutral-200/80 pb-5">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-dark">
              Micro Stories in {category.title}
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Discover bite-sized ecological tales and thoughts.
            </p>
          </div>

          {category.posts && category.posts.length > 0 ? (
            <MicroStoriesList posts={category.posts} />
          ) : (
            <div className="text-center bg-white/50 border border-neutral-200/60 rounded-3xl py-20 text-neutral-500">
              No micro stories found in this category yet. Check back soon!
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
