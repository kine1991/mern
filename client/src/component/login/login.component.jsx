import React from 'react';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { loginAsync } from '../../redux/user/user.action';

const LoginComponent = ({ loginUser }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    loginUser(data);
    // console.log('data');
    // console.log(data);
    // // const data_stringify = JSON.stringify({ email: data.email, password: data.password });
    // // console.log('data_stringify');
    // // console.log(data_stringify);
    // // axios.post('/api/v1/users/login', data).then(x => console.log('x', x))
    // axios
    //   .post('http://localhost:5000/api/v1/users/login', data)
    //   .then(x => console.log('x', x));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="email" defaultValue="test1@mail.ru" ref={register} />
        <input name="password" defaultValue="123456" ref={register} />
        <input type="submit" />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loginUser: data => dispatch(loginAsync(data))
});

export default connect(null, mapDispatchToProps)(LoginComponent);
