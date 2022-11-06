import React from 'react';
import styles from './Modal.module.css';

const ModalOverlay = (props) => {
	return (
		<div className={styles['modal-overlay']} onClick={props.handleModalClose}>
			{props.children}
		</div>
	)
};

export default ModalOverlay;