import { GET_ALL_PRODUCTS, IS_ERROR, IS_LOADING } from './types';
import { URL } from './config';
import axios from 'axios';

// GET_ALL_PRODUCTS

export function getAllProducts() {
	return function(dispatch) {
		dispatch({type: IS_LOADING, payload: true});
		return axios.get(`${URL}/products.json`)
			.then((response) => {
				dispatch({type: IS_LOADING, payload: false});
				dispatch({type: GET_ALL_PRODUCTS, payload: response.data});
			})
			.catch((error) => {
				dispatch({type: IS_ERROR, payload: 'Unable get all products'});
			});
	}
}
