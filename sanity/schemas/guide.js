import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
	name: 'guide',
	title: 'Guide Documents',
	type: 'document',
	orderings: [orderRankOrdering],
	initialValue: () => ({
		publishedAt: new Date().toISOString(),
	}),
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'subTitle',
			title: 'Sub Title',
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
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: [{ type: 'guideCategory' }],
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'pageBuilder',
			type: 'pageBuilder',
			title: 'Page Builder',
			validation: (Rule) => Rule.required(),
		},
		orderRankField({ type: 'category', hidden: true }),
	],
	orderings: [
		{
			title: 'Category',
			name: 'category',
			by: [{ field: 'category', direction: 'desc' }],
		},
	],

	preview: {
		select: {
			title: 'title',
			subtitle: 'category.title',
		},
	},
};
