import {Routes, Route } from "react-router-dom";
import { Workout } from "./pages/workout/Workout";
import { Main } from "./pages/main/main";
import { SelectWorkout } from "./pages/selectWorkout/SelectWorkout";

export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/workout/:id" element={<Workout />} />
        <Route path="/selectworkout" element={<SelectWorkout />} />
      </Routes>
  );
};
