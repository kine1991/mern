import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import bookReducer from './book/book.reducer';
import profileReducer from './profile/profile.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
  user: userReducer,
  book: bookReducer,
  profile: profileReducer,
  cart: cartReducer
});
