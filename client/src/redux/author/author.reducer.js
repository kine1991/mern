import authorTypes from './author.types';

const INITIAL_STATE = {
  authors: [],
  author: null,
  isFetching: true,
  error: null
};

const authorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET ALL AUTHORS
    case authorTypes.GET_ALL_AUTHORS_START:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case authorTypes.GET_ALL_AUTHORS_SUCCESS:
      return {
        ...state,
        authors: action.payload,
        isFetching: false
      };
    case authorTypes.GET_ALL_AUTHORS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // GET AUTHOR
    case authorTypes.GET_AUTHOR_START:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case authorTypes.GET_AUTHOR_SUCCESS:
      return {
        ...state,
        author: action.payload,
        isFetching: false
      };
    case authorTypes.GET_AUTHOR_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // CLEAR AUTHOR
    case authorTypes.CLEAR_AUTHOR:
      return {
        ...state,
        author: null
      };

    // CLEAR AUTHORS
    case authorTypes.CLEAR_AUTHORS:
      return {
        ...state,
        authors: []
      };
    default:
      return state;
  }
};

export default authorReducer;
