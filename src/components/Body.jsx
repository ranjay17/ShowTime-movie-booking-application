import React from 'react'
import Header from './Header'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';

const Body = () => {
    const appEouter = createBrowserRouter([
        {
            path: '/',
            element: <Browse />
        },
        {
            path: '/login',
            element: <Login />
        }
    ])
  return (
    <div>
        <RouterProvider router={appEouter} />
    </div>
  )
}

export default Body
