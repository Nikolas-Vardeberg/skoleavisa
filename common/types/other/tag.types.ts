import { Article } from "../pages/article.types";


export type Tag = {
    title: string;
    slug: string;
}

export type Tags = {
    title: string;
    slug: string;
    related?: Article;
}