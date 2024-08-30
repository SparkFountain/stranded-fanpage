import { createBrowserRouter } from 'react-router-dom';
import { ImprintPage } from './pages/imprint/ImprintPage';
import { LandingPage } from './pages/landing/LandingPage';
import { NotFoundPage } from './pages/404-not-found/NotFoundPage';
import { Stranded1Page } from './pages/stranded-1/Stranded1Page';
import { Stranded2Page } from './pages/stranded-2/Stranded2Page';
import { Stranded3Page } from './pages/stranded-3/Stranded3Page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/imprint',
    element: <ImprintPage />,
  },

  // Stranded I
  {
    path: '/stranded-1',
    element: <Stranded1Page />,
    children: [
      // TODO: this doesn't work as expected, seems to be a "real" child of the parent component instead of individual page
      {
        path: 'flora-and-fauna',
        element: <div>Flora und Fauna</div>,
      },
    ],
  },

  // Stranded II
  {
    path: '/stranded-2',
    element: <Stranded2Page />,
    children: [
      // TODO: this doesn't work as expected, seems to be a "real" child of the parent component instead of individual page
      {
        path: 'flora-and-fauna',
        element: <div>Flora und Fauna</div>,
      },
    ],
  },

  // Stranded III
  {
    path: '/stranded-3',
    element: <Stranded3Page />,
    children: [
      // TODO: this doesn't work as expected, seems to be a "real" child of the parent component instead of individual page
      {
        path: 'flora-and-fauna',
        element: <div>Flora und Fauna</div>,
      },
    ],
  },

  // 404 - Not Found
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
