import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <div key={post._id} className="flex flex-col group">
          <Link
            href={`/micro-stories/${post.slug.current}`}
            className="relative h-64 mb-5 rounded-2xl overflow-hidden block"
          >
            {post.mainImage ? (
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.mainImage.alt || post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-white/50">
                No Image
              </div>
            )}

            {post.categories && post.categories.length > 0 && (
              <div className="absolute top-4 left-4 bg-black/45 backdrop-blur-md backdrop-saturate-150 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/15 shadow-sm">
                {post.categories[0]}
              </div>
            )}
          </Link>

          <Link href={`/micro-stories/${post.slug.current}`}>
            <h3 className="text-xl font-bold text-neutral-900 mb-5 group-hover:text-brand transition-colors line-clamp-2">
              {post.title}
            </h3>
          </Link>

          <hr className="mb-3 bg-neutral-200 border-0 h-px rounded-full" />

          <Link
            href={`/micro-stories/${post.slug.current}`}
            className="flex items-center gap-3 text-neutral-900 font-semibold group/btn mt-auto self-start"
          >
            Read More
            <span className="bg-brand text-black rounded-full w-8 h-8 flex items-center justify-center group-hover/btn:bg-brand/90 transition-colors">
              <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
