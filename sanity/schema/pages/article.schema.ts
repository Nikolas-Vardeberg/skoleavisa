import { defineType } from "sanity";
import { image } from "../objects/image.schema";



export const article = defineType({
    name: "article",
    type: "document",
    groups: [
        {
            name: "general",
            title: "Generelt"
        }
    ],
    fields: [
        {
            name: "title",
            type: "string",
            title: "Tittel på artikel"
        },
        {
            type: 'slug',
            name: 'slug',
            title: 'Slug',
            description: 'Brukes som unik identifikator i url. Kan kun inneholde bokstaver, tall, understrek og bindestrek.',
            options: {
                source: "title",
                maxLength: 155,
            }
        },
        image({
            name: "mainImage",
            group: "general"
        }),
    ]
})