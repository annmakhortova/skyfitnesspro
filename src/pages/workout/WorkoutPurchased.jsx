import React, { useEffect } from 'react';
import styles from '../progress/Progress.module.scss';
import Hand from '../progress/Hand.png';
import { hidePopupFlag } from '../../components/hidePopup/hidePopupFlag';
import { useNavigate } from 'react-router-dom';

export const WorkoutPurchased = () => {
  const navigate = useNavigate();
  const hidePopup = (e, type) => {
    if (hidePopupFlag(e, type)) navigate(-1);
  };

  const onFocusFirstInput = () => {
    const firstInputEl = document.getElementsByTagName('input');
    firstInputEl[0]?.focus();
  };
  useEffect(() => onFocusFirstInput(), []);
  return (
    <div
      className={styles.popup_wrapper}
      onMouseUp={(e) => hidePopup(e, 'mouse')}
      onKeyDown={(e) => hidePopup(e, 'kbd')}
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
