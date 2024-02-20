import {Routes, Route } from "react-router-dom";
import { Workout } from "./pages/workout/Workout";
import { Main } from "./pages/main/main";
import LoginSignup from "./pages/registration/registration";

export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/" element={<Main />} />
        <Route path="/workout/:id" element={<Workout />} />
      </Routes>
  );
};
