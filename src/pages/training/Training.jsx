import React from "react";
import { useParams } from "react-router-dom";
import style from "./Training.module.scss";
import { Logo } from "../../UI/Logo/Logo";
import { Button } from "../../UI/Button/Button";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import { Header } from "../../components/header/Header";

export const Training = () => {
  const params = useParams(); // Получение значения параметров `id` `courseId` из URL
  const workouts = useSelector((state) => state.coursesApp.allWorkouts);
  const workout = workouts?.filter((data) => data._id.includes(params.id));
  const workoutName = workout ? workout[0].name : "название не получено";
  const workoutVideo = workout ? workout[0].video : "видео не найдено";
  const workoutExercises = workout
    ? workout[0].exercises
    : ["упражнения не найдены"];
  const courses = useSelector((state) => state.coursesApp.allCourses);
  const course = courses?.filter((data) => data._id.includes(params.courseId));
  const courseName = course ? course[0].nameRU : "название не получено";

  return (
    <div className={style.container}>
      <Header />
      <main>
        <h1 className={style.nameTraining}>{courseName}</h1>
        <h2 className={style.dateLink}>{workoutName}</h2>
        <ReactPlayer url={workoutVideo} width="100%" height="720px" />
        <section className={style.resultSection}>
          <div className={style.exerciseSection}>
            <span className={style.exerciseTitle}>Упражнения</span>
            <ul className={style.exerciseList}>
              {workoutExercises?.map((exercise) => (
                <li>{exercise.name}</li>
              ))}
            </ul>
            <Button
              className={"button_blue"}
              children={"Заполнить свой прогресс"}
            />
          </div>
          <div className={style.progressSection}>
            <span className={style.nameSection}>
              Мой прогресс по тренировке
            </span>
            <div className={style.allProgress}>
              <div className={style.rowProgressBar}>
                <div>
                  <p>Наклоны вперед</p>
                </div>
                <div className={style.progressBar1}>
                  <div className={style.progress1}>50%</div>
                </div>
              </div>
              <div className={style.rowProgressBar}>
                <div>
                  <p>Наклоны назад</p>
                </div>
                <div className={style.progressBar2}>
                  <div className={style.progress2}>50%</div>
                </div>
              </div>
              <div className={style.rowProgressBar}>
                <div>
                  <p>Поднятие ног,</p>
                  <p>согнутых в коленях</p>
                </div>
                <div className={style.progressBar3}>
                  <div className={style.progress3}>50%</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
