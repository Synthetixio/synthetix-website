export default {
	type: 'object',
	name: 'tagsBlock',
	title: 'Tags',
	fields: [],
	preview: {
		select: {
			title: 'title',
			disabled: 'disabled',
		},
		prepare({ title, disabled }) {
			return {
				title: ` ${disabled ? 'DISABLED - ' + title : title}`,
				subtitle: 'Tags',
			};
		},
	},
};
