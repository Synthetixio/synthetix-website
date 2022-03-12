import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
	name: 'buildCategory',
	title: 'Build Category',
	type: 'document',
	orderings: [orderRankOrdering],
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
		},
		orderRankField({ type: 'category', hidden: true }),
	],
};
