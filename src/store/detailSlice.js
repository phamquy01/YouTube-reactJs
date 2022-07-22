import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
  name: 'search',
  initialState: {
    homeId: '',
  },
  reducers: {
    openVideoFromHome: (state, action) => {
      state.homeId = action.payload;
    },
  },
});
export const { openVideoFromHome } = detailSlice.actions;
export default detailSlice.reducer;
