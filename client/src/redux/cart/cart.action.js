import cartTypes from './cart.types';

export const addItemToCart = item => {
  console.log('III', item);
  return {
    type: cartTypes.ADD_ITEM_TO_CART,
    payload: item
  };
};

// export const addItemToCart = item => ({
//   type: cartTypes.ADD_ITEM_TO_CART,
//   payload: item
// });

export const removeItemToCart = item => ({
  type: cartTypes.REMOVE_ITEM_FROM_CART,
  payload: item
});
