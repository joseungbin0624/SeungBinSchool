import React from 'react';
import './Button.css'; // 가정: Button 스타일을 위한 CSS 파일

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
