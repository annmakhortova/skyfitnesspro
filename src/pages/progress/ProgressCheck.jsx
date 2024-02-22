import React from 'react';
//import { Hand } from './Hand.png'
import styles from "./Progrss.module.scss"

 export const ProgressCheck = () => {
   return (
     <div className={styles.page}>
       <div className={styles.progressCheckForm}>
         <div className={styles.headerProgress}>
           Ваш прогресс засчитан!
         </div>
         <div className={styles.imgBox}>
           <img src="./Hand.png" alt='Hand' />
         </div>
       </div>
     </div>
   )
   }
   
