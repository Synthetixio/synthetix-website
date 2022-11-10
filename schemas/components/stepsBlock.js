export default {
	type: 'object',
	name: 'stepsBlock',
	title: 'Steps',
	initialValue: {
		style: 'black',
	},
	fields: [
		{
			title: 'Style',
			name: 'style',
			type: 'string',
			options: {
				list: [
					{ title: 'Black', value: 'black' },
					{ title: 'Pink Box', value: 'pink' },
				],
				layout: 'radio', // <-- defaults to 'dropdown'
			},
		},
		{
			title: 'Steps',
			name: 'steps',
			type: 'array',
			of: [
				{
					type: 'step',
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
			style: 'style',
		},
		prepare({ title, style }) {
			return {
				title: ` ${title}`,
				subtitle: `Steps - ${style} (style)`,
			};
		},
	},
};
