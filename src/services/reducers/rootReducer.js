import { combineReducers } from "redux";
import { dataReducer } from "./data";
import { modalReducer } from "./modal";
import { orderReducer } from "./order";

export const rootReducer = combineReducers({
	data: dataReducer,
	order: orderReducer,
	modal: modalReducer
});