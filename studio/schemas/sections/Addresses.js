import LeafletGeopointInput from 'sanity-plugin-leaflet-input';
import section_global from './section.global';

export default {
	name: 'addresses',
	title: 'Addresses Section',
	type: 'object',
	fields: [
		...section_global,
		{
			title: 'Section Title',
			name: 'title',
			type: 'string', 
		},
		{
			title: 'Geo Location',
			name: 'geoLoc',
			type: 'geopoint',
			inputComponent: LeafletGeopointInput
		},
		{
			title: 'Contacts',
			name: 'addresses',
			type: 'array',
			of:[{type: 'contact'}]
		}
	]
}