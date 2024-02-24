import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
  },
  reducers: {
    setUser(state, action) {
      console.log(action.payload);
      state.userName = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
