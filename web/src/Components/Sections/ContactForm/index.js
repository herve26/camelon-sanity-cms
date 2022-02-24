import SanityImage from '#Atoms/SanityImage';
import Image from 'next/image';
import Input from '#Atoms/Input';
import Button from '#Atoms/Button';
import TextInput from '#Atoms/TextInput';

import styles from './ContactForm.module.scss';

export default function ContactForm({image}){
	return(
		<div className={styles.container}>
			<div className={styles.image_container}>
				<SanityImage layout="fill" src={image}/>
			</div>
			<form className={styles.form_container}>
				<div className={styles.input_container}>
					<Input type="text" name="name" placeholder="Name"/>
				</div>
				<div className={styles.input_container}>
					<Input type="text" name="email" placeholder="@Email"/>
				</div>
				<div className={styles.input_container}>
					<TextInput placeholder="Message"/>
				</div>
				<Button type="submit">Reach Us</Button>
			</form>
		</div>
	)
}