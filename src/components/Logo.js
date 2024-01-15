import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Logo.css';

function ButtonLink({ to, children }) {
  return <Link to={to} className="link"><span>{children}</span></Link>;
}

function Logo({color}){
  return(
    color === 'white' ? 
    <div>
      <ButtonLink to="/home"><img src={"/img/Sidebar/Spotify_Logo.png"} alt="Logo" className="logo-image2" /></ButtonLink>
    </div>
    :
    <div>
    <ButtonLink to="/home"><img src="/img/Sidebar/Spotify_Logo.png" alt="Logo" className="logo-image" /></ButtonLink>
  </div>
  );

}

export default Logo;
