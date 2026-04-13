import React from 'react';
import Register from '../../components/auth/Register';
import { useAppDispatch } from '../../redux/hooks';
import { RegisterPayload } from '../../types/auth.type';
import { registerCall1, registerUserCall } from '../../redux/slices/authSlice';

const RegisterContainer = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (data: RegisterPayload) => {
    console.log('data', data);
    await dispatch(
      registerCall1({
        email: data.email,
        password: data.password,
        fullName: data.fullName,
        phone: data.phone,
      }),
    );
  };
  return <Register onSubmit={onSubmit} />;
};

export default RegisterContainer;
