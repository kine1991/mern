import bookTypes from './book.types';

const INITIAL_STATE = {
  books: null,
  book: null,
  error: null,
  isFetching: false
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET ALL BOOKS
    case bookTypes.GET_ALL_BOOKS_START:
      return {
        ...state,
        isFetching: true
      };
    case bookTypes.GET_ALL_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: action.payload
      };
    case bookTypes.GET_ALL_BOOKS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // GET BOOK
    case bookTypes.GET_BOOK_START:
      return {
        ...state,
        isFetching: true
      };
    case bookTypes.GET_BOOK_SUCCESS:
      return {
        ...state,
        isFetching: false,
        book: action.payload
      };
    case bookTypes.GET_BOOK_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default bookReducer;
