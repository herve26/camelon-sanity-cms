import styles from './TextInput.module.scss';

export default function TextInput(props){
	return(
		<textarea className={styles.container} placeholder="Message" {...props}></textarea>
	)
}