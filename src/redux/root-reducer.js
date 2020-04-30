import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persisConfig = {
	key: 'root',
	storage,
	// Pasamos en un array que reducers queremos meter en persist
	whitelist: [ 'cart' ]
};

/* Versión sin storage:

export default combineReducers({
	user: userReducer,
	cart: cartReducer
}); */

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export default persistReducer(persisConfig, rootReducer);
