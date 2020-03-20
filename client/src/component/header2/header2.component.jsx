import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';
import { logout } from '../../redux/user/user.action';
import {
  HeaderContainer,
  Spacer,
  RightItems,
  LeftItems,
  Item,
  StyledLink,
  LogoContainer,
  Logo,
  LogoTitle,
  CartItem,
  CartIcon,
  CartIconCount
} from './header2.styles';

const Header2Component = ({ currentUser, count, logoutUser }) => {
  const history = useHistory();
  const [cartIsOpen, setCartIsOpen] = React.useState(false);

  const handleTogleCartDropdown = () => {
    setCartIsOpen(!cartIsOpen);
    // setCartIsOpen(!cartIsOpen);
  };

  return (
    <HeaderContainer>
      <LeftItems onClick={() => history.push('/')}>
        <LogoContainer>
          <Logo src="/images/bookshop-icon.png" />
        </LogoContainer>
        <LogoTitle>Book Shop</LogoTitle>
      </LeftItems>
      <Spacer />
      {currentUser ? (
        <RightItems>
          <StyledLink exact to="/">
            Home
          </StyledLink>
          <StyledLink to="/books">Books</StyledLink>
          <StyledLink to="/authors">Authors</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
          <Item onClick={logoutUser}>Logout</Item>
          <Item onClick={handleTogleCartDropdown}>
            <CartIcon className="fa fa-shopping-cart fa-2x">
              <CartIconCount>{count}</CartIconCount>
            </CartIcon>
            {/* <span>Cart</span> */}
            <CartItem>{cartIsOpen ? <CartDropdown setCartIsOpen={setCartIsOpen}/> : null}</CartItem>
          </Item>
        </RightItems>
      ) : (
        <RightItems>
          <StyledLink exact to="/">Home</StyledLink>
          <StyledLink to="/authors">Authors</StyledLink>
          <StyledLink to="/books">Books</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
          <Item onClick={handleTogleCartDropdown}>
            <CartIcon className="fa fa-shopping-cart fa-2x">
              <CartIconCount>{count}</CartIconCount>
            </CartIcon>
            {/* <span>Cart</span> */}
            <CartItem>{cartIsOpen ? <CartDropdown setCartIsOpen={setCartIsOpen}/> : null}</CartItem>
          </Item>
        </RightItems>
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  count: state.cart.cartItems.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0)
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header2Component);
