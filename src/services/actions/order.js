export const UPDATE_ORDER = 'UPDATE_ORDER';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const SORT_ORDER = 'SORT_ORDER';

const urlPost = 'https://norma.nomoreparties.space/api';

const postData = async (url, data) => {
	await fetch(url, {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		bode: JSON.stringify(data)
	})
		.then(res => {
			if (res.ok && res.status === 200) {
				return res.json();
			}
		})
		.then(res => res)
		.catch(e => {
			console.log(e)
		})
};

export const postOrder = (data) => {
	return async function(dispatch) {
		try {
			const res = await postData(
				urlPost,
				{
					"ingridients": data
				}
			);
			console.log(res);
			dispatch({type: 'OPEN_MODAL', orderDetails: res});
		} catch(e) {
			console.log(e);
		};
	};
};

export const deleteItem = (order, index) => {
	return function(dispatch) {
		console.log('order:', order);
		console.log('index:', index);
		const newOrder = order.filter((_, i) => i !== index);
		dispatch({type: UPDATE_ORDER, payload: newOrder});
	}
}