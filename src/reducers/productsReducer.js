import { GET_ALL_PRODUCTS, IS_ERROR, IS_LOADING } from '../actions/types';

const INTIAL_STATE = {
	allProducts: [],
	isLoading: false,
	error: ''
}

export default function (state = INTIAL_STATE, action) {
	switch(action.type) {
		case GET_ALL_PRODUCTS:
			return {...state, allProducts: action.payload}
		case IS_LOADING:
			return {...state, isLoading: action.payload}
		case IS_ERROR:
			return {...state, error: action.payload}
		default:
			return state;
	}
}
