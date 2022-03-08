import Section from '#Molecules/Section';


export default function Main({sections, translation}){
	return(
		<main>
			{sections.map(sec => <Section key={sec._key} translation={translation[sec._type]} {...sec}/>)}
		</main>
	)
}