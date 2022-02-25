export default {
	type: 'object',
	name: 'contentBlock',
	title: 'Standard Content Block',
	fields: [
		{
			name: 'body',
			title: 'Body',
			type: 'blockContent',
		},
	],
	preview: {
		select: {
			title: 'title',
			subtitle: 'label',
			disabled: 'disabled',
		},
		prepare({ title, disabled }) {
			return {
				title: ` ${disabled ? 'DISABLED - ' + title : title}`,
			};
		},
	},
};
