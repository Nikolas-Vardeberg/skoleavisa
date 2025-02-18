import { groq } from "next-sanity";

export const TAGS_QUERY = groq`{
    _id,
    _type,
    "title": title,
    "slug": coalesce(slug.current, "page-not-found")
}`;

export const TAG_QUERY = groq`*[_type == "tag" && slug.current == $slug][0] {
    _id,
    _type,
    title,
    "slug": coalesce(slug.current, "page-not-found")
}`;