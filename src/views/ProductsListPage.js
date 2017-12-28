import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import '../components/products/products.css';
import { getAllProducts } from '../actions/productsActions';
import { addToCart, removeFromCart, resetCart, incrementQty, decrementqty } from '../actions/cartActions';

import ProductItem from '../components/products/ProductItem';
import ProductsSearch from '../components/products/ProductsSearch';

class ProductsListPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			selectedProducts: [],
			searchKeyword: '',
			i: 0
		}
	}

	setSearch =  (searchKeyword) => {
		this.setState({searchKeyword: searchKeyword});
	} 



	componentDidMount() {
		this.props.getAllProducts().then(() => {
			this.setState({selectedProducts: this.props.allProducts});
		});
	}

	render() {

		let startItemOfPage = 9 * this.state.i
		console.log(startItemOfPage)
		let endItemOfPage = 9 * (this.state.i + 1)
		console.log(endItemOfPage)

		return(
			<div>
				<ProductsSearch getSearch={this.setSearch} />

				<div className='products-list-container'>
				{

					(this.state.selectedProducts.filter((product) => 
						(product.name).toLowerCase().startsWith((this.state.searchKeyword).toLowerCase()))).slice(startItemOfPage, endItemOfPage)
						.map((product) => {
						return <ProductItem 
						key={product.id}
						addToCart={this.props.addToCart}
						removeFromCart={this.props.removeFromCart}
						product={product}
						cartItems={this.props.cartItems} />
					})
				}
				</div>

				<div className='products-list-buttons-container'>
					{(this.state.i > 0) && <a onClick={() => this.setState({i: this.state.i - 1})} className='button is-dark'>Previous</a>}
					{((this.state.i * 9 + 1)< this.props.allProducts.length) && <a onClick={() => this.setState({i: this.state.i + 1})} className='button is-dark'>Next</a>}
				</div>

			</div>
			);
	}
}

function mapStateToProps({ ProductsReducer, CartReducer }) {
	return {
		allProducts: ProductsReducer.allProducts,
		isLoading: ProductsReducer.isLoading,
		error: ProductsReducer.error,
		cartItems: CartReducer.cartItems
	}
}



function mapDispatchToProps(dispatch) {
    return({
        getAllProducts: () => dispatch(getAllProducts()),
        addToCart: (product) => dispatch(addToCart(product)),
		removeFromCart: (productId) => dispatch(removeFromCart(productId)),
		incrementQty: (productId) => dispatch(incrementQty(productId)),
		decrementqty: (productId) => dispatch(decrementqty(productId)), 
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListPage);
