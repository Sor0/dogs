import { configureStore } from '@reduxjs/toolkit';
import breedSlice from './slices/breeds';

export const store = configureStore({
  reducer: {
    breeds: breedSlice.reducer,
  },
});
