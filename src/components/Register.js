import Logo from './Logo'
import './styles/Login.css';

function Register() {
  return (
    <div className="body">
      <div className="RegisterHeader">
        <Logo/>
      </div>
      <div className="centralContainer">
        <div className="RegisterTitle">
          Registrate
        </div>
        <hr className='divisor'>
        </hr>
      </div>
    </div>
  );
}

export default Register;
