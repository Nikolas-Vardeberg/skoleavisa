import { defineType } from "sanity";
import { image } from "../objects/image.schema";



export const article = defineType({
    name: "article",
    type: "document",
    groups: [
        {
            name: "general",
            title: "Generelt"
        },
        {
			name: 'byline',
			title: 'Byline',
		},
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
        {
            title: "Ingress",
            name: "entry",
            type: "simpleRichText",
            group: "general",
        },
        {   
            name: "content",
            type: "richText",
            group: "general",
        },
        {
            name: "publishedAt",
            type: "datetime",
            title: "Pulisert",
            description: "Dato for publisering av artikkelen",
            group: "byline",
            initialValue: new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        },  
    ]
})