import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchVideoPage: '',
  },
  reducers: {
    searchVideoAction: (state, action) => {
      state.searchVideoPage = action.payload;
    },
  },
});
export const { searchVideoAction } = searchSlice.actions;
export default searchSlice.reducer;
