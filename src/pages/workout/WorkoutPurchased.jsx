import React, { useEffect } from 'react';
import styles from '../progress/Progress.module.scss';
import Hand from '../progress/Hand.png';
// import { hidePopupFlag } from '../../components/hidePopup/hidePopupFlag';
import { useNavigate } from 'react-router-dom';

export const WorkoutPurchased = () => {
  const navigate = useNavigate();
  
  const hidePopup = () => {
     navigate(-1);
  };

  // const onFocusImg = () => {
  //   const imgEl = document.getElementsByTagName('img');
  //   console.log(imgEl);
  //   imgEl[0]?.focus();
  // };
  // useEffect(() => onFocusImg(), []);

  return (
    <div
      className={styles.popup_wrapper}
      onClick={() => hidePopup()}
      // onKeyDown={() => hidePopup()}
    >
      <div className={styles.progressForm} id='#popup'>
        <div className={styles.page}>
          <div className={styles.progressCheckForm}>
            <div className={styles.headerProgress}>Вы купили курс!</div>
            <div className={styles.imgBox}>
              <img className={styles.Hand} src={Hand} alt='Hand' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
