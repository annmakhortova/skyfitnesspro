import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoWhiteSVG } from './svg/logo_white.svg';

import SaleSticker from './png/SaleSticker.png';
import Yoga from './png/yoga.png';
import Stratch from './png/stratch.png';
import Dance from './png/dance.png';
import Step from './png/step.png';
import Body from './png/body.png';
import style from './Mainpage.module.scss';

export function Main() {
  return (
    <div className={style.container}>
      <header>
        <div className={style.top}>
          <LogoWhiteSVG className={style.logo_white} />
          <button className={style.login_button}>Войти</button>
        </div>

        <div className={style.title}>
          <div>
            <div className={style.subtitle}>Онлайн-тренировки для занятий дома</div>
            <h1 className={style.title_text}>Начните заниматься спортом и улучшите качество жизни</h1>
          </div>
          <img src={SaleSticker} alt='SaleSticker' className={style.title_img} />
        </div>
      </header>
      <main className={style.main}>
        <div className={style.course_cards}>
          <Link to={`/workout/Yoga`} className={style.course_img}>
            <img src={Yoga} alt='Yoga' />
          </Link>
          <Link to={`/workout/Stretching`} className={style.course_img}>
            <img src={Stratch} alt='Stratch' />
          </Link>
          <Link to={`/workout/DanceFitness`} className={style.course_img}>
            <img src={Dance} alt='Dance' />
          </Link>
          <Link to={`/workout/StepAirobic`} className={style.course_img}>
            <img src={Step} alt='Step' />
          </Link>
          <Link to={`/workout/BodyFlex`} className={style.course_img}>
            <img src={Body} alt='Body' />
          </Link>
        </div>
      </main>
      <footer className={style.footer}>
        <a href='#top' className={style.button_up}>
          Наверх ↑
        </a>
      </footer>
    </div>
  );
}

