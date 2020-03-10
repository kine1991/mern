import bookTypes from './book.types';

const INITIAL_STATE = {
  books: null,
  book: null,
  error: null,
  isFetching: true,
  countBooks: undefined,
  countBooksIsResolve: false,
  filterParams: {
    genre: [],
    author: [],
    limit: 20,
    page: 1
  }
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

    // GET BOOKS BY PUBLISHER
    case bookTypes.GET_BOOKS_BY_PUBLISHER_START:
      return {
        ...state,
        isFetching: true
      };
    case bookTypes.GET_BOOKS_BY_PUBLISHER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        books: action.payload
      };
    case bookTypes.GET_BOOKS_BY_PUBLISHER_FAILURE:
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

    // SET PARAMS FOR FILTER
    case bookTypes.SET_PARAMS_FOR_FILTER:
      return {
        ...state,
        filterParams: action.payload
      };

    // GET COUNT BOOKS
    case bookTypes.GET_COUNT_BOOKS:
      return {
        ...state,
        countBooks: action.payload,
        countBooksIsResolve: true
      };

    case bookTypes.RESET_COUNT_BOOKS:
      return {
        ...state,
        countBooks: undefined,
        countBooksIsResolve: false
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
