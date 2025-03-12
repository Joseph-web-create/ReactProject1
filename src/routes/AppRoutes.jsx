import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import RootLayout from "../layout/RootLayout";
import { useAuth } from "../store";
import Spinner from "../component/Spinner";
import { PrivateRoutes, PublicRoutes } from "./ProtectedRoutes";

export const AppRoutes = () => {
  const { isCheckingAuth, user } = useAuth();
  console.log(user.isAuthenticated);
  
  if (isCheckingAuth) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  const routes = [
    {
      element: (
        <PublicRoutes isAuthenticated={user.isAuthenticated}>
          <AuthLayout />
        </PublicRoutes>
      ),
      children: [{ path: "login", element: <Login /> }],
    },
    {
      path: "/",
      element: (
        <PrivateRoutes isAuthenticated={user.isAuthenticated}>
          <RootLayout />
        </PrivateRoutes>
      ),
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
