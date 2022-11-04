import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './BurgerIngridient.module.css';
import PropTypes from 'prop-types';

const BurgerIngridient = (data) => {
	return (
		<li className={styles['ingridient__wrapper']}>
			<button className={styles['ingridient']} type="button">
				{data.__v !== 0 ? <Counter count={data.__v} size="default" /> : null}
				<img className={styles['ingridient__img']} src={data.image} alt={data.name}/>
				<p className={styles['ingridient__price']}>
					<span>{data.price}</span>
					<CurrencyIcon/>
				</p>
				<p className='text text_type_main-default'>{data.name}</p>
			</button> 
		</li>
	)
}

export default BurgerIngridient;