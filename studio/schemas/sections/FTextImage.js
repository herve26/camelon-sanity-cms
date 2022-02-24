import section_global from './section.global';

export default {
	name: 'fTextImage',
	type: 'object',
	title: 'Text and Image Section',
	fields: [
		...section_global,
		{
			title: 'Section Title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Section Image',
			name: 'image',
			type: 'image'
		},
		{
			title: 'Section Text',
			name: 'text',
			type: 'simplePortableText'
		}
	]
}