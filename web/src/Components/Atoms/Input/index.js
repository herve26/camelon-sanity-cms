import styles from './Input.module.scss';

export default function Input({label, ...props}){
	return(
		<div className={styles.container}>
			<label className={styles.label}>{label}
			<input {...props} className={styles.input}/>
			</label>
		</div>
	)
}