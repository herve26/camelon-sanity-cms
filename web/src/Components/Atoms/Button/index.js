import styles from './Button.module.scss';

export default function Button({children, elm="button", ...rest}){

	if(elm === "a"){
		return <a className={styles.container} {...rest}>{children}</a> 
	}

	return <button className={styles.container} {...rest}>{children}</button>
}