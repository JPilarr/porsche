import { ChakraProvider } from "@chakra-ui/react";
import { useRequest } from "hooks/useRequest";
import { HomePage } from "pages";
import { InquiriesPage } from "pages/inquiries";
import { InvitePage } from "pages/invite";
import { LoginPage } from "pages/login";
import { SignUpPage } from "pages/sign-up";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "utils/auth";
import theme from "./theme";

const App = () => {
  const { user, signout, signin, token } = useAuth();
  const { request } = useRequest();

  const { refetch } = useQuery(
    "me",
    async () => {
      const response = await request({
        url: "/api/users/me",
      });
      return response;
    },
    {
      onError: () => {
        if (user?.username) {
          signout();
        }
      },
      onSuccess: (data: any) => {
        const newUser = data?.data;

        if (newUser?.username) {
          signin({ token, user: newUser });
        }
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [token]);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/invite" element={<InvitePage />} />
          <Route path="/inquiries" element={<InquiriesPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </ChakraProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
