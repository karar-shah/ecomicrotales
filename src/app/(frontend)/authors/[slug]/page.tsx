import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, PenTool } from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import { AUTHOR_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import PageHero from "@/components/Nav/PageHero";
import MicroStoriesList, { Post } from "@/components/MicroStoriesList";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";

interface AuthorDetail {
  _id: string;
  name: string;
  image?: any;
  bio?: any;
  posts?: Post[];
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await params;
  const { data } = await sanityFetch({
    query: AUTHOR_QUERY,
    params: slug,
  });

  const author = data as AuthorDetail | null;

  if (!author) {
    notFound();
  }

  const authorHeroImage = author.image
    ? urlFor(author.image).url()
    : "/about-us6.jpg";

  return (
    <main className="w-full min-h-screen bg-[#eff1ed] text-neutral-900">
      <PageHero
        title={author.name}
        imageSrc={authorHeroImage}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Authors" },
          { label: author.name },
        ]}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24 space-y-16">
        {/* Author Bio Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 md:p-12 rounded-3xl border border-neutral-200/60 shadow-sm">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand/15 border border-brand/30 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-brand"></span>
              <span className="text-sm font-semibold tracking-wide uppercase text-brand-dark/80">
                Author Profile
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-brand-dark">
              {author.name}
            </h2>
            <div className="text-xs font-semibold text-[#3b7d20] uppercase tracking-wider -mt-4">
              Climate Warrior & Contributor
            </div>

            {author.bio ? (
              <div className="prose max-w-none text-brand-dark/85 leading-relaxed">
                <PortableText value={author.bio} components={components} />
              </div>
            ) : (
              <p className="text-neutral-400 italic">
                No bio available for this author yet.
              </p>
            )}

            <div className="pt-4">
              <Link
                href="/posts"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-dark hover:text-[#3b7d20] transition-colors"
              >
                <ArrowLeft size={16} />
                <span>Back to Stories</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-64 md:h-80 w-full overflow-hidden rounded-2xl bg-neutral-100 shadow-inner flex items-center justify-center border border-neutral-200">
            {author.image ? (
              <Image
                src={urlFor(author.image).width(600).height(600).url()}
                alt={author.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark/40 text-4xl font-bold border-2 border-neutral-200">
                {author.name.charAt(0)}
              </div>
            )}
          </div>
        </section>

        {/* Associated Posts */}
        <section className="space-y-8">
          <div className="border-b border-neutral-200/80 pb-5">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-brand-dark">
              Micro Stories by {author.name}
            </h2>
            <p className="text-neutral-500 text-sm mt-1">
              Read all bite-sized ecological tales written by this author.
            </p>
          </div>

          {author.posts && author.posts.length > 0 ? (
            <MicroStoriesList posts={author.posts} />
          ) : (
            <div className="text-center bg-white/50 border border-neutral-200/60 rounded-3xl py-20 text-neutral-500">
              No micro stories found by this author yet. Check back soon!
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
