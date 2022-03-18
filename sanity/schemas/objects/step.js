export default {
	name: 'step',
	title: 'Step',
	type: 'object',
	fields: [{ name: 'body', type: 'blockContent', title: 'Body' }],
	preview: {
		select: {
			blocks: 'body',
		},
		prepare(value) {
			const block = (value.blocks || []).find((block) => block._type === 'block');
			return {
				title: block
					? block.children
							.filter((child) => child._type === 'span')
							.map((span) => span.text)
							.join('')
					: 'No title',
			};
		},
	},
};
