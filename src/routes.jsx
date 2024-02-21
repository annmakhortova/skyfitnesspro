import { Routes, Route } from "react-router-dom";
import { Workout } from "./pages/workout/Workout";
import { Training } from "./pages/training/Training";
import { Main } from "./pages/main/main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/workout/:id" element={<Workout />} />
      <Route path="/training" element={<Training />} />
    </Routes>
  );
};
