import { UPDATE_ORDER } from "./order";

export const GET_DATA = 'GET_DATA';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const GET_DATA_FAILED = 'GET_DATA_FAILED';
export const UPDATE_COUNTER = 'UPDATE_COUNTER';


const urlData = 'https://norma.nomoreparties.space/api/ingredients';

export function getData() {
	return function (dispatch) {
		dispatch({
			type: GET_DATA
		});
		fetch(urlData).then(res => {
			if (res.ok && res.status === 200) {
				return res.json();
			} else {
				dispatch({
					type: GET_DATA_FAILED
				});
			};
		}).then(res => {
			dispatch({
				type: GET_DATA_SUCCESS,
				data: res.data
			});
			console.log(res)
			console.log(res[0])
			dispatch({
				type: UPDATE_ORDER,
				payload: res.data[0]
			})
			return res;
		}).catch(e => {
			dispatch({
				type: GET_DATA_FAILED
			});
		});
	};
};