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
  CartItem
} from './header2.styles';

const Header2Component = ({ currentUser, logoutUser }) => {
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
          <StyledLink to="/users">Users</StyledLink>
          <Item onClick={logoutUser}>Logout</Item>
          <Item onClick={handleTogleCartDropdown}>
            <span>Cart</span>
            <CartItem>{cartIsOpen ? <CartDropdown setCartIsOpen={setCartIsOpen}/> : null}</CartItem>
          </Item>
        </RightItems>
      ) : (
        <RightItems>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/books">Books</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/register">Register</StyledLink>
        </RightItems>
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header2Component);
