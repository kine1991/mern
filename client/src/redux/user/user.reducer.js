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
        error: null,
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
        error: action.payload.data.message
        // token: null
      };

    // LOGIN
    case userTypes.LOGIN_START:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case userTypes.LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload.data.user,
        token: action.payload.token
      };
    case userTypes.LOGIN_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        isFetching: false,
        error: action.payload.data.message,
        token: null
      };

    // REGISTER
    case userTypes.REGISTER_START:
      return {
        ...state,
        error: null,
        isFetching: true
      };
    case userTypes.REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        isFetching: false,
        currentUser: action.payload.data.user,
        token: action.payload.token
      };
    case userTypes.REGISTER_FAILURE:
      localStorage.removeItem('token');
      return {
        ...state,
        isFetching: false,
        error: action.payload.data.message,
        token: null
      };
    // LOGOUT
    case userTypes.LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: null,
        token: null,
        error: null
      };
    // CLEAR ERROR
    case userTypes.CLEAR_ERROR:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default userReducer;
