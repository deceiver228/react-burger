import { CheckMarkIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './OrderDetails.module.css';
import done from '../../images/done.svg';

const OrderDetails = props => {
	return (
		<div className={`${styles['order']} pb-15`}>
			<h2 className={`${styles['order__title']} text text_primary_ligth text_type_digits-medium`}>{Math.floor(Math.random()*1e6)}</h2>
			<h3 className='text text_type_main-medium'>идентификатор заказа</h3>
			<div className={`${styles['order__done']} mt-15 mb-15`}>
				<img src={done} alt="done"/>
				<CheckMarkIcon type="primary"/>
			</div>
			<p className='text text_type_main-default'>Ваш заказ начали готовить</p>
			<p className='text text_type_main-default'>Дождитесь готовности на орбитальной станции</p>
		</div>
	);
};

export default OrderDetails;