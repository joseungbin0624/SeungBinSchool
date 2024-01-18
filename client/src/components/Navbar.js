import React from 'react';
import './Navbar.css'; // 가정: Navbar 스타일을 위한 CSS 파일

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">SeungBinSchool</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/courses">Courses</a></li>
        <li><a href="/jobs">Jobs</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
