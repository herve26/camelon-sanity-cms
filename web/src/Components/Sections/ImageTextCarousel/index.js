import Image from 'next/image';
import SanityImage from '#Atoms/SanityImage';
import styles from './ImageTextCarousel.module.scss';
import SimpleBlockContent from '#Atoms/SimpleBlockContent';
import Carousel from '#Molecules/Carousel';


export default function ImageTextCarousel({slides}){

	const slidesArr = slides.map((slide, idx) => 
		<div key={slide._key} className={styles.slide_container}>
			<h3>{idx < 10 ? `0${idx + 1}. ` : `${idx + 1}. `}{slide.title}</h3>
			<div className={styles.slide_content}>
				<div className={styles.slide_text}><SimpleBlockContent blocks={slide.text}/></div>
				<div className={styles.slide_image}>
					<SanityImage size={800} height={600} width={800} src={slide.image}/>
				</div>
			</div>
		</div>
	)
	
	return(
		<div className={styles.container}>
			<Carousel slides={slidesArr}/>
		</div>
	)
}