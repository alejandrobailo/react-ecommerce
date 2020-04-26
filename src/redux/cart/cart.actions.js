import CartActionTypes from "./cart.types";

export const toogleCartHidden = () => ({
  type: CartActionTypes.TOOGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

// Payload puede ser lo que nosotros queramos, en este caso sera el item que vamos a introducir en el cart
