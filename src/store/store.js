import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import coursesReduser from './coursesSlice'

export default configureStore({
  reducer: {
    userApp: userReducer,
    coursesApp: coursesReduser,
   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});