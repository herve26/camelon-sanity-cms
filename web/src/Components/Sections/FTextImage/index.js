// Formatted Text with Image
import Image from 'next/image';
import SanityImage from '#Atoms/SanityImage';
import styles  from './FTextImage.module.scss';
import SimpleBlockContent from '#Atoms/SimpleBlockContent';

export default function FTextImage({image, text}){

	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<SanityImage layout="responsive" size={800} src={image} height={600} width={800}/>
			</div>
			<div className={styles.content}>
				<SimpleBlockContent blocks={text}/>
			</div>
		</div>
	)
}