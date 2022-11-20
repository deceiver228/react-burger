import React from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import styles from './App.module.css';
import BurgerIngridients from './components/BurgerIngridients/BurgerIngridients';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

console.log('fix2')

function App() {
	return (
		<div className="App">
			<AppHeader/>
			<main className={styles['main']}>
				<DndProvider backend={HTML5Backend}>
					<BurgerIngridients />
					<BurgerConstructor />
				</DndProvider>
			</main>
		</div>
	);
}

export default App;