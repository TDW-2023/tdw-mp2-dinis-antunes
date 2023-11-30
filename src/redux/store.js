import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSliceRedux';

export const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

