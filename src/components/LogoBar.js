import React from 'react';
import { Link } from 'react-router-dom';
import './styles/LogoBar.css';

function ButtonLink({ to, children }) {
  return <Link to={to} className="link"><span>{children}</span></Link>;
}

function Logo(){
  return(
    <div className="logo">
      <ButtonLink to="/"><img src="https://i.pinimg.com/originals/52/a3/fe/52a3fea300d4c0e1bd411deff2b8fcdb.jpg" alt="Logo" className="logo-image" /></ButtonLink>
    </div>
  );

}

export default Logo;
