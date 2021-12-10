import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "utils/auth";

export const PublicPage = () => {
  const auth = useAuth();
  const location = useLocation();
  const redirectTo = location?.state?.from ?? "/";

  if (!auth.token) {
    return <Outlet />;
  }
  return <Navigate to={redirectTo} />;
};
