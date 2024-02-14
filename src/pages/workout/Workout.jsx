import React from "react";
import { useParams } from "react-router-dom";
import { courses } from "./MocData";


export const Workout = () => {
  const params = useParams();
  const course = courses.find((course) => course.nameEN === params.id)
  return (
    <>
      <div>{course.nameRU}</div>
    </>
  );
};