import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    filterVideoPage: [],
    isFilter: false,
  },
  reducers: {
    filterVideoAction: (state, action) => {
      state.filterVideoPage = action.payload;
      state.isFilter = true;
    },
  },
});
export const { filterVideoAction } = homeSlice.actions;
export default homeSlice.reducer;
