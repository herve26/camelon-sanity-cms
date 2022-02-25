import Geopoint from '#Atoms/Geopoint';
import Contact from '#Atoms/Contact';
import styles from './Address.module.scss';


const AddressList = ({info, title}) => {
	return(
		<div className={styles.list}>
			<h4>{title}</h4>
			<div className={styles.contact}>{info.map((contact, idx) => <Contact key={contact._key} {...contact}/>)}</div>
		</div>
	)
}

export default function Address({geoLoc, addresses}){

	return(
		<div className={styles.container}>
			<div className={styles.geoMap}><Geopoint {...geoLoc}/></div>
			<div className={styles.addresses_container}>
				{addresses.map(address => <AddressList key={address._key} {...address}/>)}
			</div>
		</div>
	)
}