export default {
	name: 'pageBuilder',
	type: 'array',
	title: 'Page Builder',
	of: [
		{ type: 'contentBlock' },
		{ type: 'two_Col_Text' },
		{
			type: 'pageBuilderColumns',
			title: 'Columns',
		},
	],
};
