import authorTypes from './author.types';

const INITIAL_STATE = {
  authors: [],
  author: null,
  isFetching: true,
  error: null
};

const authorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
        authors: action.payload,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authorReducer;
