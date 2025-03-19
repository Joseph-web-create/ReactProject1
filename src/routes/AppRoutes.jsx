import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import RootLayout from "../layout/RootLayout";
import { useAuth } from "../store";
import Spinner from "../component/Spinner";
import { PrivateRoutes, PublicRoutes } from "./ProtectedRoutes";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";

export const AppRoutes = () => {
  const { isCheckingAuth, user, userToken } = useAuth();
  console.log(user);

  if (isCheckingAuth) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  const routes = [
    {
      element: user.isAuthenticated ? <AuthLayout /> : <Navigate to="/login" />,
      children: [{ path: "login", element: <Login /> }],
    },
    {
      path: "/",
      element: (
        <>
          <RootLayout />
        </>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products/:category", //useParams
          element: <Products />,
        },
        {
          path: "product/:productId",
          element: <ProductDetails />,
        },
      ],
    },
  ];
  const route = createBrowserRouter(routes);
  return <RouterProvider router={route} />;
};
