import { groq } from "next-sanity";
import { IMAGE_QUERY } from "../image.queries";
import { RICH_TEXT_QUERY } from "../rich-text.queries";
import { TAGS_QUERY } from "../other/tag.queries";

const RAW_ARTICLE_QUERY = groq`{
    _id,
    _type,
    mainImage ${IMAGE_QUERY},
    entry[]${RICH_TEXT_QUERY},
    content[]${RICH_TEXT_QUERY},
    "slug": slug.current,
    publishedAt,
    title,
    tags[]-> ${TAGS_QUERY},
}`;

export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0] {
    ...${RAW_ARTICLE_QUERY},
    "related": *[_type == "article" && (!defined($slug) || slug.current != $slug) && count((tags[]._ref)[@ in ^.tags[]._ref]) > 0]{
            _id,
            _type,
            "slug": slug.current,
            title,
            mainImage ${IMAGE_QUERY},
            tags[]-> ${TAGS_QUERY},
            entry[] ${RICH_TEXT_QUERY},
            "tagCount": count((tags[]._ref)[@ in ^.tags[]._ref])
        }| order(tagCount desc, _createdAt desc) [0...4]
}`;


export const ARTICLES_QUERY = groq`*[_type == "article" && publishedAt < now()] ${RAW_ARTICLE_QUERY}`;
