import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LoginButton.css';

function ButtonLink({ to, children }) {
    return <Link to={to} className="noLinkAspect"><span>{children}</span></Link>;
  }
  
  function LoginButton(){
    return(
      <div className="loginButton">
        <ButtonLink to="/login">Iniciar Sesión</ButtonLink>
      </div>
    );
  }

export default LoginButton;