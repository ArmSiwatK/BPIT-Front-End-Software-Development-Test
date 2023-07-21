import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import Promotion from './pages/Promotion';

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/promotion',
            element: <Promotion />
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Routes;