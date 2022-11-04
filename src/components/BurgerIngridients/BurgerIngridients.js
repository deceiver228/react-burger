import React, { useRef } from 'react';
import data from '../../utils/data';
import styles from './BurgerIngridients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngridient from '../BurgerIngridient/BurgerIngridient'

const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('bun');

    const items = [['Булки', 'bun'], ['Соусы', 'sauce'], ['Топпинги', 'main']];

    const wrapperRef = useRef(null);

    const bunRef = useRef(null);
    const sauceRef = useRef(null);
    const mainRef = useRef(null);
    
    const refs = [bunRef, sauceRef, mainRef];

    const handleScroll = () => {
        const sauceScroll = refs[1].current.getBoundingClientRect().top - wrapperRef.current.getBoundingClientRect().top;
        const mainScroll = refs[2].current.getBoundingClientRect().top - wrapperRef.current.getBoundingClientRect().top;

        if (sauceScroll > 0) {
            setCurrent(items[0][1]);
        } else if (mainScroll > 0) {
            setCurrent(items[1][1]);
        } else {
            setCurrent(items[2][1]);
        };
    };

    const handleClick = (e) => {
        setCurrent(e)
        if(e === 'bun') {
            refs[0].current.scrollIntoView({behavior: 'smooth'});
        } else if (e === 'sauce') {
            refs[1].current.scrollIntoView({behavior: 'smooth'});
        } else if (e === 'main') {
            refs[2].current.scrollIntoView({behavior: 'smooth'});
        };
    };


    return (
        <section className={`${styles.ingridients} pt-10 pb-10`}>
            <h1 className='text text_type_main-large'>Соберите бургер</h1>
            <div className={`${styles.ingridients__tabs} mt-5`}>
                {items.map((item, i) => 
                    <Tab 
                        key={i}
                        value={item[1]}
                        onClick={handleClick}
                        active={current === `${item[1]}`}>
                            {item[0]}
                    </Tab>
                )}
            </div>
            <ul className={`${styles.ingridients__content}`} ref={wrapperRef} onScroll={handleScroll}>
                {items.map((item, i) => 
                    <li className={styles.ingridients__wrapper} ref={refs[i]} key={i}>
                        <h2 className={`${styles.ingridients__title} text text_type_main-medium`}>{item[0]}</h2>
                        <ul className={styles.ingridients__items}>
                            {data.map(data => data.type === `${item[1]}` ? <BurgerIngridient key={data._id} {...data} /> : null
                            )}
                        </ul>
                    </li>
                )}
            </ul>
        </section>
    )
}

export default BurgerIngredients;