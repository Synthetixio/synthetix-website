export default {
	type: 'object',
	name: 'videoBlock',
	title: 'Video Embed',
	fields: [
		{
			name: 'url',
			title: 'Video URL',
			type: 'string',
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
				subtitle: 'Video Embed',
			};
		},
	},
};
