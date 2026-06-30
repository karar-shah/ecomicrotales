import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PostDetail {
  title: string | null;
  body: any;
  mainImage?: {
    asset?: any;
    alt?: string;
    _type: "image";
  } | null;
  author?: {
    name: string;
    slug?: { current: string };
    image?: any;
    bio?: any;
  } | null;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = await params;
  console.log("/frontend/posts/[slug]", slug);
  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: slug,
  });

  const post = data as PostDetail | null;

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12 max-w-[1270px] md:mt-20">
      {post?.mainImage ? (
        <Image
          className="max-w-[1270px] w-full aspect-2/1 object-cover rounded-2xl shadow-lg mx-auto"
          src={urlFor(post.mainImage).quality(90).auto("format").url()}
          alt={post?.mainImage?.alt || ""}
          width={1270}
          height={635}
          sizes="(max-width: 768px) 100vw, (max-width: 1270px) 100vw, 1270px"
          priority
        />
      ) : null}

      <div className="max-w-4xl w-full space-y-6 ">
        <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
        
        {post?.author ? (
          <div className="flex items-center gap-3 border-b border-neutral-100 pb-4">
            <Link
              href={`/authors/${post.author.slug?.current}`}
              className="flex items-center gap-3 group"
            >
              {post.author.image ? (
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-neutral-200">
                  <Image
                    src={urlFor(post.author.image).width(80).height(80).url()}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark/50 text-sm font-bold border border-neutral-200">
                  {post.author.name?.charAt(0)}
                </div>
              )}
              <div>
                <p className="text-sm font-bold text-neutral-900 group-hover:text-[#3b7d20] transition-colors">
                  By {post.author.name}
                </p>
                <p className="text-xs text-neutral-500">Eco Contributor</p>
              </div>
            </Link>
          </div>
        ) : null}

        {post?.body ? (
          <div className="prose max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
        ) : null}

        {post?.author ? (
          <div className="bg-white border border-neutral-200/60 p-6 md:p-8 rounded-3xl mt-12 flex flex-col md:flex-row gap-6 items-start md:items-center">
            {post.author.image ? (
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 border border-neutral-200 shadow-sm">
                <Image
                  src={urlFor(post.author.image).width(160).height(160).url()}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark/50 shrink-0 text-xl font-bold border border-neutral-200">
                {post.author.name?.charAt(0)}
              </div>
            )}
            <div className="space-y-3">
              <div>
                <h3 className="text-xl font-extrabold text-neutral-900">
                  About {post.author.name}
                </h3>
                <p className="text-xs font-semibold text-[#3b7d20] uppercase tracking-wider mt-0.5">
                  Author & Climate Warrior
                </p>
              </div>
              {post.author.bio ? (
                <div className="text-sm md:text-base text-brand-dark/70 leading-relaxed max-w-2xl">
                  <PortableText value={post.author.bio} components={components} />
                </div>
              ) : null}
              <div className="pt-2">
                <Link
                  href={`/authors/${post.author.slug?.current}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-dark hover:text-[#3b7d20] transition-colors"
                >
                  <span>View all stories by {post.author.name}</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <hr />
        <Link
          href="/posts"
          className="inline-flex items-center gap-3 text-brand-dark/80 hover:text-brand-dark font-semibold transition-colors duration-300 group mt-4"
        >
          <span className="bg-brand text-black rounded-full w-8 h-8 flex items-center justify-center transition-transform group-hover:-translate-x-1">
            <ArrowLeft size={16} />
          </span>
          Return to catalog
        </Link>
      </div>
    </main>
  );
}
