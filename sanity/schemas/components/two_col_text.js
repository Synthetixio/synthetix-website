export default {
	type: 'object',
	name: 'two_Col_Text',
	title: 'Two Col Text',
	fields: [
		{
			name: 'subHeading',
			type: 'text',
			title: 'Sub Heading',
			//validation: Rule => Rule.required()
		},
		{
			title: 'Show Health Check Button?',
			name: 'healthCheck',
			type: 'boolean',
		},
		{
			title: 'Show Health Check Login Buttons?',
			name: 'healthCheckLogin',
			description: 'Note: If selected other button will not show',
			type: 'boolean',
		},
	],
	preview: {
		select: {
			title: 'heading',
			subtitle: 'label',
			disabled: 'disabled',
		},
		prepare({ title, disabled }) {
			return {
				title: `change here: ${disabled ? 'DISABLED' : title}`,
			};
		},
	},
};
