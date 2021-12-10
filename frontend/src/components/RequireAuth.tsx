import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "utils/auth";

export const RequireAuth = () => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
};
