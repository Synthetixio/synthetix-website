export default {
	type: 'object',
	name: 'introIconBlock',
	title: 'Intro Icon',
	fields: [
		{
			name: 'body',
			title: 'content',
			type: 'blockContent',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'iconText',
			title: 'Icon Text',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'iconLinkURL',
			title: 'External Icon Link URL',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'iconLinkText',
			title: 'External Icon Link Text',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'icon',
			title: 'Icon',
			type: 'image',
			validation: (Rule) => Rule.required(),
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
				subtitle: 'Intro Icon',
			};
		},
	},
};
