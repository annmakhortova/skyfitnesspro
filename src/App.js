import { useEffect } from "react";
import "./App.css";
import { AppRoutes } from "./routes";
import { getAllCourses, getAllWorkouts } from "./pages/api";
import { useDispatch } from "react-redux";
import { setAllCourses, setAllWorkouts } from "./store/coursesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCourses()
      .then((courses) => {
        // console.log("Курсы:", courses);
        dispatch(setAllCourses(Object.values(courses)));
      })
      .catch(() => {})
      .finally(() => {});
  }, []);

  useEffect(() => {
    getAllWorkouts().then((workouts) => {
      console.log(Object.values(workouts));
      dispatch(setAllWorkouts(Object.values(workouts)));
    });
  }, []);

  return (
    <>
      <AppRoutes />
    </>
  );
}

export default App;
