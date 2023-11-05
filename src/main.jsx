import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/home/Home'
import Root from './root/Root'

import Contact from './Pages/About/Contact'
import Login from './authentication/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<Contact></Contact>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
    },
  ]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
