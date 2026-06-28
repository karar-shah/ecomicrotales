import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export type Category = {
  _id: string;
  title: string;
  slug: { current: string };
  description?: string;
  mainImage?: any;
};

export default function CategoryList({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Link
          key={category._id}
          href={`/categories/${category.slug.current}`}
          className="flex flex-col group rounded-2xl overflow-hidden  bg-white dark:bg-[#222929] hover:shadow-lg transition-shadow"
        >
          <div className="relative h-48 w-full overflow-hidden">
            {category.mainImage ? (
              <Image
                src={urlFor(category.mainImage).url()}
                alt={category.mainImage.alt || category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
                No Image
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col items-center text-center grow">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 group-hover:text-brand transition-colors">
              {category.title}
            </h3>

            {category.description ? (
              <p className="text-neutral-600 dark:text-neutral-400 leading-5 inverted-triangle-clamp text-base">
                {category.description.length > 80
                  ? `${category.description.slice(0, 80).trim()}...`
                  : category.description}
              </p>
            ) : (
              <p className="text-neutral-400 italic text-base leading-5">
                No description available.
              </p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
