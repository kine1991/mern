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
import withAuthorization from './helper/hoc/withAuthorization';
import BooksComponent from './component/book/books/books.component';
// import BooksComponent2 from './component/book/books/books2.component';
import BookComponent from './component/book/book/book.component';
import UsersComponent from './component/user/users/users.component';
import UserComponent from './component/user/user/user.component';

// eslint-disable-next-line no-shadow
const App = ({ isFetching, setCurrentUser }) => {
  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      setCurrentUser();
    }
  }, []);
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
          <Route path="/login" component={LoginComponent} />
          <Route path="/register" component={RegisterComponent} />
        </CustomLayout>
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  isFetching: state.user.isFetching
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: () => dispatch(setCurrentUserAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
