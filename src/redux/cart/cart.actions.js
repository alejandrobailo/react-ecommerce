import CartActionTypes from './cart.types';

export const toogleCartHidden = () => ({
	type: CartActionTypes.TOOGLE_CART_HIDDEN
});

export const addItem = (item) => ({
	type: CartActionTypes.ADD_ITEM,
	payload: item
});

export const clearItemFromCart = (item) => ({
	type: CartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item
});

export const removeItem = (item) => ({
	type: CartActionTypes.REMOVE_ITEM,
	payload: item
});

// Payload puede ser lo que nosotros queramos, en este caso sera el item que vamos a introducir en el cart
