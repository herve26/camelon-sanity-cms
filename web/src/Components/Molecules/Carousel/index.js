import { useEffect, useState, useCallback } from 'react';
import styles from './Carousel.module.scss';
import useEmblaCarousel from 'embla-carousel-react';

export default function Carousel({slides}){
	const [emblaRef, embla] = useEmblaCarousel();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [slidesList, setSlidesList] = useState([]);
	
	const scrollTo = useCallback(index => embla && embla.scrollTo(index))

	const onSelect = useCallback(() => {
		if(!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
	}, [embla])
	
	useEffect(() => {
		if(!embla) return;

		setSlidesList(embla.scrollSnapList());
		embla.on('select', onSelect);
	}, [embla, onSelect])

	const slidesArr = slides.map((slide, idx) => <div key={idx} className={styles.slide}>{slide}</div>)
	
	return(
		<div className={styles.container}>
			<div className={styles.embla} ref={emblaRef}>
				<div className={styles.slide_container}>
				{slidesArr}
				</div>
			</div>
			<div className={styles.dots}>
				{slidesList.map((_,idx) => 
					<button 
						key={idx}
						className={`${styles.dot} ${idx === selectedIndex ? styles.dot_selected : ''}`}
						onClick={() => scrollTo(idx)}
					/>
				)}
			</div>
		</div>
	)
}