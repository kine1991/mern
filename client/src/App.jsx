import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import LoginComponent from './component/login/login.component';
import RegisterComponent from './component/register/register.component';
import Header from './component/header/header.component';
// import Button from 'react-bootstrap/Button'
// import axios from 'axios';
import { setCurrentUserAsync } from './redux/user/user.action';

// eslint-disable-next-line no-shadow
const App = ({ setCurrentUser }) => {
  React.useEffect(() => {
    setCurrentUser();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={() => <h1>Home</h1>} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
      </Switch>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: () => dispatch(setCurrentUserAsync())
});

export default connect(null, mapDispatchToProps)(App);
