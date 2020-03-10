import profileTypes from './profile.types';

const INITIAL_STATE = {
  user: null,
  users: null,
  isFetching: false,
  error: null
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // GET ALL USERS
    case profileTypes.GET_ALL_USERS_START:
      return {
        ...state,
        isFetching: true
      };
    case profileTypes.GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        users: action.payload
      };
    case profileTypes.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // GET USER
    case profileTypes.GET_USER_START:
      return {
        ...state,
        isFetching: true
      };
    case profileTypes.GET_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.payload
      };
    case profileTypes.GET_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    // CLEAR USERS
    case profileTypes.CLEAR_USERS:
      return {
        ...state,
        users: null
      };

    // CLEAR USER
    case profileTypes.CLEAR_USER:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default profileReducer;
