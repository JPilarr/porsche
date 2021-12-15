import {
  Box,
  Button,
  Heading,
  Link as ChakraLink,
  VStack,
} from "@chakra-ui/react";
import { AppLayout } from "components/AppLayout";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <AppLayout>
      <Heading as="h1" mb={20}>
        Dashboard
      </Heading>
      <Box mb={10}>
        <ChakraLink to="/initial" as={Link}>
          Initial Screen
        </ChakraLink>
      </Box>
      <VStack spacing={4} alignItems="flex-start" mb={8}>
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
