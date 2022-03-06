import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import ContactModal from '#Molecules/ContactModal';

import SanityImage from '#Atoms/SanityImage';
import Input from '#Atoms/Input';
import Button from '#Atoms/Button';
import TextInput from '#Atoms/TextInput';
import Select from '#Atoms/Select';

import styles from './ContactForm.module.scss';

export default function ContactForm({image, subjects, translation={labels: { name: 'Name', email: 'Email', subject: 'Subject', message: 'Message'} }}){

	const recaptchaRef = useRef()
	const [isModalOpen, setModalOpen] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [captchaToken, setCaptchaToken] = useState('')
	const [subject, setSubject] = useState(null)

	const router = useRouter()

	useEffect(() => {
		if(router && router.query.query){
			setSubject(router.query.query)
		}
	},[router])

	async function submit(e){
		e.preventDefault()
		setIsSubmitting(true)

		if(!captchaToken.length) {
			setIsSubmitting(false)
			return;
		}

		const captchaVerify = await fetch('/.netlify/functions/captcha-verify', {
			method: "POST",
			headers: {
				"Content-type": "application/json",
				"Accept": "application/json",
			},
			body: JSON.stringify({token: captchaToken})
		})
		.then(response => response.json())
		.catch(err => { 
			return { err: true } 
		})


		if(typeof captchaVerify === 'object' && captchaVerify.success){
			const formData = {}
			
			Object.entries(e.target.elements).forEach(([name, input]) => {

				if(input.type !== 'submit' && input.name !== "g-recaptcha-response" && input.name !== "h-captcha-response"){
					formData[input.name] = input.value
				}
			})

			await fetch(`https://formsubmit.co/ajax/221a37a42430160bfb1631a8a6eff41f`, {
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

		setIsSubmitting(false)
	}

	const { labels, buttons } = translation

	return(
		<div className={styles.container}>
			<div className={styles.image_container}>
				<SanityImage layout="fill" src={image}/>
			</div>
			<form onSubmit={submit} className={styles.form_container}>
				<div className={styles.input_container}>
					<Input minlenght="3" maxlenght="48" type="text" name="name" label={labels.name} required/>
				</div>
				<div className={styles.input_container}>
					<Input type="email" name="email" label={labels['email']} required/>
				</div>
				<div className={styles.input_container}>
					<Select value={subject} name="_subject" label={labels['subject']}>
						{subjects.map(sub => <option value={sub} key={sub}>{sub}</option>)}
					</Select>
				</div>
				<div className={styles.input_container}>
					<TextInput name="message" label={labels['message']} required/>
				</div>
				<div className={styles.recaptcha}>
				<HCaptcha
					sitekey={`${process.env.NEXT_PUBLIC_HCAPTCHA_KEY}`}
					onVerify={setCaptchaToken}
				/>
				</div>
				<Button type="submit" disabled={isSubmitting}>{buttons['submit']}</Button>
			</form>
			<ContactModal open={isModalOpen} closeModal={() => setModalOpen(false)}/>
		</div>
	)
}
