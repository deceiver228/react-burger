import React from 'react';
import styles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import mobileLogo from '../../images/logo.svg'

const AppHeader = () => {

    return (
        <header className={styles['header']}>
            <div className={`${styles['header__content']} container pt-4 pb-4`}>
                <nav className={styles['header__nav']}>
                    <ul className={styles['header__wrapper']}>
                        <li className={styles['header__item']}>
                            <Button type="secondary" size="medium">
                                <BurgerIcon />
                                <span className="ml-2" >Конструктор</span>
                            </Button>
                        </li>
                        <li className={styles['header__item']}>
                            <Button type="secondary" size="medium">
                                <ListIcon />
                                <span className="ml-2">Лента&nbsp;заказов</span>
                            </Button>
                        </li>
                        <li className={styles['header__item']}>
                            <Button type="secondary" size="medium">
                                <ProfileIcon />
                                <span className="ml-2">Личный&nbsp;кабинет</span>
                            </Button>
                        </li>
                    </ul>
                    <div className={styles['header__logo']}>
                        <Logo />
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default AppHeader;