import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
	name: 'tag',
	title: 'Tag',
	type: 'document',
	orderings: [orderRankOrdering],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
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
		{
			name: 'color',
			title: 'Color',
			type: 'color',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'introText',
			title: 'Intro Text',
			type: 'text',
			validation: (Rule) => Rule.required().min(10).max(160),
		},
		orderRankField({ type: 'tag', hidden: true }),
	],
};
