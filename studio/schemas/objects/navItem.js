import sanityClient from 'part:@sanity/base/client';
import AsyncSelect from '../component/customList';

async function getIds(){
	const query = '*[_type == "route"][0]{page->{content[]{"title": id, "value": id}}}'
	return sanityClient.fetch(query, {}).then(result => {
		return result.page.content
	})
}

export default {
	name: 'navItem',
	type: 'object',
	title: 'Navigation Item',
	fields: [
		{
			name: 'title',
			type: 'string',
			title: 'Display Name of the Link'
		},
		{
			name: 'Slug',
			type: 'string',
			title: 'Slug for Link',
			options: {
				fetcher: getIds,
			},
			inputComponent: AsyncSelect
		}
	]
}