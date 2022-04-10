import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routeMap } from 'views/pages/routes';
import { AppState } from 'core/types/AppSate';
import { DogImage } from 'views/components';

function MainPage() {
  const favorite = useSelector((state: AppState) => state.breeds.favorite);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h2>Bienvenido a Dog&apos;s app</h2>
      <div className="mt-4">
        {
          favorite ? (
            <div className="d-flex align-items-center">
              <h4>
                Tu raza favorita es:
                {' '}
                {favorite.breed}
                {' '}
                {favorite.subBreed}
              </h4>
              <div className="mx-2" style={{ height: '10rem', width: '10rem' }}>
                <DogImage image={favorite.image} />
              </div>
            </div>
          ) : <h4>Aun no eliges tu raza favorita</h4>
        }
      </div>
      <div>
        <Link to={routeMap.dogs}>
          Ver las razas
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
