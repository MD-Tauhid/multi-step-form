import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../components/Layout/Main';
import Home from '../components/Home/Home';
import ErrorPage from '../ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/aa',
                element: <div>asdasfasdf</div>
            }
        ]
    }
])

export default router;