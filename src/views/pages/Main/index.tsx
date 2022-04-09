import React from 'react';
import { Link } from 'react-router-dom';
import { routeMap } from 'views/pages/routes';

function MainPage() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }}>
      <h2>Bienvenido a Dog&apos;s app</h2>
      <div className="mt-4">
        <h4>Aun no eliges tu raza favorita</h4>
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
