import { forwardRef } from 'react';
import styles from './Button.module.scss';

export default forwardRef(({children, elm="button", ...rest}, ref) => {

	if(elm === "a"){
		return <a className={styles.container} ref={ref} {...rest}>{children}</a> 
	}

	return <button className={styles.container} ref={ref} {...rest}>{children}</button>
})