export default {
	name: 'settings',
	title: 'Settings',
	type: 'document',
	fields: [
		{
			name: 'guideLPBanner',
			title: 'Guide Landing Page Banner',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
		},
		{
			name: 'guideLPBuilder',
			type: 'pageBuilder',
			title: 'Guide Landing Page Builder',
			validation: (Rule) => Rule.required(),
		},
	],
	preview: {
		select: {
			title: 'Settings',
			subtitle: 'Settings for guide and build CMS pages',
		},
	},
};
