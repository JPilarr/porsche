import { ChakraProvider } from "@chakra-ui/react";
import { HomePage } from "pages";
import { LoginPage } from "pages/login";
import { SignUpPage } from "pages/sign-up";
import { Route, Routes } from "react-router-dom";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { InvitePage } from "pages/invite";
import { InquiriesPage } from "pages/inquiries";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;
