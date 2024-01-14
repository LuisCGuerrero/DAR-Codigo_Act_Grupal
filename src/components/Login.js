import React from 'react';
import Logo from './Logo';
import Divisor from './Divisor';
import Input from './Input';
import LoginButton from './LoginButton'
import FLoginButton from './FLoginButton';
import CheckboxSlider from './CheckboxSlider';
import './styles/Login.css';

function Login() {
    return (
    <div className="loginBody">
        <div className="loginHeader">
            <Logo/>
        </div>

        <div className="centralContainer">
            <div className="loginTitle">
                Inicia sesión en Spotify
            </div>

            <div className='fLoginButtonsContainer'>
            <FLoginButton icon='https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg' text={'Continuar con Google'} isFirst={true}/>
            <FLoginButton icon='https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg' text={'Continuar con Facebook'} isFirst={false}/>
            <FLoginButton icon='https://accounts.scdn.co/sso/images/new-apple-icon.e356139ea90852da2e60f1ff738f3cbb.svg' text={'Continuar con Apple'} isFirst={false}/>
            </div>

            <Divisor/>

            <div>
                <Input text={"Correo electrónico o nombre de usuario"}/>
                <br/>
                <Input text={"Contraseña"} type={'password'}/>
            </div>

            <CheckboxSlider/>

            <LoginButton color={'green'}/>

            <div className='passText'>
                <span>¿Se te ha olvidado la contraseña?</span>
            </div>

            <Divisor/>

            <div className='noAccText'>
                <span>¿No tienes cuenta? </span>
                <span className='link1'>Suscríbete a Spotify</span>
            </div>
        </div>

        <div className='infoText'>
            <span>Este sitio está protegido por reCAPTCHA. Se aplican los Términos del servicio y la Política de privacidad de Google.</span>
        </div>
    </div>
    );
}

export default Login;
