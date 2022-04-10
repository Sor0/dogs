import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'views/pages/Main';
import { routeMap } from 'views/pages/routes';
import { loadFavorite } from './app/store/slices/breeds';

const DogPage = lazy(() => import('views/pages/Breeds'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavorite());
  }, []);

  return (
    <div>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={routeMap.dogs} element={<DogPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
