import styles from './Cards.module.scss';
import Card from '#Molecules/Card';

export default function Cards({cards}){
	return(
		<div className={styles.container}>
			{cards.map((card, idx) => 
				<div className={styles.card}>
					<Card key={idx} {...card}/>
				</div>
			)}
		</div>
	)
}