import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../../services/actions/order';
import styles from './OrderIngridient.module.css';

const OrderIngridient = ({data, id, index, moveIngridient, onDelete}) => {
	const ref = useRef(null);
	const order = useSelector(store => store.order.order);

	const [{ handlerId }, drop] = useDrop({
		accept: 'constructor',
		collect(monitor) {
			return {
				handlerId: monitor.getHandlerId(),
			}
		},
		hover(item, monitor) {
			if (!ref.current) {
				return
			}
			const dragIndex = item.index
			const hoverIndex = index
			// Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return
			}
			const hoverBoundingRect = ref.current?.getBoundingClientRect()
			const hoverMiddleY =
				(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
			const clientOffset = monitor.getClientOffset()
			const hoverClientY = clientOffset.y - hoverBoundingRect.top

			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return
			}

			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return
			}

			moveIngridient(dragIndex, hoverIndex)
			item.index = hoverIndex
		},
	})
	const [{ isDragging }, drag] = useDrag({
		type: 'constructor',
		item: () => {
			return { id, index }
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	})

	const opacity = isDragging ? 0 : 1

	drag(drop(ref))

	return (
		<div className={styles['constructor__item']} style={{opacity}} ref={ref} data-handler-id={handlerId} draggable>
				<DragIcon type="secondary"/>
				<ConstructorElement
					thumbnail={data.image}
					type={data.position}
					isLocked={data.lock}
					text={data.name}
					price={data.price}
					handleClose={() => onDelete(order, index)}
				/>
		</div>
	);
};

export default OrderIngridient;