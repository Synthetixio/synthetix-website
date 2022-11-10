export default {
	type: 'object',
	name: 'guideCarouselBlock',
	title: 'Guide Carousel',
	fields: [
		{
			title: 'Guides',
			name: 'guides',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'guide' } }],
			validation: (Rule) => Rule.unique().required().min(4).max(12),
		},
	],
	preview: {
		select: {
			title: 'title',
			disabled: 'disabled',
		},
		prepare({ title, disabled }) {
			return {
				title: ` ${disabled ? 'DISABLED - ' + title : title}`,
				subtitle: 'Guide Carousel',
			};
		},
	},
};
