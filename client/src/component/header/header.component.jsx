import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Image from 'react-bootstrap/Image';
import { Styles } from './header.styles';
import { logout } from '../../redux/user/user.action';

const HeaderComponent = ({ currentUser, logoutUser }) => {
  return (
    <Styles>
      <Navbar className="navbar" bg="light" expand="sm">
        <Navbar.Brand href="#home">Shop Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/">
              Main
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Cart
            </Nav.Link>
            {currentUser ? (
              // <Nav.Link onClick={logout}>Logout</Nav.Link>
              <>
                <NavDropdown
                  className="ml-3"
                  title={currentUser.name}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/about">
                    About
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings/">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/settings/zzz">
                    ZZZ
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={logoutUser}
                    className="text-danger"
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <div className="container-image">
                  <Image className="image" src="" roundedCircle />
                </div>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
