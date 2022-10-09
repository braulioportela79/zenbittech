import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'feedback',
  initialState: {
    name: '',
    email: '',
    message: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const { setName, setEmail, setMessage } = slice.actions;

export default slice.reducer;
