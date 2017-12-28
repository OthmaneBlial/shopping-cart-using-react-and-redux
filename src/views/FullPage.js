import React from 'react';
import CartPage from './CartPage';
import ProductsListPage from './ProductsListPage';

class FullPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return(
			<div>
				<div className='container'>
					<div className="columns">
					  <div className="column is-3">
					       <CartPage />
					  </div>
					  <div className="column is-9">
					       <ProductsListPage />
					  </div>
					</div>
				</div>
			</div>
			);
	}
}

export default FullPage;
