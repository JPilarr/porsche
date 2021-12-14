import { Button, Heading, VStack } from "@chakra-ui/react";
import { AppLayout } from "components/AppLayout";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <AppLayout>
      <Heading as="h1" mb={20}>
        Dashboard
      </Heading>
      <VStack spacing={4} alignItems="flex-start">
        <Link to="/mica">
          <Button colorScheme="blue">Mica Questionnaire</Button>
        </Link>

        <Link to="/co2">
          <Button colorScheme="blue">CO2 Questionnaire</Button>
        </Link>
      </VStack>
    </AppLayout>
  );
};
