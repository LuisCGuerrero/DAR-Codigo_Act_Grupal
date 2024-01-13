import React from 'react';
import { Link } from 'react-router-dom';
import './styles/RegisterButton.css';

function ButtonLink({ to, children }) {
    return <Link to={to} className="noLinkAspect"><span>{children}</span></Link>;
  }
  
  function RegisterButton(){
    return(
      <div className="RegisterButton">
        <ButtonLink to="/register">Registrarse</ButtonLink>
      </div>
    );
  }

export default RegisterButton;