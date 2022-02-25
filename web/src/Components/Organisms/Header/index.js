import Hero from '#Molecules/Hero';
import styles from './Header.module.css';
import Navigation from '#Molecules/Navigation';

export default function Header({hero, navigation}){
	console.log(navigation)
	return (
		<header className={styles.container}>
			<Hero
				nav={<Navigation nav={navigation}/>}
				hero={hero}
			/>
		</header>
	)
}