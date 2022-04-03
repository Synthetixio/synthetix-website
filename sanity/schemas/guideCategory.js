import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
	name: 'guideCategory',
	title: 'Guide Category',
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
		orderRankField({ type: 'category', hidden: true }),
	],
};
