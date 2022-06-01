export default {
	type: 'object',
	name: 'tableBlock',
	title: 'Table',
	fields: [
		{
			name: 'table',
			title: 'Table',
			type: 'table',
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
				subtitle: 'Table',
			};
		},
	},
};
