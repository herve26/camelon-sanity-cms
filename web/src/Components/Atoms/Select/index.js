import styles from './Select.module.scss';

export default function Select({label, name, children}){
	return(
		<div className={styles.container}>
			<label className={styles.label}>{label}
			<select name={name} className={styles.select}>
				{children}
			</select>
			</label>
		</div>
	)
}