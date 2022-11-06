import React from 'react';
import styles from './IngridientInfo.module.css';

const IngridientInfo = ({data}) => {

	const items = [
		['Калории, ккал', data.calories],
		['Белки, г', data.proteins],
		['Жиры, г', data.fat],
		['Углеводы, г', data.carbohydrates]
	];

	return (
		<div className={styles['ingridient-info']}>
			<img className={styles['ingridient-info__img']} src={data.image_large} alt="image"/>
			<h2 className='text text_type_main-medium mt-4'>{data.name}</h2>
			<ul className={styles['ingridient-info__wrapper']}>
				{items.map((item, i) => 
					<li className={styles['ingridient-info__item']} key={i}>
						<span className='text text_color_inactive text_type_main-default'>{item[0]}</span>
						<span className='text text_color_inactive text_type_digits-default'>{item[1]}</span>
					</li>	
				)}
			</ul>
		</div>
	);
};

export default IngridientInfo;