import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout } from "../layout/AuthLayout";
import Home from "../pages/Home";
import { Login } from "../pages/Login";
import RootLayout from "../layout/RootLayout";
import { useAuth } from "../store";
import Spinner from "../component/Spinner";
import { PrivateRoutes, PublicRoutes } from "./ProtectedRoutes";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Search from "../pages/Search";

export const AppRoutes = () => {
  const { isCheckingAuth, user, userToken } = useAuth();
  console.log(userToken);

  if (isCheckingAuth) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  const routes = [
    {
      element: <AuthLayout />,
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
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
  ];
  const route = createBrowserRouter(routes);
  return <RouterProvider router={route} />;
};
