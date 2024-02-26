import { Routes, Route } from "react-router-dom";
import { Workout } from "./pages/workout/Workout";
import { Training } from "./pages/training/Training";
import { Main } from "./pages/main/main";

import { Profile } from "./pages/profile/Profile";


//import { NewPassword } from "./pages/newPassword/newPassword";
import { NewLogin } from "./pages/newLogin/newLogin";

import { Progress } from "./pages/progress/Progress";
import { ProgressCheck } from "./pages/progress/ProgressCheck";

import { LoginSignup } from "./pages/registration/registration";
import { Login } from "./pages/login/login";

import { SelectWorkout } from "./pages/selectWorkout/SelectWorkout";
import { NewPassword } from "./pages/newPassword/newPassword";


export const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/signup" element={<LoginSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
        <Route path="/workout/:id" element={<Workout />} />


        <Route path="/profile" element={<Profile />} />
        <Route path="/newLogin" element={<NewLogin />} />
        <Route path="/newPassword" element={<NewPassword />} />

        <Route path="/training" element={<Training />} />

        <Route path="/selectworkout" element={<SelectWorkout />} />



        <Route path="/Progress" element={<Progress />} />
        <Route path="/ProgressCheck" element={<ProgressCheck />} />

      </Routes>
  );
};

