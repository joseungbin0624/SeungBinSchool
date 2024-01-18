import React from 'react';
import RegisterForm from '../components/RegisterForm';

const Register = () => {
  const handleRegisterSubmit = (registerData) => {
    console.log('Register Data:', registerData);
    // 회원가입 처리 로직 추가
  };

  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onSubmit={handleRegisterSubmit} />
    </div>
  );
};

export default Register;
