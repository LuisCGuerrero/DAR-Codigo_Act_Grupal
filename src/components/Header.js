import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

function ButtonLink({ to, children }) {
  return <Link to={to}><span>{children}</span></Link>;
}

function LoginButton(){
  return(
    <div className="login">
      <ButtonLink to="/login">Iniciar Sesión</ButtonLink>
    </div>
  );
}

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
