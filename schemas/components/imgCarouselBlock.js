export default {
	type: 'object',
	name: 'imgCarouselBlock',
	title: 'Image Carousel',
	fields: [
		{
			title: 'Carousel Items',
			name: 'slides',
			type: 'array',
			of: [
				{
					type: 'imgCarousel',
				},
			],
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
				subtitle: 'Image Carousel',
			};
		},
	},
};
