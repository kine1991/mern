/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';

import Spinner from '../../../helper/component/spinner/spinner.component';
import { getBookAsync, clearBook } from '../../../redux/book/book.action';
import {
  BookPageContainer,
  PublisherContainer,
  UserPhotoContainer,
  UserPhoto,
  PublisherInfo,
  BookContainer,
  BookImageContainer,
  BookImage,
  BookContent,
  BookCreatedAt,
  BookTitle,
  BookAuthor,
  BookGenre,
  BookPage,
  BookDescription,
  Price,
  PriceDiscount,
  UnderlineHelper,
  LeftIcon,
  TransitionTextHelper,
  ButtonBack,
  Button
} from './book.styles';

// https://i.ibb.co/VWnsKfS/user0.jpg

const BookComponent = ({ book, getBook, clearBookAfterUnmount }) => {
  const history = useHistory();
  const match = useRouteMatch();

  React.useEffect(() => {
    // fetchData(match.params.id);
    getBook(match.params.id);
    return () => {
      clearBookAfterUnmount();
    };
  }, []);

  if (!book) return <Spinner color="gray" />;
  return (
    <BookPageContainer>
      <ButtonBack onClick={() => history.push('/books')}>
        <LeftIcon>
          <i className="fa fa-arrow-left" />
        </LeftIcon>
        <span className="button-back-text">Back</span>
      </ButtonBack>
      <br />
      <PublisherContainer>
        <UserPhotoContainer>
          {book.publisher.photo ? (
            <UserPhoto src={book.publisher.photo} />
          ) : (
            <UserPhoto src="https://i.ibb.co/VWnsKfS/user0.jpg" />
          )}
        </UserPhotoContainer>
        <PublisherInfo>
          <div>
            <UnderlineHelper>publisher</UnderlineHelper>
            <span>: </span>
            <TransitionTextHelper>{book.publisher.name}</TransitionTextHelper>
          </div>
        </PublisherInfo>
      </PublisherContainer>
      <hr />
      <BookContainer>
        <BookImageContainer>
          {/* <BookImage src="https://cdn.book24.ru/v2/ITD000000001070688/COVER/cover3d1__w674.webp" /> */}
          <BookImage src="https://avatars.mds.yandex.net/get-zen_doc/16074/pub_5e42ff7f0c1c620fd8bd0895_5e4301c12e9e63535024e747/scale_1200" />
        </BookImageContainer>
        <BookContent>
          <BookCreatedAt>
            {moment(book.createdAt, 'YYYYMMDD').fromNow()}
          </BookCreatedAt>
          <BookTitle>{book.name}</BookTitle>
          <BookAuthor>
            <UnderlineHelper>Author</UnderlineHelper>
            <span>: </span>
            <TransitionTextHelper>{book.author}</TransitionTextHelper>
          </BookAuthor>
          <BookGenre>
            <UnderlineHelper>Genre</UnderlineHelper>
            <span>: </span>
            <TransitionTextHelper>{book.genre}</TransitionTextHelper>
          </BookGenre>
          <BookPage>
            <UnderlineHelper>Genre</UnderlineHelper>
            <span>: </span>
            <TransitionTextHelper>{book.pages}</TransitionTextHelper>
          </BookPage>
          <BookDescription>
            <UnderlineHelper>Description</UnderlineHelper>
            <span>: </span>
            {book.description}
          </BookDescription>
          <Price>
            Old Price
            <span>: </span>
            {book.price}
          </Price>
          <PriceDiscount>
            New Price
            <span>: </span>
            {book.priceDiscount}
          </PriceDiscount>
          <br />
          <Button>
            <LeftIcon>
              <i className="fa fa-shopping-cart" />
            </LeftIcon>
            <span>Add To Cart</span>
          </Button>
        </BookContent>
      </BookContainer>
    </BookPageContainer>
  );
};

const mapStateToProps = state => ({
  book: state.book.book,
  isFetching: state.book.isFetching
});

const mapDispatchToProps = dispatch => ({
  getBook: id => dispatch(getBookAsync(id)),
  clearBookAfterUnmount: () => dispatch(clearBook())
});

export default connect(mapStateToProps, mapDispatchToProps)(BookComponent);
