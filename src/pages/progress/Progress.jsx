import React from 'react';
import { Button } from "../../UI/Button/Button";
import styles from "./Progrss.module.scss"


export const Progress = () => {
  return (
    <div className={styles.page}>
      <div className={styles.progressForm}>
        <div className={styles.headerForm}>Мой прогресс</div>
        <div className={styles.textForm}>Сколько раз вы сделали наклоны вперед?</div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="number" name="quantity" placeholder="Введите значение"></input>
        </div>
        <div className={styles.textForm}>Сколько раз вы сделали наклоны назад?</div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="number" name="quantity" placeholder="Введите значение"></input>
        </div>
        <div className={styles.textForm}>Сколько раз вы сделали поднятие ног, согнутых в коленях?</div>
        <div className={styles.inputBox}>
          <input className={styles.inputForm} type="number" name="quantity" placeholder="Введите значение"></input>
        </div>
        <div className={styles.buttonBox}>
          <Button children="Отправить" /> 
        </div>
        
      </div>
    </div>
  )
}
