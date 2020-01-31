import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const RegisterComponent = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
  };
  const test = () => {
    fetch('http://localhost:5000/api/v1/books', {
      method: 'GET',
      credentials: 'include'
    }).then(res => {
      console.log('rewiev', res);
    });
    // axios.get('http://localhost:5000/api/v1/books')
  };
  return (
    <div>
      RegisterComponent
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <button onClick={test}>Test</button>
      </form>
    </div>
  );
};

export default RegisterComponent;
