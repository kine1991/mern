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

// GET AUTHOR
const getAuthorStart = () => ({
  type: authorTypes.GET_AUTHOR_START
});

const getAuthorSuccess = author => ({
  type: authorTypes.GET_AUTHOR_SUCCESS,
  payload: author
});

const getAuthorFailure = error => ({
  type: authorTypes.GET_AUTHOR_FAILURE,
  payload: error
});

export const getAuthorAsync = authorId => async dispatch => {
  dispatch(getAuthorStart());

  try {
    const author = await axios.get(`${url}/api/v1/authors/${authorId}`);
    dispatch(getAuthorSuccess(author.data.data.author));
  } catch (error) {
    dispatch(getAuthorFailure(error));
  }
};

export const clearAuthor = () => ({
  type: authorTypes.CLEAR_AUTHOR
});

export const clearAuthors = () => ({
  type: authorTypes.CLEAR_AUTHORS
});
