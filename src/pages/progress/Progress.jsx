import React, { useEffect } from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./Progrss.module.scss";
import { useSelector } from "react-redux";

export const Progress = () => {
  const currentWorkout = useSelector(
    (state) => state.coursesApp.currentWorkout
  );
  const currentUser = useSelector((state) => state.coursesApp.currentUser);

  useEffect(() => {
    console.log(currentWorkout);
    console.log(currentUser);
  }, [currentWorkout, currentUser]);

  return (
    <div className={styles.page}>
      <div className={styles.progressForm}>
        <div className={styles.headerForm}>Мой прогресс</div>
        {currentWorkout.exercises.map((el, index) => {
          return (
            <div key={index}>
              <div className={styles.textForm}>
                Сколько раз вы сделали {el.name}?
              </div>
              <div className={styles.inputBox}>
                <input
                  className={styles.inputForm}
                  type="number"
                  name="quantity"
                  placeholder="Введите значение"
                ></input>
              </div>
            </div>
          );
        })}
        <div className={styles.buttonBox}>
          <Button children="Отправить" />
        </div>
      </div>
    </div>
  );
};
