import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import CartDropdown from '../cart/cart-dropdown/cart-dropdown.component';
import { logout } from '../../redux/user/user.action';

const HeaderContainer = styled.div`
  height: 64px;
  background-color: white;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  display: flex;
  transition: all 0.5s;
  color: #66615b;
  /* text-transform: uppercase; */
  cursor: pointer;
`;

const Spacer = styled.div`
  margin-left: auto;

  /* @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1rem;
  }
  @media (max-width: 576px) {
    margin-right: 5px;
  } */
`;

const RightItems = styled.div`
  /* background-color: wheat; */
  display: flex;
  margin-right: 30px;
  @media (max-width: 576px) {
    margin-right: 5px;
  }
`;

const LeftItems = styled.div`
  /* width: 200px; */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  @media (max-width: 576px) {
    margin-left: 5px;
  }
`;

const Item = styled.div`
  line-height: 1.6;
  margin: 15px 0;
  padding: 10px 15px;
  opacity: 0.8;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  color: inherit;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: whitesmoke;
  }
`;

const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  line-height: 1.6;
  margin: 15px 0;
  padding: 10px 15px;
  opacity: 0.8;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  color: inherit;
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    /* background-color: whitesmoke; */
    background-color: #ececec;
    text-decoration: none;
    color: inherit;
  }
  &.${activeClassName} {
    color: orangered;
    background-color: #e2e2e2;
    text-decoration: none;
  }
`;

export const LogoContainer = styled.div`
  display: inline-block;
  height: 36px;
`;

export const Logo = styled.img`
  /* width: 100%; */
  height: 100%;
`;

export const LogoTitle = styled.span`
  font-size: 16px;
  font-weight: 300;
  text-transform: uppercase;
  color: gray;
  margin-left: 1rem;

  @media (max-width: 576px) {
    display: none;
  }
`;

export const CartItem = styled.span`
  position: relative;
  /* transition: all 0.9s; */
`;

const Header2Component = ({ currentUser, logoutUser }) => {
  const history = useHistory();
  const [cartIsOpen, setCartIsOpen] = React.useState(false);

  const handleTogleCartDropdown = () => {
    setCartIsOpen(true);
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
