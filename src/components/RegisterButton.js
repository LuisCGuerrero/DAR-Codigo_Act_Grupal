import React from 'react';
import { Link } from 'react-router-dom';
import './styles/RegisterButton.css';

function ButtonLink({ to, children }) {
    return <Link to={to} className="noLinkAspect2"><span>{children}</span></Link>
}

function RegisterButton({color}){
    return(
    <div className="registerButton">
        <ButtonLink to="/registrarte">Registrarte</ButtonLink>
    </div>
    );
}

export default RegisterButton;
