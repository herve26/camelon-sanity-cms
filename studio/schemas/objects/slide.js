export default {
	name: 'slide',
	type: 'object',
	title: 'Image Text Slide',
	fields: [
		{
			title: 'Slide Title',
			type: 'string',
			name: 'title'
		},
		{
			title: 'Slide Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Slide Text',
			name: 'text',
			type: 'simplePortableText'
		}
	]
}