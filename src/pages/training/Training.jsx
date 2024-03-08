import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Training.module.scss";
import { Logo } from "../../UI/Logo/Logo";
import { Button } from "../../UI/Button/Button";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player/youtube";
import { Header } from "../../components/header/Header";
import ProgressExercise from "../../components/progressExercise/ProgressExercise";

export const Training = () => {
  const navigate = useNavigate();
  const params = useParams(); // Получение значения параметров `id` `courseId` из URL
  const workouts = useSelector((state) => state.coursesApp.allWorkouts);
  const workout = workouts?.filter((data) => data._id.includes(params.id));
  const workoutName = workout ? workout[0].name : "название не получено";
  const workoutVideo = workout ? workout[0].video : "видео не найдено";
  const workoutExercises = workout
    ? workout[0].exercises
    : ["упражнения не найдены"];
  const workoutExercisesForProgress = workout
    ? workout[0].exercises
    : [{ name: "Ножницы вертикальные (10 повторений)", quantity: 10 }];
  const courses = useSelector((state) => state.coursesApp.allCourses);
  const course = courses?.filter((data) => data._id.includes(params.courseId));
  const courseName = course ? course[0].nameRU : "название не получено";
  const navigateToProgress = () => navigate("/progress");

  return (
    <div className={style.container}>
      <Header />
      <main>
        <h1 className={style.nameTraining}>{courseName}</h1>
        <h2 className={style.dateLink}>{workoutName}</h2>
        {/* <ReactPlayer url={workoutVideo} width='100%' height='720px' /> */}

        <section className={style.resultSection}>
          <div className={style.exerciseSection}>
            <span className={style.exerciseTitle}>Упражнения</span>
            <ul className={style.exerciseList}>
              {workoutExercises?.map((exercise) => (
                <li key={exercise.name}>{exercise.name}</li>
              ))}
            </ul>
            <Button
              onClick={navigateToProgress}
              className={"button_blue"}
              children={"Заполнить свой прогресс"}
            />
          </div>
          {/* Пока без юзера */}
          <ProgressExercise
            exercises={workoutExercisesForProgress}
            userId={1}
          />
        </section>
      </main>
    </div>
  );
};
