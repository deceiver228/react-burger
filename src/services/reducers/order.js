import {
	UPDATE_ORDER,
	SORT_ORDER} from '../actions/order';

const initialState = {
	order: []
};

export const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_ORDER: {
			return {
				...state,
				order: [...state.order, action.payload]
			};
		};
		case SORT_ORDER: {
			return {
				...state,
				order: [...action.payload]
			}
		}
		default: {
			return state
		};
	};
};