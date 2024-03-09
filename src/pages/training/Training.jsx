import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import style from './Training.module.scss';
import { Button } from '../../UI/Button/Button';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player/youtube';
import { Header } from '../../components/header/Header';

import { getDatabase, ref, child, push, update } from 'firebase/database';
import { UpdateUserDetails } from '../../components/userRequest';

export const Training = () => {
  UpdateUserDetails();

  const navigate = useNavigate();
  const currentId = localStorage.getItem('userId'); // id пользователя
  const [{ courseId, id }] = useParams(); // Получение значения параметров `id` `courseId` из URL
  const workouts = useSelector((state) => state.coursesApp.allWorkouts); //все тренировки
  const workout = workouts?.filter((data) => data._id.includes(id)); // текущая тренировка
  const workoutName = workout ? workout[0].name : 'название не получено'; // название текущей тренировки
  const workoutVideo = workout ? workout[0].video : 'видео не найдено'; //видео текущей тренировки
  const workoutExercises =
    workout && workout[0].exercises ? workout[0].exercises : null; // упражнения текушей тренировки
  const currentWorkoutt = useSelector(
    (state) => state.coursesApp.currentWorkout
  ); // текущая тренировка пользователя из стейта
  const [currentWorkout, setCurrentWorkout] = useState(currentWorkoutt); // текущая тренировка пользователя

  //Информация по курсу
  const courses = useSelector((state) => state.coursesApp.allCourses); // все курсы
  const course = courses?.filter((data) =>
    data.nameEN.includes(courseId)
  ); // текущий курс
  const courseName = course ? course[0].nameRU : 'название не получено'; //название текущего курса на русском
  const courseNameEN = course ? course[0].nameEN : 'название не получено'; //название текущего курса на английском

  const navigateToProgress = () => {
    // navigate('/Progress');
    navigate(`/${courseId}/training/${id}/progress`);
    localStorage.setItem('currentCourse', courseNameEN);
  };

  const completeWorkout = (currentWorkout) => {
    const a = { ...currentWorkout };
    a.done = true;
    setCurrentWorkout(a);
    submitСhanges(a);
  };

  function submitСhanges(a) {
    const db = getDatabase();
    const updates = {};
    updates[`users/${currentId}/courses/${courseNameEN}/workouts/${a._id}`] = a;
    return update(ref(db), updates);
  }

  const endWorkout = () => {
    if (currentWorkout?.done) {
      return (
        <Button
          // onClick={() => {
          //   completeWorkout(currentWorkout);
          // }}
          className={'button_blue'}
          children={'Тренировка завершенa'}
        />
      );
    } else {
      return (
        <Link to={`/ProgressCheck`}>
          <Button
            onClick={() => {
              completeWorkout(currentWorkout);
            }}
            className={'button_blue'}
            children={'Закончить тренировку'}
          />
        </Link>
      );
    }
  };

  return (
    <div className={style.container}>
      <Header />
      <main>
        <h1 className={style.nameTraining}>{courseName}</h1>
        <h2 className={style.dateLink}>{workoutName}</h2>
        {/* <ReactPlayer url={workoutVideo} width='100%' height='720px' /> */}

        <section className={style.resultSection}>
          {workoutExercises ? (
            <>
              <div className={style.exerciseSection}>
                <span className={style.exerciseTitle}>Упражнения</span>
                <ul className={style.exerciseList}>
                  {workoutExercises?.map((exercise) => (
                    <li key={exercise.name}>{exercise.name}</li>
                  ))}
                </ul>
                  <Button
                    onClick={navigateToProgress}
                    className={'button_blue'}
                    children={'Заполнить свой прогресс'}
                  />
              </div>
              <div className={style.progressSection}>
                <span className={style.nameSection}>
                  Мой прогресс по тренировке
                </span>
                <div className={style.allProgress}>
                  {workoutExercises?.map((exercise) => (
                    <div className={style.rowProgressBar} key={exercise.name}>
                      <p>{exercise.name}</p>
                      <div>
                        <div className={style.progressBar1}>
                          <div className={style.progress1}>50%</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            endWorkout()
          )}
        </section>
      </main>
      <Outlet />
    </div>
  );
};