import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import ModalOverlay from './ModalOverlay';

const ESC_CODE = 27;

const Modal = (props) => {

	const handleKeyUp = (e) => {
		if (e.keyCode === ESC_CODE) {
			props.onModalClose(e)
		};
	};

	useEffect(() => {
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			document.removeEventListener('keyup', handleKeyUp)
		};
	});

	return (
		<ModalOverlay onModalClose={props.onModalClose}>
			<div className={styles['modal']}>
				<div className={styles['modal__header']}>
					<h2 className={styles['modal__title']}>Детали ингридиента</h2>
					<div className={styles['modal__close']} onClick={props.onModalClose}>
						<CloseIcon type="primary"/>
					</div>
				</div>
				{props.children}
			</div>
		</ModalOverlay>
	);
};

export default Modal;