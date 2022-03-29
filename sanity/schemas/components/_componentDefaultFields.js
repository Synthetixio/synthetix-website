export default [
	{
		type: 'boolean',
		name: 'disabled',
	},
	{
		name: 'title',
		type: 'string',
		title: 'CMS Title',
		validation: (Rule) => Rule.required(),
	},
	// {
	//   name: 'background',
	//   type: 'object',
	//   fields: [{
	//     name: 'inverted',
	//     type: 'boolean'
	//   }]
	// }
	// {
	//   title: 'Plug padding',
	//   description: 'Will give the plug padding according to root font size. (rem)',
	//   name: 'padding',
	//   type: 'object',
	//   fields: [
	//     {
	//       title: 'top',
	//       name: 'top',
	//       type: 'number'
	//     },
	//     {
	//       title: 'bottom',
	//       name: 'bottom',
	//       type: 'number'
	//     }
	//   ]
	// }
];
