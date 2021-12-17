import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link as ChakraLink,
  Text,
  VStack,
} from "@chakra-ui/react";
import { AppLayout } from "components/AppLayout";
import { Link } from "react-router-dom";
import { useAuth } from "utils/auth";

import { ReactComponent as IconEdit } from "static/icons/edit_outline.svg";
import { InquiryTable } from "components/InquiryTable";

export const HomePage = () => {
  const { user } = useAuth();
  return (
    <AppLayout>
      <HStack mb={16} justifyContent="space-between">
        <Box>
          <Heading as="h1" size="lg">
            Hi {user?.name},
          </Heading>
          <Text>
            Manage your data requests to make the most of your Daato account.
          </Text>
        </Box>
        <Link to="/invite">
          <Button colorScheme="blue">
            <Icon as={IconEdit} color="white" mr={2} w="24px" h="24px" /> New
            data request
          </Button>
        </Link>
      </HStack>
      <InquiryTable />
      <Box mb={10} mt={60}>
        <Text mb={6}>Just for testing --&gt;</Text>
        <Box mb={4}>
          <ChakraLink to="/initial" as={Link}>
            Initial Screen
          </ChakraLink>
        </Box>
        <VStack spacing={4} alignItems="flex-start" mb={8}>
          <Link to="/questionnaire">
            <Button colorScheme="blue">Questionnaire</Button>
          </Link>
        </VStack>
      </Box>
    </AppLayout>
  );
};
