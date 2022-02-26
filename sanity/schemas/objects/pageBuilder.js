export default {
	name: 'pageBuilder',
	type: 'array',
	title: 'Page Builder',
	of: [
		{
			type: 'pageBuilderColumns',
			title: 'Columns',
		},
		{ type: 'contentBlock' },
		{ type: 'accordionBlock' },
		{ type: 'mainImage' },
	],
};
