/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import { useHistory, useParams } from 'react-router-dom';

import { clearUser, getUserAsync } from '../../../redux/profile/profile.action';
import {
  getBooksByPublisherAsync,
  clearBooks
} from '../../../redux/book/book.action';

const UserContainer = styled.div`
  margin: auto auto;
  max-width: 760px;
  min-height: 50vh;
`;

export const UserPhotoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 2rem;
`;
export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
`;
export const UserSection = styled.div`
  display: flex;
  padding: 1rem;
  /* background-color: #f6f6f6; */
  margin-bottom: 1rem;
`;
export const UserInfo = styled.div`
  /* display: flex; */
`;

export const Name = styled.div`
  font-size: 16px;
  transition: all 0.3s;
  &:hover {
    color: #b28451;
  }
  text-transform: uppercase;
  cursor: pointer;
`;

export const Email = styled.div`
  font-size: 14px;
`;

export const BooksSection = styled.div`
  /* font-size: 14px; */
`;

export const BookSection = styled.div`
  /* font-size: 14px; */
  background-color: #f6f6f6;
  margin-bottom: 2rem;
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

export const BookImageContainer = styled.div`
  width: 160px;
  height: 160px;
  margin-right: 2rem;
`;
export const BookImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const BookTitle = styled.div`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 400;
`;

export const BookAuthor = styled.div`
  font-size: 16px;
  color: gray;
`;
export const BookCreatedAt = styled.div`
  font-size: 8px;
  color: gray;
`;

export const OtherContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: start;
`;

export const OtherContainerChilren = styled.div`
  padding: 0.2rem;
`;

export const UnderlineHelper = styled.span`
  text-decoration: underline;
  font-weight: 400;
`;
export const BookInfo = styled.div`
  width: 100%;
  /* display: flex; */
`;

// eslint-disable-next-line no-shadow
const UserComponent = ({
  user,
  books,
  getUser,
  getBooksByPublisher,
  clearUser
}) => {
  // const history = useHistory();
  // const { userData } = user.data.data;
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
    console.log(books);
  }, [user]);
  React.useEffect(() => {
    console.log(books);
  }, [books]);

  if (!user) return <h5>loading...</h5>;
  const userData = user.data.data.user;
  return (
    <UserContainer>
      <UserSection>
        <UserPhotoContainer>
          {userData.photo ? (
            <UserPhoto src={userData.photo} />
          ) : (
            <UserPhoto src="https://i.ibb.co/VWnsKfS/user0.jpg" />
          )}
        </UserPhotoContainer>
        <UserInfo>
          <Name>{userData.name}</Name>
          <Email>{userData.email}</Email>
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
          <h5>Loading...</h5>
        )}
      </BooksSection>
    </UserContainer>
  );
};

const mapStateToProps = state => ({
  user: state.profile.user,
  books: state.book.books
});

const mapDispatchToProps = dispatch => ({
  getUser: id => dispatch(getUserAsync(id)),
  getBooksByPublisher: id => dispatch(getBooksByPublisherAsync(id)),
  clearUser: () => dispatch(clearUser()),
  clearBooks: () => dispatch(clearBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
