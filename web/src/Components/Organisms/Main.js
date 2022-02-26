import Section from '#Molecules/Section';

export default function({sections}){
	return(
		<main>
		{sections.map(sec => <Section key={sec._key} {...sec}/>)}
		</main>
	)
}