import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list';

export default {
	name: 'build',
	title: 'Build Documents',
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
			name: 'introText',
			title: 'Intro Text',
			type: 'text',
			validation: (Rule) => Rule.required().min(10).max(160),
		},
		/* {
		{
			name: 'author',
			title: 'Author',
			type: 'reference',
			to: { type: 'author' },
		},
			name: 'mainImage',
			title: 'Main image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}, */
		{
			name: 'category',
			title: 'Category',
			type: 'reference',
			to: [{ type: 'buildCategory' }],
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
