import React from 'react';
import './HeaderApp.css';

const Header = () => {
  return (
    <nav className="navbar">
            <div className="navbar-brand">MyApp</div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/admin">Admin</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
            </ul>
        </nav>
  );
};

export default Header;
