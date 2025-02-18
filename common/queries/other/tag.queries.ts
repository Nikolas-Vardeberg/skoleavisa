import { groq } from "next-sanity";
import { IMAGE_QUERY } from "../image.queries";
import { RICH_TEXT_QUERY } from "../rich-text.queries";

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
    "slug": coalesce(slug.current, "page-not-found"),
    "related": *[_type == "article" && references(^._id)]{
        _id,
        _type,
        "slug": slug.current,
        title,
        tags[]-> ${TAGS_QUERY},
        mainImage ${IMAGE_QUERY},
        entry[] ${RICH_TEXT_QUERY},
    } | order(_createdAt desc) [0...3]
}`;