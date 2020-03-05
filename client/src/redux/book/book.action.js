import axios from 'axios';

import bookTypes from './book.types';
import { url } from '../../config/environment';

// GET ALL BOOKS
const getBooksStart = () => ({
  type: bookTypes.GET_BOOKS_START
});

const getBooksSuccess = books => ({
  type: bookTypes.GET_BOOKS_SUCCESS,
  payload: books
});

const getBooksFailure = error => ({
  type: bookTypes.GET_BOOKS_FAILURE,
  payload: error
});

export const getBooksAsync = filter => async dispatch => {
  dispatch(getBooksStart());
  try {
    if (filter) {
      const books = await axios.get(`${url}/api/v1/books`);
      dispatch(getBooksSuccess(books.data.data.books));
    } else {
      const books = await axios.get(`${url}/api/v1/books`);
      dispatch(getBooksSuccess(books.data.data.books));
    }
  } catch (error) {
    dispatch(getBooksFailure(error));
  }
};

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

// CLEAR BOOK
export const clearBook = () => ({
  type: bookTypes.CLEAR_BOOK
});

// CLEAR BOOK
export const clearBooks = () => ({
  type: bookTypes.CLEAR_BOOKS
});

// GET FILTER
const getFilterStart = () => ({
  type: bookTypes.GET_FILTER_START
});

const getFilterSuccess = filter => ({
  type: bookTypes.GET_FILTER_SUCCESS,
  payload: filter
});

const getFilterFailure = error => ({
  type: bookTypes.GET_FILTER_FAILURE,
  payload: error
});

export const getFilterAsync = () => async dispatch => {
  dispatch(getFilterStart());

  try {
    const data = await axios.get(`${url}/api/v1/books/filter`);
    dispatch(getFilterSuccess(data.data.filter));
  } catch (error) {
    dispatch(getFilterFailure(error));
  }
};
