import React, { useEffect } from 'react';

import './Breed/index.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from 'core/types/AppSate';
import {
  loadAllbreeds,
  actions,
  laodBreedsImages,
  setFavorite,
  removeFavorite,
} from 'app/store/slices/breeds';
import { Breed } from 'core/entities/breed';
import { Spinner } from 'reactstrap';
import BreedList from './Breed';
import { SubBreed } from './SubBreed';

import './index.css';

export default function BreedPage() {
  const breeds = useSelector((state: AppState) => state.breeds.items);
  const selected = useSelector((state: AppState) => state.breeds.selected);
  const imageMap = useSelector((state: AppState) => state.breeds.subBreedImages);
  const favorite = useSelector((state: AppState) => state.breeds.favorite);
  const loading = useSelector((state: AppState) => state.breeds.isLoading);
  const laodingImages = useSelector((state: AppState) => state.breeds.loadingSubBreeds);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllbreeds());
  }, []);

  const handleSelect = (select: Breed | undefined) => {
    dispatch(actions.select(select));
    if (select) {
      dispatch(laodBreedsImages(select));
    }
  };

  const addFavoriteHandler = (subBreed: string) => {
    let payload = {
      subBreed,
      breed: selected?.name || '',
      image: '',
    };

    const images = imageMap[subBreed] as string[];
    if (images) {
      payload = { ...payload, image: images[0] };
    }

    dispatch(setFavorite(payload));
  };

  const removeFavoriteHandler = () => {
    dispatch(removeFavorite());
  };

  const handleSetFavorite = (subBreed: string) => {
    if (subBreed === favorite?.subBreed) {
      removeFavoriteHandler();
    } else {
      addFavoriteHandler(subBreed);
    }
  };

  const getSubBred = () => {
    if (laodingImages) {
      return (
        <div className="wrapper d-flex justify-content-center align-center">
          <Spinner>
            Cargando...
          </Spinner>
        </div>
      );
    }

    return (
      <div className="wrapper px-5 pt-3">
        <SubBreed
          selected={selected!}
          onClose={() => handleSelect(undefined)}
          imageMap={imageMap}
          onSetFavorite={handleSetFavorite}
          favorite={favorite}
        />
      </div>
    );
  };

  return (
    <div>
      {
        loading ? (
          <div className="d-flex justify-content-center">
            <Spinner>
              Cargando...
            </Spinner>
          </div>
        ) : <BreedList breeds={breeds} onSelect={handleSelect} />
      }
      {
        selected ? getSubBred() : null
      }
    </div>
  );
}
