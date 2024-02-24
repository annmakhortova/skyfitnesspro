import { Routes, Route } from "react-router-dom";
import { Workout } from "./pages/workout/Workout";
import { Training } from "./pages/training/Training";
import { Main } from "./pages/main/main";
import { Profile } from "./pages/profile/Profile";

import { LoginSignup } from "./pages/registration/registration";

import { SelectWorkout } from "./pages/selectWorkout/SelectWorkout";


export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/" element={<Main />} />
        <Route path="/workout/:id" element={<Workout />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/training" element={<Training />} />
        <Route path="/selectworkout" element={<SelectWorkout />} />

      </Routes>
  );
};

