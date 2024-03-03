import React, { useEffect } from 'react';
import { Logo } from '../../UI/Logo/Logo';
import { Button } from '../../UI/Button/Button';
import Yoga from './png/yoga.png';
import Stratch from './png/stratch.png';
import Body from './png/body.png';
import { Dropdown } from '../../components/dropdown/Dropdown';
import style from './Profilepage.module.scss';
import { getAuth } from 'firebase/auth';
import { useSelector } from 'react-redux';

export const Profile = () => {
  const currentUserStore = useSelector((state) => state.userApp.fullCurrentUser);
  console.log(currentUserStore);

  const auth = getAuth();
  const currentUser = auth.currentUser;
  console.log(currentUser);

  //  to check if currentUser exists before accessing its properties
  if (currentUser) {
    console.log(currentUser.email, currentUser.uid);
  } else {
    console.log('No user is currently signed in.');
  }

  const handleChangeLogin = () => {
    console.log('handleChangeLogin');
  };

  const handleChangePassword = () => {
    console.log('handleChangePassword');
  };

  return (
    <>
      <div className={style.container}>
        <header>
          <div className={style.header}>
            <Logo className={style.logo} />
            <div className={style.header_profile}>
              <svg className={style.header_svg}>
                <use xlinkHref='img/icon/sprite.svg#icon-tect-logo'></use>
              </svg>
              <Dropdown className={style.header_select} title={currentUser.email} />
            </div>
          </div>
        </header>
        <div className={style.profile}>
          <div className={style.heading}>
            <h1 className={style.profile_heading}>Мой профиль</h1>
            {/* Conditional rendering to safely access currentUser properties */}
            {currentUser ? (
              <>
                <p className={style.profile_text}>Логин: {currentUser.email}</p>
                {/* Remove or secure the display of sensitive information like passwords */}
              </>
            ) : (
              <p className={style.profile_text}>Пожалуйста, войдите в систему.</p>
            )}
          </div>
          <div className={style.profile_button}>
            {/* <Button>Редактировать логин</Button>
            <Button>Редактировать пароль</Button> */}
            <Button onClick={handleChangeLogin} children={'Редактировать логин'} className={'button_blue'} />
            <Button onClick={handleChangePassword} children={'Редактировать пароль'} className={'button_blue'} />
          </div>
        </div>
        <div className={style.course}>
          <h1 className={style.h1}>Мои курсы</h1>
          <div className={style.course_box}>

            <div className={style.course_item}>
              <img className={style.course_item_img} src={Yoga} alt='Yoga' />
              <button className={style.button_link}>Перейти</button>
            </div>

            {/* <div className={style.course_item}>
              <img className={style.course_item_img} src={Stratch} alt='Stratch' />
              <button className={style.button_link}>Перейти</button>
            </div>

            <div className={style.course_item}>
              <img className={style.course_item_img} src={Body} alt='Body' />
              <button className={style.button_link}>Перейти</button>
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};
