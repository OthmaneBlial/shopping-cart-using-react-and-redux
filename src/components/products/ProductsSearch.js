import React from 'react';
import './products.css';

class ProductsSearch extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	searchProduct = (e) => {
		this.props.getSearch(e.target.value);
	}

	render() {
		return(
			<div className='products-search-container'>
				<input className="input" name='search' placeholder='Search for a car' onChange={(e) => this.searchProduct(e)} />
			</div>
			);
	}
}

export default ProductsSearch;
