import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Home from './Pages/home/Home'
import Root from './root/Root'

import Contact from './Pages/About/Contact'
import Login from './authentication/Login'
import Register from './authentication/Register'
import Assignments from './Pages/Assignments'
import AuthProvider from './provider/AuthProvider'
import CreateAssignment from './Pages/CreateAssignment'
import MyAssignment from './Pages/MyAssignment'




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
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/assignment",
        element:<Assignments></Assignments>
      },
      {
        path:"/createAssignment",
        element:<CreateAssignment></CreateAssignment>
      },
      {
        path:"/myAssignment",
        element:<MyAssignment></MyAssignment>
      }
    ]
    },
  ]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
