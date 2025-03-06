import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import { Login } from "../pages/Login";

export const AppRoutes = () => {
  const routes = [
    {
      element: <AuthLayout />,
      children: [{ path: "login", element: <Login /> }],
    },
  ];
  const route = createBrowserRouter(routes);
  return <RouterProvider router={route} />;
};
