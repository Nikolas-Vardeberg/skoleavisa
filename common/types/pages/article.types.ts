import { BasePage, AvisaImage, RichtTextType, SanityContentTypeBase, Tag } from "../root.types";


export type Article = BasePage & {
    publishedAt: Date;
    entry: RichtTextType;
    content: RichtTextType;
    mainImage: AvisaImage;
    tags?: Tag[];
    related?: Article[];
} & SanityContentTypeBase<'article'>;