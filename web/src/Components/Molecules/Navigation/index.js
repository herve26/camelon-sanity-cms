import { useState } from 'react';
import styles from './Navigation.module.scss';

export default function Navigation(){
	const [open, setOpen] = useState(false)
	const handleClick = e => {
		document.body.classList.toggle('menu_open')
		setOpen(!open)
	}
	return(
		<nav className={styles.container}>
			<div onClick={handleClick} className={styles.menu_button_container}>
				<button className={styles.menu_button}>#</button>
			</div>
			<ul className={`${styles.menu} ${open ? styles.open : ''}`}>
				<li><a href="#who">Who Are We?</a></li>
				<li><a href="#process">Our Process</a></li>
				<li><a href="#dates">Our Dates</a></li>
				<li><a href="#order">Order</a></li>
				<li><a href="#contact">Contact</a></li>
				<li><a href="#location">Our Addresses</a></li>
				<li className={styles.menu_close}><button onClick={handleClick}>X</button></li>
			</ul>
		</nav>
	)
}