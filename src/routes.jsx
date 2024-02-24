import { Routes, Route } from "react-router-dom";
import { Workout } from "./pages/workout/Workout";
import { Main } from "./pages/main/main";
import { SelectWorkout } from "./pages/selectWorkout/SelectWorkout";
import { Progress } from "./pages/progress/Progress";
import { ProgressCheck } from "./pages/progress/ProgressCheck";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/workout/:id" element={<Workout />} />
      <Route path="/selectworkout" element={<SelectWorkout />} />
      <Route path="/Progress" element={<Progress />} />
      <Route path="/ProgressCheck" element={<ProgressCheck />} />
    </Routes>
  );
};
