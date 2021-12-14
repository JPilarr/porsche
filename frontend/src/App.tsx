import { ChakraProvider } from "@chakra-ui/react";
import { PublicPage } from "components/PublicPage";
import { RequireAuth } from "components/RequireAuth";
import { useRequest } from "hooks/useRequest";
import { HomePage } from "pages";
import { Co2FormPage } from "pages/co2";
import { InquiriesPage } from "pages/inquiries";
import { InvitePage } from "pages/invite";
import { LoginPage } from "pages/login";
import { MicaFormPage } from "pages/mica";
import { SignUpPage } from "pages/sign-up";
import { useEffect } from "react";
import { useQuery } from "react-query";
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
    if (token) {
      refetch();
    }
  }, [token]);

  return (
    <>
      <ChakraProvider theme={theme}>
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/invite" element={<InvitePage />} />
            <Route path="/inquiries" element={<InquiriesPage />} />
            <Route path="/mica" element={<MicaFormPage />} />
            <Route path="/co2" element={<Co2FormPage />} />
          </Route>

          <Route element={<PublicPage />}>
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </ChakraProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
};

export default App;
