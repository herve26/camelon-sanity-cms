import styles from './Select.module.scss';

export default function Select({value, label, name, children, ...rest}){
	return(
		<div className={styles.container}>
			<label className={styles.label}>{label}
			<select value={value} name={name} className={styles.select} {...rest}>
				{children}
			</select>
			</label>
		</div>
	)
}