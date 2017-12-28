import React from 'react';
import './products.css';


class ProductItem extends React.Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return(
			<div className='product-item-container'>
				<figure className="product-item">
				  <img src={this.props.product.imgUrl} alt="" />
				  <figcaption>
				    <h3>{this.props.product.name}</h3>
				    <h3>{this.props.product.price}</h3>
				    {
				    	(this.props.cartItems.filter((cartItem) => cartItem.id === this.props.product.id).length === 0) ?
				    		<a className='button is-info' onClick={() => this.props.addToCart(this.props.product)} >ADD TO CART</a> :
				    		<a className='button is-danger' onClick={() => this.props.removeFromCart(this.props.product.id)} >REMOVE TO CART</a>
				    }
				    
				  </figcaption>
				  <a href="#"></a>
				</figure>
			</div>
			);
	}
}




export default ProductItem;
