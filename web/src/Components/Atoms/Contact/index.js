import styles from './Contact.module.scss';
import Location from '../../../icons/location.svg';
import Phone from '../../../icons/phone.svg';
import WhatsApp from '../../../icons/whatsapp.svg';


const icons = {
	address: Location,
	phone: Phone,
	whatsapp: WhatsApp
}

export default function Contact({value, _type}){
	const Icon = icons[_type]

	return(
		<div className={styles.container}>
			<span className={styles.icon}><Icon fill="#28BD4D" style={{transform: 'scale(1.8)'}}/></span>
			<span>{value}</span>
		</div>
	)
}