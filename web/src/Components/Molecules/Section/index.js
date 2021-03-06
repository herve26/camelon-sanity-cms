import styles from './Section.module.scss';
import * as sections from "#Sections/index";

const appearances = {
	default: styles.appearance_default,
	primary: styles.appearance_primary,
	secondary: styles.appearance_secondary
}

export default function Section({title, _type, appearance='default', half, id, translation, ...content}){
	const Content = sections[_type]
	
	return (
		<section className={styles.container} id={id}>
			<div className={styles.title_container}>
				<h2 className={styles.title}>{title}</h2>
				<div className={`${styles.title_bar} ${appearance === 'primary' ? styles.second_bar : ''}`}/>
			</div>
			<div className={`${styles.content}`}>
				<Content translation={translation} {...content}/>
			</div>
		</section>
	)
}