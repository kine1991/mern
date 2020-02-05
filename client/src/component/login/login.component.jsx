import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { loginAsync, clearError } from '../../redux/user/user.action';

const LoginComponent = ({ error, loginUser, clearErrorBeforeUnmount }) => {
  React.useEffect(() => {
    return () => {
      clearErrorBeforeUnmount();
    };
  }, [clearErrorBeforeUnmount]);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    loginUser(data);
  };

  // if (error) {
  //   return (<h1>Error</h1>)
  // }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error ? <h5 className="text-danger">{error}</h5> : null}
        <input name="email" defaultValue="test1@mail.ru" ref={register} />
        <input name="password" defaultValue="123456" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.user.error
});

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginAsync(data)),
  clearErrorBeforeUnmount: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
