import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal";

const initialState = {
	modal: false,
	ingridientDetails: {},
	orderDetails: {}
};

export const modalReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_MODAL: {
			return {
				...state,
				modal: true,
				ingridientDetails: action.ingridientDetails,
				orderDetails: action.orderDetails
			};
		}
		case CLOSE_MODAL: {
			return {
				...state,
				modal: false,
				ingridientDetails: {},
				orderDetails: {}
			};
		}
		default:
			return state;
	};
};