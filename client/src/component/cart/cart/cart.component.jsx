import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { addItemToCart, removeItemFromCart } from '../../../redux/cart/cart.action';
import { CartContainer, Title, Items, Item, ImageContainer, Image, MainBookInfo, OtherBookInfo, BookTitle, BookPrice, BookGenre, BookPriceDiscount, BookAuthor, BookQuantityContainer, BookQuantity, BookQuantityI, RemoveIconI, BookTotalPrice, TotalPrice, TotalPriceAndQuantitySmallDispaly, Spacer, ButtonBack, LeftIcon } from './cart.styles';

const CartComponent = ({ cartItems, totalPrice, addItemToCart, removeItemFromCart }) => {
  const history = useHistory();
  return (
    <CartContainer>
      <ButtonBack onClick={() => history.goBack()}>
        <LeftIcon>
          <i className="fa fa-arrow-left" />
        </LeftIcon>
        <span className="button-back-text">Back</span>
      </ButtonBack>
      <br />
      <Title>Cart</Title>
      <Items>
        {cartItems.map(cartItem => (
          <Item key={cartItem._id}>
            <ImageContainer>
              {/* <Image src=""{cartItems.imageThumbnailUrl}"" alt=""/> */}
              <Image src="https://sun9-53.userapi.com/c848528/v848528866/959a3/YiznGf49XW0.jpg" alt=""/>
            </ImageContainer>
            <MainBookInfo>
              <BookTitle>{cartItem.name}</BookTitle>
              <BookAuthor>{cartItem.author}</BookAuthor>
              <BookGenre>{cartItem.genre}</BookGenre>
              <BookPrice>{cartItem.price} $</BookPrice>
              <BookPriceDiscount>{cartItem.priceDiscount} $</BookPriceDiscount>
              <Spacer />
              <TotalPriceAndQuantitySmallDispaly>
                <BookQuantityContainer>
                  <BookQuantityI className="fa fa-angle-left" onClick={() => removeItemFromCart(cartItem)}/>
                  <BookQuantity>{cartItem.quantity}</BookQuantity>
                  <BookQuantityI className="fa fa-angle-right" onClick={() => addItemToCart(cartItem)} />
                </BookQuantityContainer>
                <BookTotalPrice>{cartItem.quantity * cartItem.priceDiscount} $</BookTotalPrice>
              </TotalPriceAndQuantitySmallDispaly>
              <br />
              <RemoveIconI className="fa fa-trash" />
            </MainBookInfo>
            <OtherBookInfo />
            <OtherBookInfo>
              <BookQuantityContainer>
                <BookQuantityI className="fa fa-angle-left" onClick={() => removeItemFromCart(cartItem)} />
                <BookQuantity>{cartItem.quantity}</BookQuantity>
                <BookQuantityI className="fa fa-angle-right" onClick={() => addItemToCart(cartItem)} />
              </BookQuantityContainer>
            </OtherBookInfo>
            <OtherBookInfo>
              <BookTotalPrice>{cartItem.quantity * cartItem.priceDiscount} $</BookTotalPrice>
            </OtherBookInfo>
          </Item>
        ))}
      </Items>
      <TotalPrice>Total Price: $ {totalPrice}</TotalPrice>
    </CartContainer>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  totalPrice: state.cart.cartItems.reduce((acc, cur) => {
    return cur.priceDiscount * cur.quantity + acc;
  }, 0)
});

const mapDispatchToProps = dispatch => ({
  addItemToCart: id => dispatch(addItemToCart(id)),
  removeItemFromCart: id => dispatch(removeItemFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
