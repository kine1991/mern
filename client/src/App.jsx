/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginComponent from './component/login/login.component';
import RegisterComponent from './component/register/register.component';
import Header from './component/header/header.component';
import Header2 from './component/header2/header2.component';
// eslint-disable-next-line import/no-named-as-default
import About from './component/about/about.component';
// import Button from 'react-bootstrap/Button'
import CustomLayout from './helper/component/custom-layout/custom-layout.component';
import Spinner from './helper/component/spinner/spinner.component';
import { setCurrentUserAsync } from './redux/user/user.action';
import { loadCartFromLS } from './redux/cart/cart.action';
import withAuthorization from './helper/hoc/withAuthorization';
import BooksComponent from './component/book/books/books.component';
// import BooksComponent2 from './component/book/books/books2.component';
import BookComponent from './component/book/book/book.component';
import UsersComponent from './component/user/users/users.component';
import UserComponent from './component/user/user/user.component';
import useDidMountEffect from './utils/useDidMountEffect';
import CartComponent from './component/cart/cart/cart.component';

// eslint-disable-next-line no-shadow
const App = ({ isFetching, setCurrentUser, cartItems, loadCartFromLS }) => {
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      setCurrentUser();
    }

    // Load from LS
    let fromLS = localStorage.getItem('cart-items-ls');
    try {
      if (!Array.isArray(JSON.parse(fromLS))) {
        fromLS = JSON.stringify([]);
      }
    } catch (error) {
      fromLS = JSON.stringify([]);
    }
    const loadCardFromLS = JSON.parse(fromLS);
    loadCartFromLS(loadCardFromLS);
  }, []);

  // Helper useEffect render after first loading
  useDidMountEffect(() => {
    // console.log('cartItems', cartItems);
    localStorage.setItem('cart-items-ls', JSON.stringify(cartItems));
  }, [cartItems]);

  if (isFetching) {
    return <Spinner color="gray" />;
  }
  return (
    <React.Fragment>
      {/* <Header /> */}
      <Header2 />
      <Switch>
        <CustomLayout>
          <Route path="/" exact component={() => <h1>Home</h1>} />
          <Route path="/about" exact component={withAuthorization(About)} />
          <Route path="/users" exact component={UsersComponent} />
          <Route path="/users/:id" exact component={UserComponent} />
          <Route path="/books" exact component={BooksComponent} />
          {/* <Route path="/books" exact component={BooksComponent2} /> */}
          <Route path="/books/:id" exact component={BookComponent} />
          <Route path="/cart" exact component={CartComponent} />
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
        </CustomLayout>
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isFetching: state.user.isFetching,
  cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: () => dispatch(setCurrentUserAsync()),
  loadCartFromLS: items => dispatch(loadCartFromLS(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
