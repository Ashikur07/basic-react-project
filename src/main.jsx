import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import Root from './Root/Root.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement : <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
