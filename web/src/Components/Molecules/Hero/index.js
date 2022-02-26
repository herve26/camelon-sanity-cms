import Image from 'next/image';
import Button from '#Atoms/Button';
import SanityImage from '#Atoms/SanityImage';
import SimpleBlockContent from '#Atoms/SimpleBlockContent';
import styles from './Hero.module.scss';

export default function Hero({nav, hero}){
	const {heading, backgroundImage, tagline} = hero
	
	return (
		<div className={styles.container}>
			<div className={styles.overlay}>
				{nav}
				<div className={styles.content}>
					<h1 className={styles.heading}>{heading}</h1>
					<div className={styles.subHeading}>
						<SimpleBlockContent blocks={tagline}/>
					</div>
					<Button>Contact Us</Button>
				</div>
			</div>
			<SanityImage className={styles.image} priority layout="fill" src={backgroundImage}/>
		</div>
	)
}