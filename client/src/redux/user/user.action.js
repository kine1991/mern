import axios from 'axios';
import userTypes from './user.types';
import { url } from '../../config/environment';
import setAuthToken from '../../utils/setAuthToken';

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
    console.log('userData2');
    console.log(userData);
    dispatch(loginSuccess(userData.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};

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
    // console.log('res2');
    console.log(res);
  } catch (error) {
    dispatch(setCurrentUserFailure(error));
  }
};
