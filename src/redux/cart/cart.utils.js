export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

	// Para que el componente se re-renderice tenemos que crear un nuevo estado por eso usamos map, para crear un array nuevo y que se actualice al detectarlo.
	if (existingCartItem) {
		return cartItems.map(
			(cartItem) =>
				cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
		);
	}

	//   Si el objeto en el carro es nuevo devolvemos una copia del array con el nuevo objeto al final
	return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToRemove.id);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
	}

	return cartItems.map(
		(cartItem) =>
			cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
	);
};
