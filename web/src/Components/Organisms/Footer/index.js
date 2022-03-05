import styles from './Footer.module.scss';
import SimpleBlockContent from '#Atoms/SimpleBlockContent';

export default function Footer({copy}){
	return (
		<footer className={styles.container}>
			<SimpleBlockContent blocks={copy}/>
		</footer>
	)
}