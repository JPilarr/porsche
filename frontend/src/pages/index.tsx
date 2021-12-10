import { Heading } from "@chakra-ui/react";
import { AppLayout } from "components/AppLayout";
import { FormComponentsExample } from "components/FormComponentsExample";

export const HomePage = () => {
  return (
    <AppLayout>
      <Heading as="h1">Dashboard</Heading>

      <FormComponentsExample />
    </AppLayout>
  );
};
