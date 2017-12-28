import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, resetCart, incrementQty, decrementQty } from '../actions/cartActions';
import CartItem from '../components/cart/CartItem';
import '../components/cart/cart.css';

class CartPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showCart: false
		}
	}


	render() {
		return(
			<div>
			
			<div className='cart-icon'>
				<a onClick={() => this.setState({showCart: !this.state.showCart})}>
					<img src='http://www.pngall.com/wp-content/uploads/2016/04/Cart-Free-Download-PNG.png' width='40' height='10' />
				</a>
				<span>Your cart</span>
			</div>

			<div id={(this.state.showCart) ? 'cart-items' : 'cart-items-show'}>
				{
					this.props.cartItems.map((cartItem) => 
						<CartItem 
						key={cartItem.id}
						cartItem={cartItem}
						removeFromCart={this.props.removeFromCart}
						incrementQty={this.props.incrementQty}
						decrementQty={this.props.decrementQty} />   
					)
				}
			</div>
			</div>
			);
	}
}

function mapStateToProps({ CartReducer }) {
	return {
		cartItems: CartReducer.cartItems
	}
}

function mapDispatchToProps(dispatch) {
	return({
		addToCart: (product) => dispatch(addToCart(product)),
		removeFromCart: (productId) => dispatch(removeFromCart(productId)),
		incrementQty: (productId) => dispatch(incrementQty(productId)),
		decrementQty: (productId) => dispatch(decrementQty(productId)), 
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
