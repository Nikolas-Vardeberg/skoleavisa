import { BasePage, AvisaImage, RichtTextType, SanityContentTypeBase } from "../root.types";


export type Article = BasePage & {
    publishedAt: Date;
    entry: RichtTextType;
    content: RichtTextType;
    mainImage: AvisaImage;
} & SanityContentTypeBase<'article'>;