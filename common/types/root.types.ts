import { SanityDocument } from "next-sanity";
import { Article } from "./pages/article.types";


export type Override<T, U> = Omit<T, keyof U> & U;
export type Nullable<T> = T | null;


// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export type RichtTextType = any[];

export type AvisaImage = {
    _type: "image";
    alt: string;
}

export type Page = Article;

export type BasePage = {
    _id: string;
	_type: string;
	_createdAt: string;

	title: string;
    publishedAt: string;
	slug: string;
}

export type SanityContentTypeBase<T extends string> = Override<
	SanityDocument,
	{
		_type: T;
	}
>;