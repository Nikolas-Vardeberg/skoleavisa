import { Image, RichtTextType } from "../root.types";



export type Article = {
    _id: string;
    _type: string;
    title: string;
    mainImage: Image;
    entry: RichtTextType;
    content: RichtTextType;
}