import { AppLayout } from "components/AppLayout";
import { useAuth } from "utils/auth";

export const HomePage = () => {
  const { user } = useAuth();

  return <AppLayout>Dashboard</AppLayout>;
};
