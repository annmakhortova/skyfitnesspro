import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    currentUserId: 'GyanmgaAa8btlzVBmnx2QeEq4pI3',
  },
  reducers: {
    setCurrentUser(state, action) {
      console.log(action.payload);
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
