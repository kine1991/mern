/* eslint-disable no-use-before-define */
import cartTypes from './cart.types';

const INITIAL_STATE = {
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCardHelper(state.cartItems, action.payload)
      };
    case cartTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: deleteItemFromCartHelper(state.cartItems, action.payload)
      };
    case cartTypes.LOAD_CART_FROM_LS:
      return {
        ...state,
        cartItems: action.payload
      };
    default:
      return state;
  }
};

// HELPER
const deleteItemFromCartHelper = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => {
    return cartItem._id === item._id;
  });
  if (existingItem.quantity === 1) {
    return cartItems.filter(cartItem => {
      return cartItem._id !== item._id;
    });
  }
  if (existingItem.quantity > 1) {
    return cartItems.map(cartItem => {
      if (cartItem._id === item._id) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
        // eslint-disable-next-line no-else-return
      } else {
        return cartItem; // безполезное действие
      }
    });
  }
};

const addItemToCardHelper = (cartItems, item) => {
  const existingItem = cartItems.find(cartItem => {
    return cartItem._id === item._id;
  });
  if (existingItem) {
    return cartItems.map(cartItem => {
      return cartItem._id === item._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...item, quantity: 1 }];
};

export default cartReducer;
