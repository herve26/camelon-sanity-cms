import styles from './Section.module.scss';
import * as sections from "#Sections/index";

const appearances = {
	default: styles.appearance_default,
	primary: styles.appearance_primary,
	secondary: styles.appearance_secondary
}

export default function Section({title, _type, appearance='default', half, id, ...content,}){
	const Content = sections[_type]
	
	return (
		<section className={styles.container} id={id}>
			<div className={styles.title_container}>
				<h3 className={styles.title}>{title}</h3>
				<div className={styles.title_bar}/>
			</div>
			<div className={`${styles.content}`}>
				<Content {...content}/>
				<div className={`${styles.appearance} ${appearances[appearance]} ${half ? styles.half : ''}`}/>
			</div>
		</section>
	)
}