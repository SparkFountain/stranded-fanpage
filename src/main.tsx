import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LandingPage } from './pages/landing/LandingPage';
import { Imprint } from './pages/imprint/ImprintPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/imprint',
    element: <Imprint />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
