import section_global from './section.global';

export default {
	title: 'Cards Section',
	name: 'cards',
	type: 'object',
	fields: [
		...section_global,
		{
			name: 'title',
			title: 'Section Title',
			type: 'string'
		},
		{
			name: 'cards',
			title: 'Sections Cards',
			type: 'array',
			of: [{type: 'card'}]
		}
	]
}