import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter , RouterProvider, Outlet} from "react-router-dom"
import HomePage from './components/Homepage.jsx'
import Component from './components/home.jsx'

const appRouter = createBrowserRouter([
    {
      path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />
          },
          {
            path: "/home",
            element: <Component/>
          }
      ],
      errorElement: <Error />,
    },
  ])


const root = ReactDOM.createRoot(document.getElementById('root'))
    
root.render(<RouterProvider router={appRouter} />)
