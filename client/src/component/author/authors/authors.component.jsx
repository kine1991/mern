import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getAllAuthorsAsync, clearAuthors } from '../../../redux/author/author.action';
import AuthorCard from '../author-card/author-card.component';
import SpinnerComponent from '../../../helper/component/spinner/spinner.component';

export const AuthorsContainer = styled.div`
  max-width: 760px;
  margin: auto;
`;

export const AuthorsTitle = styled.div`
  font-size: 36px;
  font-weight: 200;
  font-family: 'Roboto';
  text-align: center;
`;

export const Authors = styled.div``;

const AuthorsComponent = ({ authors, isFetching, getAllAuthors, clearAuthors }) => {
  React.useEffect(() => {
    getAllAuthors();

    return () => {
      clearAuthors();
    };
  }, []);

  if (isFetching) {
    return <SpinnerComponent color="gray" />;
  }
  return (
    <AuthorsContainer>
      <AuthorsTitle>Authors</AuthorsTitle>
      <Authors>
        {authors.map(author => (
          <AuthorCard author={author} key={author._id} />
        ))}
      </Authors>
    </AuthorsContainer>
  );
};

const mapStateToProps = state => ({
  authors: state.author.authors,
  isFetching: state.author.isFetching
});

const mapDispatchToProps = dispatch => ({
  getAllAuthors: () => dispatch(getAllAuthorsAsync()),
  clearAuthors: () => dispatch(clearAuthors())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsComponent);
