export default {
	name: 'contact',
	type: 'object',
	title: 'Contact Info',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Contact Title'
		},
		{
			name: 'info',
			type: 'array',
			title: 'Info',
			of: [{type: 'address'}, {type: 'phone'}, {type: 'whatsapp'}]
		}
	]
}