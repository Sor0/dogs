import { createSlice } from '@reduxjs/toolkit';
import { Breed } from 'core/entities/breed';
import { BreedRepository } from 'app/repositories/breeds';

interface BreedState {
  items: Breed[];
  isLoading: boolean;
}

const initialState: BreedState = {
  items: [],
  isLoading: false,
};

const loadAllbreeds = () => () => {
  const repository = new BreedRepository();
  return repository.getAll();
};

const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    loadBreeds(state) {
      loadAllbreeds();
      console.log(state);
    },
  },
});

export const { actions } = breedSlice;

export default breedSlice;
