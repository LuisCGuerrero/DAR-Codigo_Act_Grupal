import React from 'react';
import Logo from './Logo'
import './styles/Login.css';

function Login() {
  return (
    <div className="body">
      <div className="loginHeader">
        <Logo/>
      </div>
      <div className="centralContainer">
        <div className="loginTitle">
          Inicia sesión en Spotify
        </div>
        <hr className='divisor'>
        </hr>
      </div>
    </div>
  );
}

export default Login;
