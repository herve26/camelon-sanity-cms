import { useState } from 'react';
import styles from './Navigation.module.scss';
import Menu from '../../../icons/menu_open.svg';
import Close from '../../../icons/close.svg';

export default function Navigation({nav}){
	const [open, setOpen] = useState(false)
	
	const handleClick = e => {
		document.body.classList.toggle('menu_open')
		setOpen(!open)
	}

	return(
		<nav className={styles.container}>
			<div onClick={handleClick} className={styles.menu_button_container}>
				<button className={styles.menu_button}>
					<Menu className={styles.menu_icon} height="1em" width="1em" fill="#FFFFFF"/>
				</button>
			</div>
			<ul className={`${styles.menu} ${open ? styles.open : ''}`}>
				{nav.map(n => <li key={n._key}><a href={`#${n.Slug}`}>{n.title}</a></li>)}
				<li className={styles.menu_close}><button onClick={handleClick}>
					<Close height="1em" width="1em" fill="#FFFFFF" style={{transform: 'scale(1.8)'}} />
				</button></li>
			</ul>
		</nav>
	)
}