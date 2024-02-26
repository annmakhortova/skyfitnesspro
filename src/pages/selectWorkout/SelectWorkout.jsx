import React, { useEffect, useState } from "react";
import { workouts } from "./WorkoutsMocData";
import { courses } from "../workout/MocData";
import style from "./SelectWorkout.module.scss";
import { getAllCourses, getAllWorkouts } from "../api";
// import made from "./made.png";
// import { getAllCourses } from "../api";

export const SelectWorkout = () => {
  const params = "Yoga";
  const [course, setCourse] = useState();
  const [currentWorkoutsArr, setCurrentWorkoutsArr] = useState([]);

  useEffect(() => {
    // console.log(params);
    getAllCourses()
      .then((courses) => {
        console.log("Курсы:", courses);
        setCourse(
          Object.values(courses).find((course) => course.nameEN === params)
        );
      })
      .catch(() => {})
      .finally(() => {
        // console.log(course)
      });
  }, [params.id]);

  // useEffect(()=>{
  getAllWorkouts().then((workoutss) => {
    console.log();
  });
  // })

  useEffect(() => {
    // console.log(1);
    // console.log(course);
    if (course) {
      // console.log(2);

      course.workouts.forEach((id) => {
        // setCurrentWorkoutsArr([])

        // console.log(id);
        workouts.map((work) => {
          // console.log(work);
          if (id === work._id) {
            // console.log(work);
            // console.log(currentWorkoutsArr)
            // currentWorkoutsArr.push(work)

            ;
            // console.log(work);
            return setCurrentWorkoutsArr([...currentWorkoutsArr, work]);

          }

        });

      });
    }
  }, [course]);

  useEffect(() => {
    console.log(currentWorkoutsArr);
  }, [currentWorkoutsArr]);

  const currentCourse = "Йога";
  const currentWorkoutsId = courses.find(
    (course) => course.nameRU === currentCourse
  ).workouts;
  const currentWorkouts = workouts.filter((e) =>
    currentWorkoutsId.includes(e._id)
  );
  return (
    <div className={style.selectWorkout}>
      <div className={style.selectWorkout_box}>
        <h1 className={style.selectWorkout_title}>Выберите тренировку</h1>
        <div className={style.workouts}>
          {currentWorkouts.map((el) => {
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
