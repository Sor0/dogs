import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from 'views/pages/Main';
import { routeMap } from 'views/pages/routes';

const DogPage = lazy(() => import('views/pages/Dogs'));

function App() {
  return (
    <div>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path={routeMap.dogs} element={<DogPage />} />
          {/* <Route path={routeMap.rates} element={<Rates />}>
          <Route path=":id/details" element={<RateDetailPage />} />
          <Route index element={<RateListPage />} />
        </Route>
        <Route path={routeMap.shoppingCart} element={<ShoppingCartPage />}>
          <Route index element={<ShoppingCartResumePage />} />
        </Route> */}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
