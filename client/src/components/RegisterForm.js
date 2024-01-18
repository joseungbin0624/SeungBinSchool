import React, { useState } from 'react';
import './RegisterForm.css'; // 가정: RegisterForm 스타일을 위한 CSS 파일

const RegisterForm = ({ onSubmit }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(userData);
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
