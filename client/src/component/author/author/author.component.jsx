import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';

import { getAuthorAsync, clearAuthor } from '../../../redux/author/author.action';
import SpinnerComponent from '../../../helper/component/spinner/spinner.component';
import BooksOfAuthor from '../books-of-author/books-of-author.component';
import { AuthorContainer, AuthorConttent, ContentContainer, ImageContainer,  Image, AuthorName, AuthorDate, AuthorAbout, AuthorAboutMoreOrLess, ButtonBack, LeftIcon } from './author.styles';
import AuthorStats from '../author-stats/author-stats.component';
// eslint-disable-next-line no-shadow
const AuthorComponent = ({ author, isFetching, getAuthor, clearAuthor }) => {
  const match = useRouteMatch();
  const history = useHistory();
  const [fullAbout, setFullAbout] = React.useState(false);

  React.useEffect(() => {
    getAuthor(match.params.authorId);

    return () => {
      clearAuthor();
    };
  }, []);

  React.useEffect(() => {
    if (author) {
    }
  }, [author]);

  if (!author) {
    return <SpinnerComponent color="gray" />;
  }
  return (
    <AuthorContainer>
      <ButtonBack onClick={() => history.goBack()}>
        <LeftIcon>
          <i className="fa fa-arrow-left" />
        </LeftIcon>
        <span className="button-back-text">Back</span>
      </ButtonBack>
      <AuthorConttent>
        <ImageContainer>
          {author.imageUrl ? (
            <Image src={author.imageUrl} />
          ) : (
            <Image src="https://s.gr-assets.com/assets/nophoto/user/u_200x266-e183445fd1a1b5cc7075bb1cf7043306.png" />
          )}
        </ImageContainer>
        <ContentContainer>
          <AuthorName><strong>name: </strong>{author.name}</AuthorName>
          {author.born ? <AuthorDate><strong>born: </strong>{moment(Date.parse(author.born)).format('MM.DD.YYYY')}</AuthorDate> : null}
          {author.died ? <AuthorDate><strong>died: </strong>{moment(Date.parse(author.died)).format('MM.DD.YYYY')}</AuthorDate> : null}
          {(() => {
            if (!author.about) {
              return null;
            } else if (author.about.length <= 500) {
              return <AuthorAbout><strong>about: </strong>{author.about}</AuthorAbout>
            } else if (author.about.length > 500 && !fullAbout) {
              return <AuthorAbout><strong>about: </strong>{author.about.slice(0, 500)}... <AuthorAboutMoreOrLess onClick={() => setFullAbout(!fullAbout)}>more</AuthorAboutMoreOrLess></AuthorAbout>
            } else if (author.about.length > 500 && fullAbout) {
              return <AuthorAbout><strong>about: </strong>{author.about}<AuthorAboutMoreOrLess onClick={() => setFullAbout(!fullAbout)}> less</AuthorAboutMoreOrLess></AuthorAbout>
            }
          })()}
        </ContentContainer>
      </AuthorConttent>
      <AuthorStats books={author.books} />
      <BooksOfAuthor books={author.books} />
    </AuthorContainer>
  );
};

const mapStateToProps = state => ({
  author: state.author.author,
  isFetching: state.author.isFetching
});

const mapDispatchToProps = dispatch => ({
  getAuthor: authorId => dispatch(getAuthorAsync(authorId)),
  clearAuthor: () => dispatch(clearAuthor())
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorComponent);
