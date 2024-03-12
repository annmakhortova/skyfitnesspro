import React, { useEffect, useState } from 'react';
import { Button } from '../../UI/Button/Button';
import { Logo } from '../../UI/Logo/Logo';
import style from './NewPassword.module.scss';
import { useNavigate } from 'react-router-dom';
import { getAuth, reauthenticateWithCredential, EmailAuthProvider, updatePassword } from 'firebase/auth';
import { hidePopupFlag } from '../../components/hidePopup/hidePopupFlag';

export const NewPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleChangePassword = async () => {
    if (!oldPassword.trim() || !password.trim() || !confirmPassword.trim()) {
      alert('Passwords cannot be blank or just spaces.');
      return;
    }

    if (password !== confirmPassword) {
      alert('New passwords do not match.');
      return;
    }

    const user = auth.currentUser;
    if (user) {
      // Re-authenticate the user with the old password first
      const credential = EmailAuthProvider.credential(user.email, oldPassword);
      try {
        await reauthenticateWithCredential(user, credential);
        await updatePassword(user, password);
        alert('Password updated successfully.');
        navigate('/profile');
      } catch (error) {
        console.error('Error updating password:', error);
        alert("Failed to update password. Make sure the old password is correct and you're logged in recently.");
      }
    }
  };

  const hidePopup = (e, type) => {
    if (hidePopupFlag(e, type)) navigate(-1);
  };

  useEffect(() => {
    const firstInputEl = document.getElementsByTagName('input')[0];
    firstInputEl?.focus();
  }, []);

  return (
    <div
      className={style.popup_wrapper}
      onMouseUp={(e) => hidePopup(e, 'mouse')}
      onKeyDown={(e) => hidePopup(e, 'kbd')}
    >
      <div className={style.container} id='#popup'>
        <header>
          <Logo className={style.logo} />
        </header>

        <div className={style.inputs}>
          <header className={style.inputName}>Старый пароль:</header>
          <div className={style.input}>
            <input
              type='password'
              placeholder='Старый пароль'
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>
          <header className={style.inputName}>Новый пароль:</header>
          <div className={style.input}>
            <input
              type='password'
              placeholder='Новый пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={style.input}>
            <input
              type='password'
              placeholder='Повторите новый пароль'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div className={style.buttonsContainer}>
          <Button
            onClick={handleChangePassword}
            children={'Сохранить'}
            className={'button_blue'}
          />
        </div>
      </div>
    </div>
  );
};
