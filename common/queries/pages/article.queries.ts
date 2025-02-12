import { groq } from "next-sanity";
import { IMAGE_QUERY } from "../image.queries";
import { RICH_TEXT_QUERY } from "../rich-text.queries";

const RAW_ARTICLE_QUERY = groq`{
    _id,
    _type,
    mainImage ${IMAGE_QUERY},
    entry[]${RICH_TEXT_QUERY},
    content[]${RICH_TEXT_QUERY},
    "slug": slug.current,
    publishedAt,
    title,
}`;

export const ARTICLE_QUERY = groq`*[_type == "article" && slug.current == $slug][0] ${RAW_ARTICLE_QUERY}`;


export const ARTICLES_QUERY = groq`*[_type == "article" && publishedAt < now()] ${RAW_ARTICLE_QUERY}`;
