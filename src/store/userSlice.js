import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    // userId: null, // Added userId to the initialState
    fullCurrentUser: null,
  },
  reducers: {
    setCurrentUser: (state, action) => {
    console.log(action.payload)
      state.currentUser = action.payload;
    },
    // setUserId: (state, action) => {
    //   console.log(action.payload)
    //   state.userId = action.payload; // This will update the userId in the state
    // },
    setFullCurrentUser: (state, action) => { //Весь текущий пользователь с базы, вместе с его курсами
      // console.log(action.payload)
      state.fullCurrentUser = action.payload;
    },
  },
});

// Export both setCurrentUser and setUserId actions
export const { setCurrentUser, setFullCurrentUser } = userSlice.actions;

export default userSlice.reducer;

