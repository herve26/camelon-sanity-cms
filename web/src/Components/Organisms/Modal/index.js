import M from 'react-modal';
import styles from './Modal.module.scss';
import Close from '../../../icons/close.svg';

M.setAppElement('#__next');

export default function Modal({isOpen, closeModal, label, children}){
	return(
		<M
			className={styles.modal}
			overlayClassName={styles.overlay}
			isOpen={isOpen}
			onRequestClose={closeModal}
			contentLabel={label}
		>
		<button onClick={closeModal} className={styles.close_button}>
			<Close fill="#FFF"/>
		</button>
		<div className={styles.content}>
			{children}
		</div></M>
	)
}