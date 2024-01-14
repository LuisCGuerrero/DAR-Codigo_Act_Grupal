import React from 'react';
import LoginButton from './LoginButton'
import RegisterButton from './RegisterButton'
import './styles/Header.css';

function Header() {
    return (
        <div className="leftHeader">
        <LoginButton />
        <RegisterButton />
        </div>
    );
}

export default Header;
