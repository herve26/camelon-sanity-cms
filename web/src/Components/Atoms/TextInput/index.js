import styles from './TextInput.module.scss';

export default function TextInput({label, ...props}){
	return(
		<label className={styles.container}>{label}
			<textarea className={styles.input} {...props}></textarea>
		</label>
	)
}