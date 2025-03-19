import { useLocation, Navigate } from "react-router";

export function PrivateRoutes({ isAuthenticated, children }) {
  const location = useLocation();
  if (!isAuthenticated) {
    <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
  
}

export function PublicRoutes({ isAuthenticated, children }) {
  const location = useLocation();
  if (isAuthenticated) {
    <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return children;
}
