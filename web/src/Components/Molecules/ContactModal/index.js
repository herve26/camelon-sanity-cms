import Modal from '#Organisms/Modal';

export default function ContactModal({open, closeModal}){

	return(
		<Modal isOpen={open} closeModal={closeModal} label="Information">
			<h4>Merci Pour Votre Message</h4>
		</Modal>
	)
}