import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export default configureStore({
  reducer: {
    userApp: userReducer,
   
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});
