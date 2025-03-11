import React, { Children } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import RootLayout from "../layout/RootLayout";
import { useAuth } from "../store";

export const AppRoutes = () => {
  const { isCheckingAuth, user } = useAuth();
  if (isCheckingAuth) {
    return
  }

  const routes = [
    {
      element: <AuthLayout />,
      children: [{ path: "login", element: <Login /> }],
    },
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ];
  const route = createBrowserRouter(routes);
  return <RouterProvider router={route} />;
};
