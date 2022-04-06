export default {
	name: 'settings',
	title: 'Settings',
	type: 'document',
	fields: [
		{
			name: 'buidNavStarter',
			title: 'Build Navigation Starting Page',
			type: 'reference',
			to: [{ type: 'build' }],
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'guideLPBanner',
			title: 'Guide Landing Page Banner',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
	],
};
