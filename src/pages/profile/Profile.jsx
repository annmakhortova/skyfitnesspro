import React from 'react';
import { Logo } from "../../UI/Logo/Logo";
import { Button } from "../../UI/Button/Button";
import Yoga from './png/yoga.png';
import Stratch from './png/stratch.png';
import Body from './png/body.png';

import style from  "./Profilepage.module.scss";


 export const Profile = () => {
  return (
  <>
    <div className={style.container}>
      <header>
       <div className={style.header}>
         <Logo className={style.logo} />
      
         <div className={style.header_profile}>
         <svg className={style.header_svg}>
         <use xlinkHref="img/icon/sprite.svg#icon-tect-logo"></use>
          </svg>
          <select className={style.header_select} name="select">
           <option value={"value1"}>Сергей</option>
           <option value={"value2"}>Алексей</option>
           <option value={"value3"}>Айрат</option>
           </select>
         </div>
        </div>
      </header>
      <div className={style.profile}>
        <div className={style.heading}>
          <h1>Мой профиль</h1>
          <p>Логин: sergey.petrov96</p>
          <p>Пароль: 4fkhdj880d</p>
        </div>
        <div className={style.profile_button}>
          <Button children = {"Редактировать логин"} />
          <Button children = {"Редактировать пароль"} />
        </div>
      </div><div className={style.course}>
        <h1>Мои курсы</h1>
        <div className={style.course_box}>
          <div className={style.course_item}>
          <img className={style.course_item_img} src={Yoga} alt="Yoga" />
            <button className={style.button_link}>Перейти</button>
          </div>
          <div className={style.course_item}>
          <img className={style.course_item_img} src={Stratch} alt="Stratch" />
          <button className={style.button_link}>Перейти</button>
        </div>
        <div className={style.course_item}>
        <img className={style.course_item_img} src={Body} alt="Body" />
        <button className={style.button_link}>Перейти</button>
          </div>
        </div>
      </div>
    </div>   
  </>
  );
};

