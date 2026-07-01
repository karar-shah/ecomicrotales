import Hero from "@/components/Nav/Hero";
import Link from "next/link";
import MicroStoriesList, { Post } from "@/components/MicroStoriesList";
import CategoryList, { Category } from "@/components/CategoryList";
import VideoCarousel, { VideoPost } from "@/components/VideoCarousel";
import { sanityFetch } from "@/sanity/lib/live";
import {
  LATEST_POSTS_QUERY,
  CATEGORIES_QUERY,
  VIDEOS_QUERY,
} from "@/sanity/lib/queries";
import { ArrowRight, Sparkles } from "lucide-react";

export default async function Page() {
  const { data: postsData } = await sanityFetch({ query: LATEST_POSTS_QUERY });
  const posts = postsData as Post[];

  const { data: categoriesData } = await sanityFetch({
    query: CATEGORIES_QUERY,
  });
  const categories = (categoriesData as Category[]).slice(0, 3);

  const { data: videosData } = await sanityFetch({ query: VIDEOS_QUERY });
  const videos = (videosData as VideoPost[]) ?? [];

  return (
    <main className="w-full bg-white">
      <Hero />
      {/* Video Section */}
      <section className="w-full bg-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="mx-auto max-w-7xl px-10 text-brand-dark relative z-10">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl text-start">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/20 px-4 py-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#3b7d20]">
                  Watch & Learn
                </span>
              </div>
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-brand-dark">
                Featured Videos
              </h2>
              <p className="text-base text-brand-dark/70 md:text-lg">
                Discover short stories and practical ideas from our community
                through video.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-full border border-brand/20 bg-white/70 px-4 py-3 shadow-sm backdrop-blur">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/20 text-[#3b7d20]">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-dark">Fresh perspectives</p>
                <p className="text-xs text-brand-dark/60">Short, thoughtful stories</p>
              </div>
            </div>
          </div>

          <VideoCarousel videos={videos} />
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full bg-[linear-gradient(135deg,#fcfcfa_0%,#f4f6ef_45%,#f9f8f2_100%)] py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(137,234,95,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,125,32,0.06),transparent_35%)]" />
        <div className="max-w-7xl mx-auto px-10 text-brand-dark">
          <div className="text-start max-w-3xl  mb-16">
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-1.5 rounded-full mb-4">
              {/* <span className="w-2 h-2 rounded-full bg-[#89ea5f]"></span> */}
              <span className="text-xs font-bold tracking-wider uppercase text-[#3b7d20]">
                Explore Topics
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-brand-dark mb-4">
              Stories by Category
            </h2>
            <p className="text-brand-dark/70 text-base md:text-lg">
              Delve into our curated environmental themes from wild life
              conservation to sustainable living written to inspire green
              habits.
            </p>
          </div>

          <CategoryList categories={categories} />

          <div className="flex justify-center mt-16">
            <Link
              href="/categories"
              className="inline-flex items-center gap-2 bg-brand-dark text-white font-bold pl-8 pr-6 py-4 rounded-full hover:bg-brand-dark/95 transition-all shadow-md transform hover:-translate-y-0.5 cursor-pointer"
            >
              View All Categories
              <span className="bg-brand text-black rounded-full w-7 h-7 flex items-center justify-center ml-2">
                <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Micro Stories Section */}
      <section className="max-w-7xl mx-auto px-10 py-24 text-brand-dark ">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-neutral-200/60">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand/20 border border-brand/30 px-4 py-1.5 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-brand"></span>
              <span className="text-xs font-bold tracking-wider uppercase text-[#3b7d20]">
                Latest Tales
              </span>
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-brand-dark mb-4">
              Latest Micro Stories
            </h2>
            <p className="text-brand-dark/70 text-base md:text-lg">
              Bite-sized narratives detailing nature conservation, environmental
              struggles, and ecological hope.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/posts"
              className="inline-flex items-center gap-2 bg-brand text-black font-bold pl-6 pr-4 py-3 rounded-full hover:bg-brand/90 transition-all cursor-pointer"
            >
              Read All Stories
              <span className="bg-black text-brand rounded-full w-6 h-6 flex items-center justify-center ml-1.5">
                <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>

        <MicroStoriesList posts={posts} />
      </section>
    </main>
  );
}
