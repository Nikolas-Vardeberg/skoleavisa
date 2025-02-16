import { defineField } from "sanity";


export const tags = (options: { group?: string}) =>
    defineField({
        type: 'array',
		name: 'tags',
		title: 'Tags',
		of: [
			{
				type: 'reference',
				to: [{ type: 'tag' }],
			},
		],
		...options,
    })