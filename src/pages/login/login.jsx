import React, { useState } from 'react';
import { Button } from '../../UI/Button/Button';
import { Logo } from '../../UI/Logo/Logo';
import style from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
// import { useParams } from "react-router-dom";
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login = ({ handlePopup }) => {
  // console.log(props);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/profile');
    } catch (error) {
      console.error(error.message);
      alert('Login failed: ' + error.message);
    }
  };

  const handleRegisterClick = () => {
    navigate('/signup');
  };

//   const hidePopup = () => {
//     document.addEventListener('mouseup', function (e) {
//       const popupElement = document.getElementById('popup_wrapper');
//       console.log(popupElement);
//       if (!popupElement.contains(e.target)) {
//           handlePopup();
//           this.removeEventListener()
//       }
//     });
//   };

//   hidePopup();

  return (
    <div className={style.popup_wrapper} id={'popup_wrapper'}>
      <div className={style.container} onClick={handlePopup}>
        <header>
          <Logo className={style.logo} />
        </header>

        <div className={style.inputs}>
          <div className={style.input}>
            <input type='email' placeholder='Логин' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className={style.input}>
            <input
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <div className={style.buttonsContainer}>
          <Button onClick={handleLogin} children={'Войти'} />
          <button className={style.registerButton} onClick={handleRegisterClick}>
            Зарегистрироваться
          </button>
        
        </div>
      </div>
    </div>
  );
};

//export default LoginSignup
