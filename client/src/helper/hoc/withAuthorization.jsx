import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuthorization = WrappedComponent => {
  const authorization = ({ userIsAuth, isFetching, ...otherProps }) => {
    if (!isFetching && userIsAuth) {
      return <WrappedComponent {...otherProps} />;
    }
    return <Redirect to="/login" />;
    // if (!isFetching && !userIsAuth) {
    //   return <Redirect to="/login" />;
    // }
    // return <h4>ggg</h4>;
  };
  const mapStateToProps = state => ({
    userIsAuth: state.user.currentUser,
    isResolveAuth: state.user.isResolveAuth,
    isFetching: state.user.isFetching
  });

  return connect(mapStateToProps)(authorization);
};

export default withAuthorization;
