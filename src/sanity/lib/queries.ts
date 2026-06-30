import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage
}`);

export const LATEST_POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
  _id,
  title,
  slug,
  mainImage,
  "categories": categories[]->title
}`);

export const PAGINATED_POSTS_QUERY = (start: number, end: number) => `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[${start}...${end}] {
  _id,
  title,
  slug,
  mainImage,
  "categories": categories[]->title
}`;

export const CATEGORIES_QUERY = defineQuery(`*[_type == "category" && defined(slug.current)] | order(_createdAt asc) {
  _id,
  title,
  slug,
  description,
  mainImage
}`);

export const CATEGORY_QUERY = defineQuery(`*[_type == "category" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  description,
  mainImage,
  "posts": *[_type == "post" && references(^._id) && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    "categories": categories[]->title
  }
}`);

