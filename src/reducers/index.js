import { combineReducers } from 'redux';
import ProductsReducer from './productsReducer';
import CartReducer from './cartReducer';

const rootReducer = combineReducers({
	ProductsReducer: ProductsReducer,
	CartReducer: CartReducer,
});

export default rootReducer;