import Link from 'next/link';
import Button from '#Atoms/Button';
import SanityImage from '#Atoms/SanityImage';
import SimpleBlockContent from '#Atoms/SimpleBlockContent';
import styles from './Hero.module.scss';
import Logo from '../../../icons/logo_hor.svg';

import { resolve_cta } from '#Utils/index';


export default function Hero({nav, hero, logo}){
	const {heading, backgroundImage, tagline, ctas} = hero

	return (
		<div className={styles.container}>
			<div className={styles.overlay}>
				<div className={styles.navContainer}>
					<div className={styles.logo}>
						<Logo width={130} height={90}/>
					</div>
					{nav}
				</div>
				<div className={styles.content}>
					<h1 className={styles.heading}>{heading}</h1>
					<div className={styles.subHeading}>
						<SimpleBlockContent blocks={tagline}/>
					</div>
					<div className={styles.button_container}>
					{ctas && ctas.map(cta => <Link key={cta._key} href={resolve_cta(cta)}><Button>{cta.title}</Button></Link>)}
					</div>
				</div>
			</div>
			<SanityImage src={backgroundImage} priority layout="fill" sizes="(max-width: 1900px) 100vw, 1900px"/>
		</div>
	)
}