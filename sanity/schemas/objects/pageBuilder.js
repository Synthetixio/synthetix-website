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
		{ type: 'stepsBlock' },
		{ type: 'accordionBlock' },
		{ type: 'imgCarouselBlock' },
		{ type: 'mainImage' },
		{ type: 'videoBlock' },
		{ type: 'tableBlock' },
		{ type: 'introIconBlock' },
	],
};
