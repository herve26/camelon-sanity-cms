import { useState, useRef } from 'react';
import Image from 'next/image';
import ReCAPTCHA from 'react-google-recaptcha';

import ContactModal from '#Molecules/ContactModal';

import SanityImage from '#Atoms/SanityImage';
import Input from '#Atoms/Input';
import Button from '#Atoms/Button';
import TextInput from '#Atoms/TextInput';

import styles from './ContactForm.module.scss';

export default function ContactForm({image}){
	const recaptchaRef = useRef()
	const [isModalOpen, setModalOpen] = useState(false)

	function submit(e){
		e.preventDefault()
		
		const formData = {}

		Object.entries(e.target.elements).forEach(([name, input]) => {
			if(input.type !== 'submit')
				formData[input.name] = input.value
		})

		formData["g-recaptcha-response"] = recaptchaRef.current.getValue();
		const form_key = process.env.NEXT_PUBLIC_FORM_SUMIT_KEY
		
		fetch(`https://submit-form.com/${form_key}`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(formData)
		})
		.then(function (response){
			setModalOpen(true);	
			e.target.reset()
		})
		.catch(function (err){
			console.log(err)
		})
	}

	return(
		<div className={styles.container}>
			<div className={styles.image_container}>
				<SanityImage layout="fill" src={image}/>
			</div>
			<form onSubmit={submit} className={styles.form_container} action="https://submit-form.com/echo">
				<div className={styles.input_container}>
					<Input minlenght="3" maxlenght="48" type="text" name="name" placeholder="Name" required/>
				</div>
				<div className={styles.input_container}>
					<Input type="email" name="email" placeholder="@Email" required/>
				</div>
				<div className={styles.input_container}>
					<TextInput name="message" placeholder="Message" required/>
				</div>
				<div className={styles.recaptcha}>
				<ReCAPTCHA 
					ref={recaptchaRef}
					sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}
				/>
				</div>
				<Button type="submit">Reach Us</Button>
			</form>
			<ContactModal open={isModalOpen} closeModal={() => setModalOpen(false)}/>
		</div>
	)
}