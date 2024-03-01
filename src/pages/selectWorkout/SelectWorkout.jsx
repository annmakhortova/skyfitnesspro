import React, { useEffect, useState } from "react";
import style from "./SelectWorkout.module.scss";
import { getAllCourses, getAllWorkouts } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentWorkout } from "../../store/coursesSlice";

export const SelectWorkout = () => {
  const params = "Yoga";
  const [course, setCourse] = useState();
  const [allWorkouts, setAllWorkouts] = useState();
  const [currentWorkoutsArr, setCurrentWorkoutsArr] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    getAllCourses()
      .then((courses) => {
        console.log("Курсы:", courses);
        setCourse(
          Object.values(courses).find((course) => course.nameEN === params)
        );
      })
      .catch(() => {})
      .finally(() => {});
  }, [params.id]);

  useEffect(() => {
    getAllWorkouts().then((workoutss) => {
      console.log("Workouts", workoutss);
      setAllWorkouts(Object.values(workoutss));
    });
  }, []);

  useEffect(() => {
    if (course) {
      setCurrentWorkoutsArr(
        allWorkouts.filter((el) => course.workouts.includes(el._id))
      );
    }
  }, [allWorkouts, course]);

  const handleClick = (el) => {
    dispatch(setCurrentWorkout(el));
  };

  return (
    <div className={style.selectWorkout}>
      <div className={style.selectWorkout_box}>
        <h1 className={style.selectWorkout_title}>Выберите тренировку</h1>
        <div className={style.workouts}>
          {currentWorkoutsArr.map((el) => {
            return (
              <div
                className={style.workout}
                key={el.name}
                onClick={() => {
                  handleClick(el);
                }}
              >
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
