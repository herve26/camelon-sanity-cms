import section_global from './section.global';

export default {
	name: 'imageTextCarousel',
	type: 'object',
	title: 'Image Text Carouse',
	fields: [
		...section_global,
		{
			title: 'Section Title',
			name: 'title',
			type: 'string'
		},
		{
			title: 'Slides',
			name: 'slides',
			type: 'array',
			of: [{type: 'slide'}]
		}
	]
}