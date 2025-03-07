import { groq } from 'next-sanity';
import { TAGS_QUERY } from './other/tag.queries';

export const SEARCH_LIMIT = 5;

const SEARCH_PAGE_QUERY = groq`{
    _id,
    title,
    _type,
    _createdAt,
    mainImage {
        ...
    },
    seo,
    "slug": coalesce(slug.current, "page-not-found"),
    tags[]-> ${TAGS_QUERY}
}`;

export const searchQuery = groq`*[
    (_type == "article" && publishedAt < now())
    && [title, ...string::split(pt::text(content), " "), slug.current] match $q
]${SEARCH_PAGE_QUERY}`;

export const rawSearchQuery = groq`*[
    (_type == "article" && publishedAt < now()) 
    && [title, ...string::split(pt::text(content), " "), slug.current] match $q
]`;

export const searchQuerySimpleWLimit = groq`{
    "items": ${rawSearchQuery}[$skip...$limit]${SEARCH_PAGE_QUERY},
    "count": count(${rawSearchQuery})
}`;