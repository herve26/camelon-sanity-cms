import styles from './TextInput.module.scss';

export default function TextInput(){
	return(
		<textarea className={styles.container} placeholder="Message"></textarea>
	)
}