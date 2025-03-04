import { Article } from "../pages/article.types";
import { RichtTextType } from "../root.types";


export type Tag = {
    title: string;
    slug: string;
    description: RichtTextType;
}

export type Tags = {
    title: string;
    slug: string;
    description: RichtTextType;
    related?: Article;
}