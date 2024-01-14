import React from "react";
import './styles/Input.css';

function Input({text, type}){
    return(
        (type === 'password' ?
        <div className='inputContainer'>
            <div className='emailInputContainer'>
                <div>{text}</div>
                <input type='password' className='emailInput'></input>
            </div>
        </div>
        :
        type === 'black' ?
        <div className='inputContainer'>
            <div className='emailInputContainer'>
                <div>{text}</div>
                <input type='text' className='emailInput2' placeholder="nombre@dominio.com"></input>
            </div>
        </div>
        :
        <div className='inputContainer'>
            <div className='emailInputContainer'>
                <div>{text}</div>
                <input type='text' className='emailInput'></input>
            </div>
        </div>
    ));
}

export default Input