/* eslint-disable no-param-reassign */
import { Dispatch } from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { BreedRepository } from 'app/repositories/breeds';
import { BreedState } from 'core/types/AppSate';
import { Breed } from 'core/entities/breed';
import { Favorite } from 'core/types/favorite';

const initialState: BreedState = {
  items: [],
  isLoading: false,
  selected: undefined,
  favorite: undefined,
  loadingSubBreeds: false,
  subBreedImages: {},
};

const breedSlice = createSlice({
  name: 'breeds',
  initialState,
  reducers: {
    setBreeds: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
    laodingSubBreads: (state, action) => {
      state.loadingSubBreeds = action.payload;
    },
    setFavorite: (state, action) => {
      state.favorite = action.payload;
    },
    select: (state, action) => {
      state.selected = action.payload;
    },
    setSubBreedImages: (state, action) => {
      state.subBreedImages = action.payload;
      state.loadingSubBreeds = false;
    },
  },
});

export const { actions } = breedSlice;

export default breedSlice;

export const loadAllbreeds = () => async (dispatch: Dispatch<any>) => {
  dispatch(actions.loading(true));
  const repository = new BreedRepository();
  const response = await repository.getAll();
  if (response.status === 200) {
    const content: any = await response.json();
    const breeds: Breed[] = [];
    const items = content.message;
    Object.keys(items).forEach((key: string) => breeds.push({
      name: key,
      childBreeds: items[key],
    }));
    dispatch(actions.setBreeds(breeds));
  }
};

export const laodBreedsImages = (breed: Breed) => async (dispatch: Dispatch<any>) => {
  dispatch(actions.laodingSubBreads(true));
  const repository = new BreedRepository();
  const requests = breed.childBreeds.map(
    (subBreed: string) => repository.getImages(breed.name, subBreed),
  );

  const jsons = await Promise.all(requests).then(
    (...responses) => responses[0].map((respose: any) => respose.json()),
  );

  Promise.all(jsons).then(
    (...objects) => {
      const imageMap: any = {};
      breed.childBreeds.forEach(
        (key: string, index: number) => {
          const data: any = objects[0][index];
          imageMap[key] = data.message;
        },
      );
      dispatch(actions.setSubBreedImages(imageMap));
    },
  );
};

export const setFavorite = (favorite: Favorite) => (dispatch: Dispatch<any>) => {
  const repository = new BreedRepository();
  repository.saveFavorite(favorite);
  dispatch(actions.setFavorite(favorite));
};

export const removeFavorite = () => (dispatch: Dispatch<any>) => {
  const repository = new BreedRepository();
  repository.removeFavorite();
  dispatch(actions.setFavorite(undefined));
};

export const loadFavorite = () => (dispatch: Dispatch<any>) => {
  const repository = new BreedRepository();
  const favorite = repository.getFavorite();
  dispatch(actions.setFavorite(favorite));
};
