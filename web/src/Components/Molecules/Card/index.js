import SanityImage from '#Atoms/SanityImage';
import Image from 'next/image';
import styles from './Card.module.scss';

export default function Card({caption, title, image, text}){

	return(
		<div className={styles.container}>
			<div className={styles.header}>
				<div className={styles.caption}><h3>{caption}</h3></div>
				<div className={styles.image_container}>
					<SanityImage layout="responsive" src={image}/>
				</div>
			</div>
			<div className={styles.content}>
				<h3>{title}</h3>
				<p>{text}</p>
			</div>
		</div>
	)
}