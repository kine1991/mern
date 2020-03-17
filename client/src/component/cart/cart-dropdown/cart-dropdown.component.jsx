import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

export const CartDropdownContainer = styled.div`
  position: absolute;
  right: 5px;
  top: 40px;

  border: 1px solid black;
  height: 300px;
  width: 200px;
  /* z-index: 990 !important; */
  background-color: white;
  opacity: 1;
  text-align: center;
`;

export const CartDropdownItems = styled.div`
  height: 240px;
  overflow: scroll;
  margin: 0.5rem;
`;

export const CartDropdownItem = styled.div`
  margin-bottom: 1rem;
  height: 70px;
  display: flex;
  cursor: pointer;
`;

export const CartDropdownItemLeft = styled.div`
  flex: 1;
`;

export const CartDropdownItemRight = styled.div`
  flex: 2;
  margin: 0.4rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Button = styled.div`
  display: inline-block;
  background-color: #101d2c;
  color: #fff;
  border: none;
  border-radius: 0;
  /* font-family: 'Josefin Sans', sans-serif; */
  font-size: 1rem;
  /* text-transform: uppercase; */
  /* padding: 0; */
  padding: 0.3rem 1.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #172a40;
  }
`;

export const Name = styled.div`
  font-size: 8px;
  font-weight: 200;
`;

export const Author = styled.div`
  font-size: 8px;
  font-weight: 300;
`;

export const PriceByCount = styled.div`
  font-size: 10px;
  font-weight: 400;
`;

const CartDropdown = ({ cartItems, setCartIsOpen }) => {
  const history = useHistory();
  const wrapperRef = React.useRef(null);

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setCartIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <CartDropdownContainer ref={wrapperRef}>
      <CartDropdownItems>
        {cartItems.map(cartItem => (
          <CartDropdownItem key={cartItem._id} onClick={() => history.push(`/books/${cartItem._id}`)}>
            <CartDropdownItemLeft>
              {/* <Image src=""{cartItems.imageThumbnailUrl}"" alt=""/> */}
              <Image src="https://sun9-53.userapi.com/c848528/v848528866/959a3/YiznGf49XW0.jpg" alt=""/>
            </CartDropdownItemLeft>
            <CartDropdownItemRight>
              <Name>{cartItem.name}</Name>
              <Author>{cartItem.author}</Author>
              <PriceByCount>{cartItem.priceDiscount} x {cartItem.quantity}</PriceByCount>
            </CartDropdownItemRight>
          </CartDropdownItem>
        ))}
      </CartDropdownItems>
      <Button onClick={() => history.push('/cart')}>Go To Cart</Button>
    </CartDropdownContainer>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

// const mapDispatchToProps = dispatch => ({
//   logoutUser: () => dispatch(logout())
// });

export default connect(mapStateToProps, null)(CartDropdown);
