import cartTypes from './cart.types';

export const addItemToCart = item => ({
  type: cartTypes.ADD_ITEM_TO_CART,
  payload: item
});

export const removeItemFromCart = item => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});

export const loadCartFromLS = items => ({
  type: cartTypes.LOAD_CART_FROM_LS,
  payload: items
});
