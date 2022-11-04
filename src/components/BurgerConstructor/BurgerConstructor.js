import { Button, ConstructorElement, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import styles from './BurgerConstructor.module.css';

const BurgerConstructor = ({data}) => {

	const text = "Краторная булка N-200i";
    const price = 1255;
    const image = data[0].image;

	return (
		<section className={styles['constructor']}>
			<div className={styles['constructor__ingridients']}>
				<div className={`${styles['constructor__item']} pl-10`}>
					<ConstructorElement
						type="top"
						isLocked={true}
						text={text + '(верх)'}
						price={price}
						thumbnail={image}/>
				</div>
				{data.map(data => {
					return data.name !== 'Краторная булка N-2001' ? 
						<div className={styles['constructor__item']} key={data._id}>
							<DragIcon type="secondary"/>
							<ConstructorElement
								thumbnail={data.image_mobile}
								type={data.position}
								isLocked={data.lock}
								text={data.name}
								price={data.price}
							/>
						</div>
						:
						null
				})}
				<div className={`${styles['constructor__item']} pl-10`}>
					<ConstructorElement
						type="bottom"
						isLocked={true}
						text={text + '(низ)'}
						price={price}
						thumbnail={image}/>
				</div>
			</div>
			<div className={styles['constructor__info']}>
				<span className='text text_type_digits-medium mr-10'>
					1000
					<CurrencyIcon type="primary"/>
				</span>
				<Button type="primary" size="medium">
					Оформить заказ
				</Button>
			</div>
		</section>
	)
}

export default BurgerConstructor;