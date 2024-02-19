import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './output.css'
import axios from 'axios';

import SignIn from './pages/SignIn'
import Home from './pages/Home'

import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Orders from './pages/Profile/Orders'
import User from './pages/Profile/User'
import Products from './pages/Products'

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Forgot_password from './pages/forgot_password'
import New_password from './pages/New_password'

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
    },
    {
        path: "/forgot-password",
        element: <Forgot_password />
    },
    {
        path:"/reset-password/:token",
        element: <New_password />
    },
])

//<Home />
//SignIn

axios.defaults.baseURL = 'http://app.welfare.ws/';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://app.welfare.ws/';
axios.defaults.withCredentials = true;

function App() {

    axios.defaults.baseURL = 'http://app.welfare.ws/';
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://app.welfare.ws/';
    axios.defaults.withCredentials = true;

    return (
        <>
            <ToastContainer />
            <RouterProvider router={router}>
            </RouterProvider>
        </>
    )
}

export default App
