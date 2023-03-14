import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from './App';
import Base from './Components/Base';
import Appbar from './Components/Appbar';
import Toppings from './Components/Toppings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/base',

    element: (
      <>
        <Appbar />
        <Base />
        <Toppings />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
