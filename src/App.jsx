import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppRoutes from '../src/utils/AppRoutes'
export const App = () => {

  let router = createBrowserRouter(AppRoutes)
  return <>
  <RouterProvider router={router}></RouterProvider>
  </>
}
