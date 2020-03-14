import axios from 'axios';
import userTypes from './user.types';
import { url } from '../../config/environment';
import setAuthToken from '../../utils/setAuthToken';

// SET CURRENT USER
const setCurrentUserStart = () => ({
  type: userTypes.SET_CURRENT_USER_START
});

const setCurrentUserSuccess = data => ({
  type: userTypes.SET_CURRENT_USER_SUCCESS,
  payload: data
});

const setCurrentUserFailure = error => ({
  type: userTypes.SET_CURRENT_USER_FAILURE,
  payload: error
});

export const setCurrentUserAsync = () => async dispatch => {
  if (localStorage.getItem('token')) {
    setAuthToken(localStorage.getItem('token'));
  }
  dispatch(setCurrentUserStart());
  try {
    const res = await axios.get(`${url}/api/v1/users/getMe`);
    dispatch(setCurrentUserSuccess(res.data.data));
  } catch (error) {
    dispatch(setCurrentUserFailure(error.response));
  }
};

const loginStart = () => ({
  type: userTypes.LOGIN_START
});

const loginSuccess = data => ({
  type: userTypes.LOGIN_SUCCESS,
  payload: data
});

const loginFailure = error => ({
  type: userTypes.LOGIN_FAILURE,
  payload: error
});

export const loginAsync = data => async dispatch => {
  dispatch(loginStart());
  try {
    const userData = await axios.post(`${url}/api/v1/users/login`, data);
    console.log('fff', userData);
    dispatch(loginSuccess(userData.data));
  } catch (error) {
    console.log('e', error.response);
    dispatch(loginFailure(error.response));
  }
};

// REGISTER
const registerStart = () => ({
  type: userTypes.REGISTER_START
});

const registerSuccess = data => ({
  type: userTypes.REGISTER_SUCCESS,
  payload: data
});

const registerFailure = error => ({
  type: userTypes.REGISTER_FAILURE,
  payload: error
});

export const registerAsync = data => async dispatch => {
  dispatch(registerStart());
  try {
    const userData = await axios.post(`${url}/api/v1/users/signup`, data);
    dispatch(registerSuccess(userData.data));
  } catch (error) {
    dispatch(registerFailure(error.response));
  }
};

// LOGOUT
export const logout = () => ({
  type: userTypes.LOGOUT
});

// CLEAR ERROR
export const clearError = () => ({
  type: userTypes.CLEAR_ERROR
});
