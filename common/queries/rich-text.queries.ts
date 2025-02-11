import { groq } from "next-sanity";
import { IMAGE_QUERY } from "../queries/image.queries";


export const RICH_TEXT_QUERY = groq`{
    ...,
    _type,
    _type == "image" => ${IMAGE_QUERY},
}`