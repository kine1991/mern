import axios from 'axios';

import bookTypes from './book.types';
import { url } from '../../config/environment';

// GET ALL BOOKS
const getAllBooksStart = () => ({
  type: bookTypes.GET_ALL_BOOKS_START
});

const getAllBooksSuccess = () => ({
  type: bookTypes.GET_ALL_BOOKS_SUCCESS
});

const getAllBooksFailure = error => ({
  type: bookTypes.GET_ALL_BOOKS_FAILURE,
  payload: error
});

// export const getAllBooksAsync = data => async dispatch => {
//   dispatch(getAllBooksStart());

//   try {
    
//   } catch (error) {
    
//   }
// }

// GET BOOK
const getBookStart = () => ({
  type: bookTypes.GET_BOOK_START
});

const getBookSuccess = book => ({
  type: bookTypes.GET_BOOK_SUCCESS,
  payload: book
});

const getBookFailure = error => ({
  type: bookTypes.GET_BOOK_FAILURE,
  payload: error
});

export const getBookAsync = id => async dispatch => {
  dispatch(getBookStart());

  try {
    const book = await axios.get(`${url}/api/v1/books/${id}`);
    dispatch(getBookSuccess(book.data.data.book));
  } catch (error) {
    dispatch(getBookFailure(error));
  }
};
