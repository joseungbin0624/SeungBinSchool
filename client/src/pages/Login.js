import React from 'react';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const handleLoginSubmit = (loginData) => {
    console.log('Login Data:', loginData);
    // 로그인 처리 로직 추가
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginForm onSubmit={handleLoginSubmit} />
    </div>
  );
};

export default Login;
