import React from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export type Post = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  categories: string[];
};

export default function MicroStoriesList({ posts }: { posts: Post[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link
          key={post._id}
          href={`/posts/${post.slug.current}`}
          className="flex flex-col group bg-white border border-neutral-200/60 rounded-3xl p-5 hover:shadow-xl hover:border-brand/40 transition-all duration-300 h-full"
        >
          <div className="relative h-56 mb-5 rounded-2xl overflow-hidden block bg-neutral-100">
            {post.mainImage ? (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-500">
                No Image
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-brand-dark/40 mb-3">
            {post.categories && post.categories.length > 0 && (
              <span className="text-[#3b7d20] bg-brand/15 px-2.5 py-0.5 rounded-full">
                {post.categories[0]}
              </span>
            )}
            <div className="flex items-center gap-1.5 ml-1">
              <Clock size={13} className="text-[#3b7d20]/75" />
              <span>{post._id ? (post._id.charCodeAt(post._id.length - 1) % 3) + 3 : 3} min read</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-neutral-900 mb-5 group-hover:text-[#3b7d20] transition-colors line-clamp-2 leading-snug">
            {post.title}
          </h3>

          <div className="flex items-center gap-2 mt-auto text-sm font-bold text-brand-dark group-hover:text-[#3b7d20] transition-colors pt-4 border-t border-neutral-100 w-full">
            <span>Read Full Story</span>
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
