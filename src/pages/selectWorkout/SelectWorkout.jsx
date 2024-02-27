import React, { useEffect, useState } from "react";
import style from "./SelectWorkout.module.scss";
import { getAllCourses, getAllWorkouts } from "../api";

export const SelectWorkout = () => {
  const params = "StepAirobic";
  const [course, setCourse] = useState();
  const [allWorkouts, setAllWotkouts] = useState();
  const [currentWorkoutsArr, setCurrentWorkoutsArr] = useState([]);

  useEffect(() => {
    getAllCourses()
      .then((courses) => {
        console.log("Курсы:", courses);
        setCourse(
          Object.values(courses).find((course) => course.nameEN === params)
        );
      })
      .catch(() => {})
      .finally(() => {
      });
  }, [params.id]);

  useEffect(() => {
    getAllWorkouts().then((workoutss) => {
      setAllWotkouts(Object.values(workoutss));
    });
  }, []);

  useEffect(() => {
    if (course) {
      setCurrentWorkoutsArr(allWorkouts.filter((e) =>
      course.workouts.includes(e._id))
      );
    }
  }, [allWorkouts, course]);

  return (
    <div className={style.selectWorkout}>
      <div className={style.selectWorkout_box}>
        <h1 className={style.selectWorkout_title}>Выберите тренировку</h1>
        <div className={style.workouts}>
          {currentWorkoutsArr.map((el) => {
            return (
              <div className={style.workout}>
                <p className={style.workout_text}>{el.name}</p>
              </div>
            );
            // return (
            //   <div className={style.workoutMade}>
            //     <p className={style.workoutMade_text}>{el.name}</p>
            //     <img className={style.workoutMade_img} src={made} alt="made" />
            //   </div>
            // );
          })}
        </div>
      </div>
    </div>
  );
};
