import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  usersData: [],
  isLoading: true,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
});

export default userSlice.reducer;
