import styles from './Cards.module.scss';
import Card from '#Molecules/Card';

export default function Cards({cards}){
	return(
		<div className={styles.container}>
			{cards.map((card, idx) => 
				<div key={card._key} className={styles.card}>
					<Card {...card}/>
				</div>
			)}
		</div>
	)
}