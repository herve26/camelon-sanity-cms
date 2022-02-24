import styles from './Button.module.scss';

export default function Button({children, ...rest}){
	return (
		<button className={styles.container} {...rest}>{children}</button>
	)
}