import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Logo.css';
import icono from './img/Spotify_Logo.png'

function ButtonLink({ to, children }) {
  return <Link to={to} className="link"><span>{children}</span></Link>;
}

function Logo({color}){
  return(
    color === 'white' ? 
    <div>
      <ButtonLink to="/home"><img src={icono} alt="Logo" className="logo-image2" /></ButtonLink>
    </div>
    :
    <div>
    <ButtonLink to="/home"><img src="https://i.pinimg.com/originals/52/a3/fe/52a3fea300d4c0e1bd411deff2b8fcdb.jpg" alt="Logo" className="logo-image" /></ButtonLink>
  </div>
  );

}

export default Logo;
