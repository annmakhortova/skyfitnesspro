import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,

    currentUserId: 'GyanmgaAa8btlzVBmnx2QeEq4pI3',

    userId: null, // Added userId to the initialState

  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload; // This will update the userId in the state
    },
  },
});

// Export both setCurrentUser and setUserId actions
export const { setCurrentUser, setUserId } = userSlice.actions;

export default userSlice.reducer;
