import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    allCourses: null,
    allWorkouts: null,
  },
  reducers: {
    setAllCourses(state, action) {
      state.allCourses = action.payload;
    },
    setAllWorkouts(state, action) {
      state.allWorkouts = action.payload;
    },
  },
});

export const { setAllCourses, setAllWorkouts } = coursesSlice.actions;

export default coursesSlice.reducer;