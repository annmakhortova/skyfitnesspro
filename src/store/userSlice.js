import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,

    currentUserId: 'GyanmgaAa8btlzVBmnx2QeEq4pI3',

    userId: null, // Added userId to the initialState

    fullCurrentUser: null,


  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserId: (state, action) => {
      console.log(action.payload)
      state.userId = action.payload; // This will update the userId in the state
    },
    setFullCurrentUser: (state, action) => { //Весь текущий пользователь с базы, вместе с его курсами
      console.log(action.payload)
      state.fullCurrentUser = action.payload;
    },
  },
});

// Export both setCurrentUser and setUserId actions
export const { setCurrentUser, setUserId, setFullCurrentUser } = userSlice.actions;

export default userSlice.reducer;
