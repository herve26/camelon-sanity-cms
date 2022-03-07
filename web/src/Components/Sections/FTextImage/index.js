import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SanityImage from '#Atoms/SanityImage';
import Button from '#Atoms/Button';
import styles  from './FTextImage.module.scss';
import SimpleBlockContent from '#Atoms/SimpleBlockContent';
import { resolve_cta } from '#Utils/index';
import ContactContext from '#Utils/contactFormContext';

export default function FTextImage({image, text, ctas}){
	const {setSubject} = useContext(ContactContext)

	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<SanityImage layout="responsive" src={image}/>
			</div>
			<div className={styles.content}>
				<SimpleBlockContent blocks={text}/>
				{ctas && ctas.map(cta => 
					<Button
						key={cta._key}
						elm="a" 
						href={`#${cta.anchor.Slug}`}
						onClick={() => setSubject(cta.params)}
					>
						{cta.title}
					</Button>
				)}
			</div>
		</div>
	)
}