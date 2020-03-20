import axios from 'axios';
import authorTypes from './author.types';
import url from '../../config/environment';

const getAllAuthorsStart = () => ({
  type: authorTypes.GET_ALL_AUTHORS_START
});

const getAllAuthorsSuccess = authors => ({
  type: authorTypes.GET_ALL_AUTHORS_SUCCESS,
  payload: authors
});

const getAllAuthorsFailure = error => ({
  type: authorTypes.GET_ALL_AUTHORS_FAILURE,
  payload: error
});

export const getAllAuthorsAsync = () => async dispatch => {
  dispatch(getAllAuthorsStart());

  try {
    const authors = await axios.get(`${url}/api/v1/authors`);
    dispatch(getAllAuthorsSuccess(authors.data.data.authors));
  } catch (error) {
    dispatch(getAllAuthorsFailure(error));
  }
};
