import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART, INCREMENT_QTY, DECREMENT_QTY } from '../actions/types';

const INTIAL_STATE = {
	cartItems: [],
}

export default function(state = INTIAL_STATE, action) {
	switch(action.type) {
		case ADD_TO_CART:
			let newCartItems = [...state.cartItems, {'id': action.payload.id, 'product': action.payload, 'qty': 1}];
			return {...state, cartItems: newCartItems};
		case REMOVE_FROM_CART:
			newCartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload);
			return {...state, cartItems: newCartItems };
		case RESET_CART:
			return {...state, cartItems: []};
		case INCREMENT_QTY:
			let idx = state.cartItems.findIndex((item) => item.id === action.payload);
			state.cartItems[idx].qty += 1;
			return {...state, cartItems: [...state.cartItems]}
		case DECREMENT_QTY:
			idx = state.cartItems.findIndex((item) => item.id === action.payload);
			if(state.cartItems[idx].qty > 1) {
				state.cartItems[idx].qty -= 1;
			}
			return {...state, cartItems: [...state.cartItems]}
		default:
			return state;
	}
}