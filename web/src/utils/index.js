export const resolve_cta = (cta) => {
	const link = 
	cta.anchor 
	? `#${cta.anchor.Slug}` 
	: cta.route 
	? `${cta.route.slug.current}` 
	: cta.link
	? cta.link
	: ''

	return cta.params ? `?query=${cta.params}${link}` : link 
}