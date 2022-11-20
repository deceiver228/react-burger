import {
	GET_DATA,
	GET_DATA_FAILED,
	GET_DATA_SUCCESS,
	UPDATE_COUNTER } from '../actions/data';

const initialState = {
	data: [],
	dataLoading: false,
	dataFailed: false
};

export const dataReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DATA: {
			return {
				...state,
				dataLoading: true,
				dataFailed: false,
			};
		};
		case GET_DATA_SUCCESS: {
			return {
				...state,
				data: action.data,
				dataLoading: false
			};
		};
		case GET_DATA_FAILED: {
			return {
				...state,
				dataFailed: true,
				dataLoading: false
			};
		};
		case UPDATE_COUNTER: {
			return {
				...state,
				data: [...state.data, action.item.__v += action.payload]
			}
		}
		default: {
			return state
		};
	};
};