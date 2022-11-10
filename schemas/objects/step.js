export default {
	name: 'step',
	title: 'Step',
	type: 'object',
	fields: [
		{
			title: 'Layers',
			name: 'layers',
			type: 'array',
			description:
				'If using layers then all steps need to have at least one layer, else all steps need to not have a layer.',
			of: [{ type: 'string' }],
			options: {
				layout: 'tags',
			},
		},
		{ name: 'body', type: 'blockContent', title: 'Body' },
	],
	preview: {
		select: {
			blocks: 'body',
			layers: 'layers',
		},
		prepare(value) {
			const block = (value.blocks || []).find(block => block._type === 'block');
			const layers = value.layers || null;
			return {
				title: block
					? block.children
							.filter(child => child._type === 'span')
							.map(span => span.text)
							.join('')
					: 'No title',
				subtitle: layers
					? layers.map(item => `${item}, `).join('')
					: '*** No Layer Entered',
			};
		},
	},
};
