/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';
import {
  UserContainer,
  UserPhotoContainer,
  UserPhoto,
  UserSection,
  UserInfo,
  UserPhotoAndName,
  Name,
  Email,
  BooksSection,
  BookSection,
  BookImageContainer,
  BookImage,
  BookTitle,
  BookAuthor,
  BookCreatedAt,
  OtherContainer,
  OtherContainerChilren,
  UnderlineHelper,
  BookInfo,
  NameAndEmailContainer,
  PropertyContainer,
  PropertyContainerTop,
  PropertyContainerBottom,
  PropertyItem,
  CountValue,
  CountField,
  Badge
} from './user.styles';
import { clearUser, getUserAsync } from '../../../redux/profile/profile.action';
import {
  getBooksByPublisherAsync,
  clearBooks
} from '../../../redux/book/book.action';

// eslint-disable-next-line no-shadow
const UserComponent = ({
  user,
  books,
  count,
  allPagesCount,
  allPrice,
  maxPages,
  arrayOfGenres,
  getUser,
  getBooksByPublisher,
  clearUser
}) => {
  const { id } = useParams();
  const history = useHistory();

  React.useEffect(() => {
    getUser(id);
    return () => {
      clearUser();
      clearBooks();
    };
  }, []);

  React.useEffect(() => {
    if (user) {
      getBooksByPublisher(user.data.data.user._id);
      // getBooksByPublisher(user.data.data.user._id);
    }
  }, [user]);

  // React.useEffect(() => {
  // }, [books]);

  if (!user) return <h5>loading...</h5>;
  const userData = user.data.data.user;
  return (
    <UserContainer>
      <UserSection>
        <UserPhotoAndName>
          <UserPhotoContainer>
            {userData.photo ? (
              <UserPhoto src={userData.photo} />
            ) : (
              <UserPhoto src="https://i.ibb.co/VWnsKfS/user0.jpg" />
            )}
          </UserPhotoContainer>
          <NameAndEmailContainer>
            <Name>{userData.name}</Name>
            <Email>{userData.email}</Email>
          </NameAndEmailContainer>
        </UserPhotoAndName>
        <UserInfo>
          {books.length ? (
            <PropertyContainer>
              <PropertyContainerTop>
                <PropertyItem>
                  <CountValue>{maxPages}</CountValue>
                  <CountField>max pages</CountField>
                </PropertyItem>
                <PropertyItem>
                  <CountValue>{allPrice}</CountValue>
                  <CountField>all price</CountField>
                </PropertyItem>
                <PropertyItem>
                  <CountValue>{allPagesCount}</CountValue>
                  <CountField>all pages</CountField>
                </PropertyItem>
                <PropertyItem>
                  <CountValue>{count}</CountValue>
                  <CountField>count</CountField>
                </PropertyItem>
              </PropertyContainerTop>
              <PropertyContainerBottom>
                {arrayOfGenres.map(genre => (
                  <Badge key={genre}>{genre}</Badge>
                  // <span className="badge badge-light" key={genre}>{genre}  </span>
                ))}
              </PropertyContainerBottom>
            </PropertyContainer>
          ) : null}
        </UserInfo>
      </UserSection>
      <hr />
      <BooksSection>
        {books ? (
          books.map(book => (
            <BookSection
              key={book._id}
              onClick={() => history.push(`/books/${book._id}`)}
            >
              <BookImageContainer>
                <BookImage src={book.imageUrl} />
              </BookImageContainer>
              <BookInfo>
                <BookTitle>{book.name}</BookTitle>
                <BookAuthor>{book.author}</BookAuthor>
                <BookCreatedAt>
                  {moment(book.createdAt, 'YYYYMMDD').fromNow()}
                </BookCreatedAt>
                <OtherContainer>
                  <OtherContainerChilren>
                    <UnderlineHelper>genre</UnderlineHelper>
                    <span>: </span>
                    <span>{book.genre}</span>
                  </OtherContainerChilren>
                  <OtherContainerChilren>
                    <UnderlineHelper>pages</UnderlineHelper>
                    <span>: </span>
                    <span>{book.pages}</span>
                  </OtherContainerChilren>
                  <OtherContainerChilren>
                    <UnderlineHelper>price</UnderlineHelper>
                    <span>: </span>
                    <span>{book.price}</span>
                  </OtherContainerChilren>
                  <OtherContainerChilren>
                    <UnderlineHelper>price discount</UnderlineHelper>
                    <span>: </span>
                    <span>{book.priceDiscount}</span>
                  </OtherContainerChilren>
                </OtherContainer>
              </BookInfo>
            </BookSection>
          ))
        ) : (
          <h5>Loading.....</h5>
        )}
      </BooksSection>
    </UserContainer>
  );
};

const mapStateToProps = state => ({
  user: state.profile.user,
  books: state.book.books,
  count: state.book.books.length,
  allPagesCount: state.book.books.reduce((acc, cur) => acc + cur.pages, 0),
  allPrice: state.book.books.reduce((acc, cur) => acc + cur.price, 0),
  maxPages: state.book.books.reduce((acc, cur) => Math.max(acc, cur.pages), 0),
  arrayOfGenres: state.book.books.reduce((acc, cur) => {
    if (!acc.includes(cur.genre)) {
      return [...acc, cur.genre];
    }
    return acc;
  }, [])
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUserAsync(id)),
  getBooksByPublisher: id => dispatch(getBooksByPublisherAsync(id)),
  clearUser: () => dispatch(clearUser()),
  clearBooks: () => dispatch(clearBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
