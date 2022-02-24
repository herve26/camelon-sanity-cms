import Hero from '#Molecules/Hero';
import styles from './Header.module.css';
import Navigation from '#Molecules/Navigation';

export default function Header({hero}){
	return (
		<header className={styles.container}>
			<Hero
				nav={<Navigation/>}
				hero={hero}
			/>
		</header>
	)
}