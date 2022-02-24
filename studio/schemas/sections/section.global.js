export default [
	{
		name: "id",
		title: "Section ID",
		type: 'string'	
	},
	{
		name: "appearance",
		title: "Section Appearance",
		type: 'string',
		initialValue: 'default',
		options: {
			list: [
				{ title: 'Default', value: 'default' },
				{ title: 'Primary', value: 'primary' },
				{ title: 'Secondary', value: 'secondary'}
			]
		}
	},
	{
		name: 'half',
		title: 'Half Height Section',
		type: 'boolean',
		initialValue: false
	}
]