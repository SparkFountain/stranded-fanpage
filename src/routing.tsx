import { createBrowserRouter } from 'react-router-dom';
import { ImprintPage } from './pages/imprint/ImprintPage';
import { LandingPage } from './pages/landing/LandingPage';
import { NotFoundPage } from './pages/404-not-found/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/imprint',
    element: <ImprintPage />,
  },

  // 404 - Not Found
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
