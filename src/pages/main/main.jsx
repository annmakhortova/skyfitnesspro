import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoWhiteSVG } from './svg/logo_white.svg';
import { ReactComponent as SaleStickerSVG } from './svg/sale_sticker.svg';
import { ReactComponent as YogaSVG } from './svg/yoga.svg';
import { ReactComponent as StretchSVG } from './svg/stretch.svg';
import { ReactComponent as DanceSVG } from './svg/dance.svg';
import { ReactComponent as StepSVG } from './svg/step.svg';
import { ReactComponent as BodySVG } from './svg/body.svg';
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
          <SaleStickerSVG />
        </div>
      </header>
      <main>
        <div className={style.course_cards}>
          <Link to={`/workout/Yoga`}>
            <YogaSVG />
          </Link>
          <Link to={`/workout/Stretching`}>
            <StretchSVG />
          </Link>
          <Link to={`/workout/DanceFitness`} className={style.course_img}>
            <DanceSVG />
          </Link>
          <Link to={`/workout/StepAirobic`} className={style.course_img}>
            <StepSVG />
          </Link>
          <Link to={`/workout/BodyFlex`} className={style.course_img}>
            <BodySVG />
          </Link>
        </div>
      </main>
      <footer className={style.footer}>
        <a href='#top' className={style.button_up}>Наверх ↑</a>
      </footer>
    </div>
  );
}

// export const Workout = () => {
//   const params = useParams();
//   const course = courses.find((course) => course.nameEN === params.id);
//   return (
//     <div className={style.container}>
//       <header>
//         <Logo className={style.logo} />
//       </header>
//       <main>
//         <section className={style.workoutCard}>
//           <h1 className={style.workoutCard_title}>{course.nameRU}</h1>
//         </section>
//         <section className={style.fitting}>
//           <h2 className={style.section_title}>Подойдет для вас, если:</h2>
//           <div className={style.fitting_textBox}>
//             {course.fitting.map((el) => {
//               return (
//                 <div className={style.criterion}>
//                   <div className={style.criterion_counter}>
//                     <p className={style.criterion_counterText}> {course.fitting.indexOf(el) + 1}</p>
//                   </div>
//                   <div className={style.criterion_text}>
//                     <p className={style.basicText}>{el}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>
//         <section className={style.directions}>
//           <h2 className={style.section_title}>Направления:</h2>
//           <div className={style.directions_textBox}>
//             {course.directions.map((el) => {
//               return <p className={style.basicText}>&nbsp; &nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;{el}</p>;
//             })}
//           </div>
//         </section>
//         <p className={style.workoutDescription}>&nbsp;&nbsp;&nbsp;{course.description}</p>
//         <section className={style.feedback}>
//           <p className={style.feedback_text}>
//             Оставьте заявку на пробное занятие, мы свяжемся <br /> с вами, поможем с выбором направления и тренера, с
//             которым тренировки принесут здоровье и радость!
//           </p>
//           <Button children={'Записаться на тренировку'} />
//           <img src={phone} alt='' className={style.feedback_img} />
//         </section>
//       </main>
//     </div>
//   );
// };
