// Formatted Text with Image
import Image from 'next/image';
import Link from 'next/link';
import SanityImage from '#Atoms/SanityImage';
import Button from '#Atoms/Button';
import styles  from './FTextImage.module.scss';
import SimpleBlockContent from '#Atoms/SimpleBlockContent';
import { resolve_cta } from '#Utils/index';

export default function FTextImage({image, text, ctas}){

	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<SanityImage layout="responsive" size={800} src={image} height={600} width={800}/>
			</div>
			<div className={styles.content}>
				<SimpleBlockContent blocks={text}/>
				{ctas && ctas.map(cta => <Link href={resolve_cta(cta)} key={cta._key}><Button>{cta.title}</Button></Link>)}
			</div>
		</div>
	)
}