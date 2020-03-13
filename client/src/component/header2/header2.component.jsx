import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useHistory, NavLink } from 'react-router-dom';

import { logout } from '../../redux/user/user.action';

const HeaderContainer = styled.div`
  height: 64px;
  background-color: white;
  box-shadow: 0 6px 10px -4px rgba(0, 0, 0, 0.15);
  display: flex;
  transition: all 0.5s;
  color: #66615b;
`;

const Spacer = styled.div`
  margin-left: auto;
`;

const RightItems = styled.div`
  /* background-color: wheat; */
  display: flex;
  margin-right: 30px;
`;

const LeftItems = styled.div`
  /* width: 200px; */
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
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

const Header2Component = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <LeftItems>Book Shop</LeftItems>
      <Spacer />
      <RightItems>
        <Item onClick={() => history.push('/')}>Home</Item>
        <Item onClick={() => history.push('/books')}>Books</Item>
        <Item onClick={() => history.push('/users')}>Users</Item>
        <Item onClick={() => history.push('/login')}>Login</Item>
        <Item onClick={() => history.push('/register')}>Register</Item>
      </RightItems>
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
