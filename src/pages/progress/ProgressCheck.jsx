import React from 'react';
import styles from "./Progrss.module.scss"
import Hand from './Hand.png'

 export const ProgressCheck = () => {
   return (
     <div className={styles.page}>
       <div className={styles.progressCheckForm}>
         <div className={styles.headerProgress}>
           Ваш прогресс засчитан!
         </div>
         <div className={styles.imgBox}>
           <img src={Hand} alt='Hand' />
         </div>
       </div>
     </div>
   )
   }
   

   
