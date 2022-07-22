import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice';
import detailReducer from './detailSlice';
import homeReducer from './homeSlice';
const store = configureStore({
  reducer: {
    search: searchReducer,
    detail: detailReducer,
    home: homeReducer,
  },
});

export default store;
