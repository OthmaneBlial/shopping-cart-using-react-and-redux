import { ADD_TO_CART, REMOVE_FROM_CART, RESET_CART, INCREMENT_QTY, DECREMENT_QTY } from './types';


export function addToCart(product) {
	return({ type: ADD_TO_CART, payload: product })
}

export function removeFromCart(productId) {
	return({ type: REMOVE_FROM_CART, payload: productId })
}

export function resetCart() {
	return({ type: RESET_CART })
}

export function incrementQty(productId) {
	return({ type: INCREMENT_QTY, payload: productId })
}

export function decrementQty(productId) {
	return({ type: DECREMENT_QTY, payload: productId })
}