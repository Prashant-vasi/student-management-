// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer
  }
});
