import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './output.css'

import SignIn from './pages/SignIn'
import Home from './pages/Home'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Orders from './pages/Profile/Orders'
import User from './pages/Profile/User'
import Products from './pages/Products'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/profile/orders",
    element: <Orders />
  },
  {
    path: "/profile/favourites"
  },
  {
    path: "/profile/history"
  },
  {
    path: "/profile",
    element: <User />
  },
  {
    path: "/products",
    element: <Products />
  }
])

//<Home />
//SignIn

function App() {

  return (
    <>
     <RouterProvider router={router}>

     </RouterProvider>
    </>
  )
}

export default App
