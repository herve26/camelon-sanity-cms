import section_global from './section.global';

export default {
	name: 'contactForm',
	type: 'object',
	title: 'Contact Form Section',
	fields: [
		...section_global,
		{
			title: 'Section Title',
			name: 'title',
			type: 'string'
		},
		{
			type: 'image',
			name: 'image',
			title: 'Section Image'
		}
	]
}