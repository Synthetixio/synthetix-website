export default {
	name: 'pageBuilderColumns',
	title: 'Columns',
	type: 'object',
	fields: [
		{
			name: 'columns',
			title: 'Columns',
			type: 'components',
		},
	],
	preview: {
		select: {
			columns: 'columns',
		},
		prepare({ columns = [] }) {
			const titles = [];
			columns.forEach((col) => titles.push(col.title));
			return {
				title: titles.join(', '),
				subtitle: columns.length === 1 ? `1 Column` : `${columns.length} Columns`,
			};
		},
	},
	//validation: (Rule) => Rule.required().min(2),
};
