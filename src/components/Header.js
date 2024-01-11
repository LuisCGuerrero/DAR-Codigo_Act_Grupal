import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <div className="leftHeader">
      <div className="login">
        <span className="Btext">Iniciar Sesión</span>
      </div>
      <div className="register">
        <span className="Btext">Registrarte</span>
      </div>
    </div>
  );
}

export default Header;
