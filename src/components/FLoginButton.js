import React from 'react';
import './styles/FLoginButton.css';


function FLoginButton({ icon, text, isFirst }) {
    return (
        (isFirst ? 
        <div className='fLoginButton first'>
            <span><img className='icono' alt='Icono' src={icon}></img></span>
            <div className='text'>{text}</div>
        </div>
        :
        <div className='fLoginButton'>
        <span><img className='icono' alt='Icono' src={icon}></img></span>
        <div className='text'>{text}</div>
    </div>
    ));
}

export default FLoginButton;
