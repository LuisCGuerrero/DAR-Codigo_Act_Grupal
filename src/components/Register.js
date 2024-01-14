import React from 'react';
import Logo from './Logo';
import Divisor from './Divisor';
import Input from './Input';
import LoginButton from './LoginButton'
import FLoginButton from './FLoginButton';
import './styles/Register.css';

function Register() {
    return (
    <div className="registerBody">
        <div className="registerHeader">
            <Logo color={'white'}/>
        </div>

        <div className="centralContainer">
            <div className="RegisterTitle">
                Regístrate para empezar a escuchar contenido
            </div>

            <div>
                <Input text={"Dirección de correo electrónico"} type={'black'}/>
            </div>

            <LoginButton color={'register'}/>

            <Divisor/>

            <div className='fLoginButtonsContainer'>
                <FLoginButton icon='https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg' text={'Registrarte con Google'}/>
                <FLoginButton icon='https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg' text={'Registrarte con Facebook'}/>
                <FLoginButton icon='https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg' text={'Registrarte con Apple'}/>
            </div>

            <Divisor/>

            <div className='yesAccText'>
                <span>¿Ya tienes una cuenta? </span>
                <span className='link1'>Inicia sesión aquí.</span>
            </div>
        </div>

        <div className='infoText2'>
            <span>This site is protected by reCAPTCHA and the Google <br></br>
            Privacy Policy and Terms of Service apply.</span>
        </div>
    </div>
    );
}

export default Register;
