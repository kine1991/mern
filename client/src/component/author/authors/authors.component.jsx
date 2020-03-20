import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getAllAuthorsAsync } from '../../../redux/author/author.action';
import AuthorCard from '../author-card/author-card.component';

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

const AuthorsComponent = ({ authors, getAllAuthors }) => {
  React.useEffect(() => {
    getAllAuthors();
  }, []);

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
  authors: state.author.authors
});

const mapDispatchToProps = dispatch => ({
  getAllAuthors: () => dispatch(getAllAuthorsAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsComponent);
