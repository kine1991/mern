import axios from 'axios';

import bookTypes from './book.types';
import { url } from '../../config/environment';

// GET COUNT BOOKS
const getCountBooks = countBooks => ({
  type: bookTypes.GET_COUNT_BOOKS,
  payload: countBooks
});

const resetCountBooks = () => ({
  type: bookTypes.RESET_COUNT_BOOKS
});

export const getBooksCountAsync = filter => async dispatch => {
  // let filterForCountBooks;

  // if (filter) {
  //   filterForCountBooks = filter
  //     .split('&')
  //     .filter(element => {
  //       return !(element.includes('limit') || element.includes('page'));
  //     })
  //     .join('&');
  // } else {
  //   filterForCountBooks = null;
  // }

  const filterForCountBooks = filter
    .split('&')
    .filter(element => {
      return !(element.includes('limit') || element.includes('page'));
    })
    .join('&');

  dispatch(resetCountBooks());
  try {
    const booksCount = await axios.get(
      `${url}/api/v1/books/${filterForCountBooks}`
    );
    dispatch(getCountBooks(booksCount.data.results));
  } catch (error) {
    console.log(error);
  }
};

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
      // console.log('filter222', filter);
      // console.log('filter222', filter);
      // dispatch(getCountBooks(books.data.results));
      // dispatch(getCountBooks(books.data.results));
      const books = await axios.get(`${url}/api/v1/books/${filter}`);
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

// GET BOOKS BY PUBLISHER
const getBooksByPublisherStart = () => ({
  type: bookTypes.GET_BOOKS_BY_PUBLISHER_START
});

const getBooksByPublisherSuccess = book => ({
  type: bookTypes.GET_BOOKS_BY_PUBLISHER_SUCCESS,
  payload: book
});

const getBooksByPublisherFailure = error => ({
  type: bookTypes.GET_BOOKS_BY_PUBLISHER_FAILURE,
  payload: error
});

export const getBooksByPublisherAsync = id => async dispatch => {
  dispatch(getBooksByPublisherStart());

  try {
    const books = await axios.get(
      `${url}/api/v1/books/get-books-by-publisher/${id}`
    );
    dispatch(getBooksByPublisherSuccess(books.data.data.books));
  } catch (error) {
    dispatch(getBooksByPublisherFailure(error));
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

// // SET PARAMS FOR FILTER
// export const setParamsForFilter = params => ({
//   type: bookTypes.SET_PARAMS_FOR_FILTER,
//   payload: params
// });
// SET PARAMS FOR FILTER
export const setParamsForFilter = params => {
  // console.log('params', params);
  return {
    type: bookTypes.SET_PARAMS_FOR_FILTER,
    payload: params
  };
};
