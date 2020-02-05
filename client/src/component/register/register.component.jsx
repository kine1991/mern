import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { registerAsync, clearError } from '../../redux/user/user.action';

const RegisterComponent = ({
  error,
  registerUser,
  clearErrorBeforeUnmount
}) => {
  React.useEffect(() => {
    return () => {
      clearErrorBeforeUnmount();
    };
  }, [clearErrorBeforeUnmount]);

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log('data');
    console.log(data);
    registerUser(data);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {error ? <h5 className="text-danger">{error}</h5> : null}
        <input name="name" defaultValue="Nikolay" ref={register} />
        <input name="email" defaultValue="test11@mail.ru" ref={register} />
        <input
          name="password"
          defaultValue="123456"
          ref={register({ required: true })}
        />
        <input
          name="passwordConfirm"
          defaultValue="123456"
          ref={register({ required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  error: state.user.error
});

const mapDispatchToProps = dispatch => ({
  registerUser: data => dispatch(registerAsync(data)),
  clearErrorBeforeUnmount: () => dispatch(clearError())
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
