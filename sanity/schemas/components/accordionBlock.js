export default {
	type: 'object',
	name: 'accordionBlock',
	title: 'Accordion',
	fields: [
		{
			name: 'body',
			title: 'Optional Intro Text',
			type: 'blockContent',
		},
		{
			title: 'Accordion items',
			name: 'accordions',
			type: 'array',
			of: [
				{
					type: 'accordion',
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
				subtitle: 'Accordion',
			};
		},
	},
};
