import axios from 'axios';
import profileTypes from './profile.types';
import url from '../../config/environment';

// GET ALL USERS
const getAllUsersStart = () => ({
  type: profileTypes.GET_ALL_USERS_START
});

const getAllUsersSuccess = users => ({
  type: profileTypes.GET_ALL_USERS_SUCCESS,
  payload: users
});

const getAllUsersFailure = error => ({
  type: profileTypes.GET_ALL_USERS_FAILURE,
  payload: error
});

export const getAllUsersAsync = () => async dispatch => {
  dispatch(getAllUsersStart());

  try {
    const users = await axios.get(`${url}/api/v1/users`);
    dispatch(getAllUsersSuccess(users));
  } catch (error) {
    dispatch(getAllUsersFailure(error));
  }
};

// GET USER
const getUserStart = () => ({
  type: profileTypes.GET_USER_START
});

const getUserSuccess = users => ({
  type: profileTypes.GET_USER_SUCCESS,
  payload: users
});

const getUserFailure = error => ({
  type: profileTypes.GET_USER_FAILURE,
  payload: error
});

export const getUserAsync = id => async dispatch => {
  dispatch(getUserStart());

  try {
    const users = await axios.get(`${url}/api/v1/users/${id}`);
    dispatch(getUserSuccess(users));
  } catch (error) {
    dispatch(getUserFailure(error));
  }
};

// CLEAR USERS
export const clearUsers = () => ({
  type: profileTypes.CLEAR_USERS
});

// CLEAR USER
export const clearUser = () => ({
  type: profileTypes.CLEAR_USER
});
