import {Routes, Route } from "react-router-dom";
import { Workout } from "./pages/workout/Workout";
import { Main } from "./pages/main/main";
import { Profile } from "./pages/profile/Profile";

export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/workout/:id" element={<Workout />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
  );
};
