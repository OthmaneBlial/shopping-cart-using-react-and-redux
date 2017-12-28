import React from 'react';
import './cart.css';

class CartItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return(
			<div className='cart-item'>
				<h1>{this.props.cartItem.product.name}</h1>
				<h2>Quantity {this.props.cartItem.qty}</h2>
				<button onClick={() => this.props.incrementQty(this.props.cartItem.id)}>+</button>
				<button onClick={() => this.props.decrementQty(this.props.cartItem.id)}>-</button>
			</div>
			);
	}
}

export default CartItem;
