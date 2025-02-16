import { defineType } from 'sanity';

export const tag = defineType({
	name: 'tag',
	title: 'Tag',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Tittel',
            type: "string"
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'title',
		},
	},
});