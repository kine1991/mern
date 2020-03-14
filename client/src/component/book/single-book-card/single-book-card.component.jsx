import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  SingleBookCardContainer,
  CardPicture,
  CartIcon,
  CardContent,
  Title,
  Author,
  Price,
  PriceOld,
  PriceDiscount,
  CardFooter,
  CardFooterLeft,
  Publisher,
  CardFooterRight,
  CommentIcon,
  HeartIcon,
  Card
} from './single-book-card.styles';

const SingleBookCard = ({ book }) => {
  const history = useHistory();

  const handleHeart = e => {
    e.stopPropagation();
  };
  const handleComment = e => {
    e.stopPropagation();
  };
  const handleOpen = () => {
    history.push(`/books/${book.id}`);
  };
  const handleAddToCart = e => {
    e.stopPropagation();
    console.log('handleAddToCart', book.id);
  };

  // console.log(book);
  return (
    <SingleBookCardContainer>
      <Card onClick={handleOpen}>
        <CardPicture imageUrl={book.imageUrl}>
          <CartIcon onClick={handleAddToCart}>
            <i className="fa fa-cart-plus" />
            <span> </span>
            <span>2</span>
          </CartIcon>
        </CardPicture>
        <CardContent>
          <Title>{book.name}</Title>
          <Author>{book.author}</Author>
          <Price>
            <PriceOld>
              {book.price}
              <span> </span>
              <span>$</span>
            </PriceOld>
            <PriceDiscount>
              {book.priceDiscount}
              <span> </span>
              <span>$</span>
            </PriceDiscount>
          </Price>
        </CardContent>
        <CardFooter>
          <CardFooterLeft>
            <Publisher>{book.publisher.name}</Publisher>
          </CardFooterLeft>
          <CardFooterRight>
            <CommentIcon>
              <i className="fa fa-comment" />
              <span> </span>
              <span>12</span>
            </CommentIcon>
            <HeartIcon>
              <i className="fa fa-heart" />
              <span> </span>
              <span>12</span>
            </HeartIcon>
          </CardFooterRight>
        </CardFooter>
      </Card>
    </SingleBookCardContainer>
  );
};

export default SingleBookCard;
