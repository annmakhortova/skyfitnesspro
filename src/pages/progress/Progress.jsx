import React, { useState, useEffect } from 'react';
import { Button } from '../../UI/Button/Button';
import styles from './Progress.module.scss';
import { useSelector } from 'react-redux';
// import { getCurrentUsers } from '../api';
import { hidePopupFlag } from '../../components/hidePopup/hidePopupFlag';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, child, push, update } from 'firebase/database';
import { UpdateUserDetails } from '../../components/userRequest';


export const Progress = () => {
  const navigate = useNavigate();
  const currentId = localStorage.getItem('userId'); // id пользователя
  const currentCourse = localStorage.getItem('currentCourse')

  const currentWorkout = useSelector(
    (state) => state.coursesApp.currentWorkout
  );
  const exe = currentWorkout?.exercises;
  const [inputValues, setInputValues] = useState(exe);

  console.log(inputValues);
  const handleInputChange = (e, elKey) => {
    const ma = inputValues.map((ex) => {
      if (ex.name === elKey.name) {
        if (Number(e.target.value) > ex.quantity) {
          alert('Вы ввели слишком большое число')
          return ex
        } else {
          let a = { ...ex };
          a.made = Number(e.target.value);
          console.log(a);
          return a;
        }
      } else {
        return ex;
      }
    });
    console.log(1);
    setInputValues(ma);
  };

  const sendProgress = () => {
    const db = getDatabase();
    const updates = {};
    updates[`users/${currentId}/courses/${currentCourse}/workouts/${currentWorkout._id}/exercises`] = inputValues;
    return update(ref(db), updates);
    console.log(inputValues)
  }

  const hidePopup = (e, type) => {
    if (hidePopupFlag(e, type)) navigate(-1);
  };

  const onFocusFirstInput = () => {
    const firstInputEl = document.getElementsByTagName('input');
    firstInputEl[0]?.focus();
  };
  //   console.log( currentWorkout);
  // console.log(inputValues)
  useEffect(() => onFocusFirstInput(), []);

  return (
    <>
      {currentWorkout && (
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
                  <div className={styles.textForm}>
                    Сколько раз вы сделали: <br />"{el.name}"?
                  </div>
                  <div className={styles.inputBox}>
                    <input
                      className={styles.inputForm}
                      type='number'
                      name='quantity'
                      placeholder='Введите значение'
                      onChange={(e) => handleInputChange(e, el)}
                      max={el.quantity}
                    ></input>
                  </div>
                </div>
              );
            })}
            <div className={styles.buttonBox}>
              <Button className={'button_blue'} children={'Отправить'} onClick={sendProgress}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
