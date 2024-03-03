import React, { useEffect } from 'react';
import { Button } from '../../UI/Button/Button';
import styles from './Progress.module.scss';
import { useSelector } from 'react-redux';
import { getCurrentUsers } from '../api';
import { hidePopupFlag } from '../../components/hidePopup/hidePopupFlag';
import { useNavigate } from 'react-router-dom';

export const Progress = () => {
  const navigate = useNavigate();

  const currentWorkout = useSelector((state) => state.coursesApp.currentWorkout);
  const currentUser = useSelector((state) => state.coursesApp.currentUser);

  // useEffect(() => {
  //   getCurrentUsers().then((response) => {
  //     console.log(Object.values(response));
  //   });
  // });

  useEffect(() => {
    console.log(currentWorkout);
    console.log(currentUser);
  }, [currentWorkout, currentUser]);

  const hidePopup = (e, type) => {
    if (hidePopupFlag(e, type)) navigate('/training/3yvozj')
  }

  return (
    <div
      className={styles.popup_wrapper}
      onMouseUp={(e) => hidePopup(e, 'mouse')}
      onKeyDown={(e) => hidePopup(e, 'kbd')}
    >
      <div className={styles.progressForm} id='#popup'>
        <div className={styles.headerForm}>Мой прогресс</div>
        {currentWorkout.exercises.map((el, index) => {
          return (
            <div key={index}>
              <div className={styles.textForm}>Сколько раз вы сделали <br/>"{el.name}"?</div>
              <div className={styles.inputBox}>
                <input
                  className={styles.inputForm}
                  type='number'
                  name='quantity'
                  placeholder='Введите значение'
                ></input>
              </div>
            </div>
          );
        })}
        <div className={styles.buttonBox}>

          <Button className={'button_blue'} children={'Отправить'} />
        </div>
      </div>
    </div>
  );
};
