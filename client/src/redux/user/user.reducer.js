import userTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isFetching: false,
  token: localStorage.getItem('token')
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // SET CURRENT USER
    case userTypes.SET_CURRENT_USER_START:
      return {
        ...state,
        isFetching: true
      };
    case userTypes.SET_CURRENT_USER_SUCCESS:
      // localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload.user
        // token: action.payload.token
      };
    case userTypes.SET_CURRENT_USER_FAILURE:
      // localStorage.removeItem('token');
      return {
        ...state,
        isFetching: false,
        error: action.payload
        // token: null
      };
    // LOGIN
    case userTypes.LOGIN_START:
      return {
        ...state,
        isFetching: true
      };
    case userTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload,
        token: action.payload.token
      };
    case userTypes.LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        token: null
      };
    default:
      return state;
  }
};

export default userReducer;
