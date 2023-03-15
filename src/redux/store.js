// Redux
import { configureStore } from '@reduxjs/toolkit';
import data from './slices/dataSlice';


export const store = configureStore({
  reducer: {
    data,
  },
});