import bookTypes from './book.types';

const INITIAL_STATE = {
  books: null,
  book: null,
  error: null,
  isFetching: true
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET BOOKS
    case bookTypes.GET_BOOKS_START:
      return {
        ...state,
        isFetching: true
      };
    case bookTypes.GET_BOOKS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: action.payload
      };
    case bookTypes.GET_BOOKS_FAILURE:
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

    // GET FILTER
    case bookTypes.GET_FILTER_START:
      return {
        ...state,
        isFetching: true
      };
    case bookTypes.GET_FILTER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        filter: action.payload
      };
    case bookTypes.GET_FILTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // CLEAR BOOK
    case bookTypes.CLEAR_BOOK:
      return {
        ...state,
        book: null
      };

    // CLEAR BOOKS
    case bookTypes.CLEAR_BOOKS:
      return {
        ...state,
        books: null
      };

    default:
      return state;
  }
};

export default bookReducer;
