import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "next-sanity";
import { components } from "@/sanity/portableTextComponents";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12 max-w-[1270px]">
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
        {post?.body ? (
          <div className="prose max-w-none">
            <PortableText value={post.body} components={components} />
          </div>
        ) : null}
        <hr />
        <Link href="/posts" className="inline-block hover:underline">
          &larr; Return to catalog.
        </Link>
      </div>
    </main>
  );
}
