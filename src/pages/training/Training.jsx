import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "./MocData";
import style from "./Training.module.scss";
import { Logo } from "../../UI/Logo/Logo";
import { Button } from "../../UI/Button/Button";
import videoImgLogo from "./img/1.png";

export const Training = () => {
  return (
    <div className={style.container}>
      <header>
        <Logo className={style.logo} />
      </header>
      <main>
        <h1 className={style.nameTraining}>Йога</h1>
        <h2 className={style.dateLink}>
          Красота и здоровье / Йога на каждый день / 2 день
        </h2>
        <img className={style.videoImgLogo} src={videoImgLogo} alt="" />
        <section className={style.resultSection}>
          <div className={style.exerciseSection}>
            <span className={style.exerciseTitle}>Упражнения</span>
            <ul className={style.exerciseList}>
              <li>Наклон вперед (10 повторений)</li>
              <li>Наклон назад (10 повторений)</li>
              <li>Поднятие ног, согнутых в коленях (5 повторений)</li>
            </ul>
            <Button children={"Заполнить свой прогресс"} />
          </div>
          <div className={style.progressSection}>
            <span className={style.nameSection}>
              Мой прогресс по тренировке
            </span>
            <div className={style.allProgress}>
              <div className={style.rowProgressBar}>
                <div>
                  <p>Наклоны вперед</p>
                </div>
                <div className={style.progressBar1}>
                  <div className={style.progress1}>50%</div>
                </div>
              </div>
              <div className={style.rowProgressBar}>
                <div>
                  <p>Наклоны назад</p>
                </div>
                <div className={style.progressBar2}>
                  <div className={style.progress2}>50%</div>
                </div>
              </div>
              <div className={style.rowProgressBar}>
                <div>
                  <p>Поднятие ног,</p>
                  <p>согнутых в коленях</p>
                </div>
                <div className={style.progressBar3}>
                  <div className={style.progress3}>50%</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
