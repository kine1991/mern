import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { addItemToCart } from '../../../redux/cart/cart.action';

export const SingleBookCardSimpleContainer = styled.div`
  max-width: 760px;
  padding: 1rem;
  margin-bottom: 2rem;
  box-shadow: 4px 6px 10px 4px rgba(0, 0, 0, 0.15);
`;

export const Card = styled.div`
  display: flex;
  /* background: ivory; */
`;

export const ImageContainer = styled.div`
  flex: 1;
  @media (max-width: 992px) {
    flex: 2;
  }
  @media (max-width: 768px) {
    flex: 3;
  }
`;

export const ContentContainer = styled.div`
  flex: 5;
  margin-left: 2rem;
  padding: 1rem;
  @media (max-width: 992px) {
    flex: 7;
    margin-left: 1rem;
  }
`;

export const Image = styled.img`
  /* height: 100%; */
  width: 100%;
`;

export const BookTitle = styled.div`
  color: #5c5c5c;
  font-size: 16px;
`;

export const BookPrice = styled.span`
  color: #999999;
  font-size: 18px;
  text-decoration: line-through;
  margin-right: 1rem;
`;

export const BookGenre = styled.div`
  color: #5c5c5c;
  font-size: 12px;
`;

export const BookDescription = styled.div`
  color: black;
  font-size: 12px;
`;

export const BookPriceDiscount = styled.span`
  color: black;
  font-size: 18px;
`;

export const BookAuthor = styled.div`
  color: #9e866b;
  font-size: 14px;
`;

const SingleBookCardSimple = ({ book }) => {
  return (
    <SingleBookCardSimpleContainer>
      <Card>
        <ImageContainer>
          <Image src={book.imageUrl} />
        </ImageContainer>
        <ContentContainer>
          <BookTitle>{book.name}</BookTitle>
          <BookAuthor>{book.author}</BookAuthor>
          <BookGenre>{book.genre}</BookGenre>
          <BookPrice>{book.price} $</BookPrice>
          <BookPriceDiscount>{book.priceDiscount} $</BookPriceDiscount>
          {/* <BookDescription>{book.description}</BookDescription> */}
          {book.description.length < 200 ? <BookDescription>{book.description}</BookDescription> : <BookDescription>{book.description.slice(0, 200)}...</BookDescription>}
        </ContentContainer>
      </Card>
    </SingleBookCardSimpleContainer>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleBookCardSimple);
