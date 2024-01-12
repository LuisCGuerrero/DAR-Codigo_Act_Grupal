import React from 'react';
import LoginButton from './LoginButton'
import './styles/Header.css';

function Header() {
  return (
    <div className="leftHeader">
      <LoginButton />
      <div className="register">
        <span>Registrarte</span>
      </div>
    </div>
  );
}

export default Header;
