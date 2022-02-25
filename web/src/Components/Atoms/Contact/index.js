import styles from './Contact.module.scss';
import Location from '../../../icons/location.svg';
import Phone from '../../../icons/phone.svg';
import WhatsApp from '../../../icons/whatsapp.svg';


const icons = {
	address: Location,
	phone: Phone,
	whatsapp: WhatsApp
}

const DivContainer = ({children, className}) => <div className={className}>{children}</div>
const AContainer = ({children, className, href}) => <a href={href} className={className}>{children}</a>

export default function Contact({value, _type}){
	const Icon = icons[_type]
	const href = _type === "phone" ? "tel:" : _type === "whatsapp" ? "whatsapp://send?phone=" : ''
	const Container = (_type === "phone" || _type === "whatsapp") ? AContainer : DivContainer

	return(
		<Container href={`${href}${value}`} className={styles.container}>
			<span className={styles.icon}><Icon fill="#28BD4D" style={{transform: 'scale(1.8)'}}/></span>
			<span>{value}</span>
		</Container>
	)
}