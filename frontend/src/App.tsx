import { ChakraProvider } from "@chakra-ui/react";
import { endpoint } from "api";
import { PublicPage } from "components/PublicPage";
import { RequireAuth } from "components/RequireAuth";
import { useRequest } from "hooks/useRequest";
import { HomePage } from "pages";
import { InitialPage } from "pages/initial";
import { RequestPage } from "pages/request";
import { InvitePage } from "pages/invite";
import { LoginPage } from "pages/login";
import { QuestionnairePage } from "pages/questionnaire";
import Review from "pages/Review";
import ReviewApprove from "pages/Review/ReviewApprove";
import ReviewDone from "pages/Review/ReviewDone";
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
        url: endpoint.me,
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

        if (data.isAxiosError && user?.username) {
          return signout();
        }

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
            <Route path="/request" element={<RequestPage />} />
            <Route path="/questionnaire" element={<QuestionnairePage />} />
            <Route path="/initial" element={<InitialPage />} />
            <Route path="/review" element={<Review />} />
            <Route path="/review/approve" element={<ReviewApprove />} />
            <Route path="/review/done" element={<ReviewDone />} />
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
