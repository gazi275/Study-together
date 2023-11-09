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
import ErrorPage from './ErrorPage'
import Submission from './Pages/Submission'
import Details from './Pages/Details'
import Update from './Pages/Update'
import PrivateRoute from './privateRoute/PrivateRoute'




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
     errorElement: <ErrorPage />,
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
        element:<Assignments></Assignments>,
        loader: () => fetch("http://localhost:5001/assignment"),
      },
      {
        path:"/createAssignment",
        element:<CreateAssignment></CreateAssignment>
      },
      {
        path:"/myAssignment",
        element:<MyAssignment></MyAssignment>,
        loader: () => fetch("http://localhost:5001/submit"),
      },
      {
        path:"/submission/:id",
        element:<Submission></Submission>
      },
      {
        path:"/details/:id",
        element:<PrivateRoute>
          <Details></Details>
</PrivateRoute>,
 loader:({params})=>{
     

  return fetch(`http://localhost:5001/details/${params.id}`)}
      },
      {
        path:"/update/:id",
        element:<PrivateRoute>
          <Update></Update>
          </PrivateRoute>
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
