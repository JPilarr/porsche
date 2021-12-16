import { Box, Button, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { SimpleLayout } from "components/SimpleLayout";
import { ReactComponent as IconInvite } from "static/icons/invite.svg";
import { ReactComponent as IconProfile } from "static/icons/profile-2user.svg";
import { ReactComponent as IconNote } from "static/icons/note.svg";
import { Link } from "react-router-dom";

export const InitialPage = () => {
  return (
    <SimpleLayout>
      <Box margin="auto" maxW="850px" w="100%" pt={10}>
        <Heading as="h2" size="md" mb={10}>
          Welcome to Daato
        </Heading>
        <HStack spacing={4}>
          <Box
            w="50%"
            borderRadius="16px"
            border="4px solid rgba(48, 131, 255, 0.06)"
            p={8}
            bg="background.light"
          >
            <HStack spacing={4} mb={8} alignItems="flex-start">
              <Icon as={IconProfile} w="28px" h="28px" />
              <Text fontWeight={600}>
                Invite contributor from your supply chain right away to add
                their information.
              </Text>
            </HStack>
            <Button variant="outline" ml="40px">
              Add contributor <Icon as={IconInvite} ml={2} />
            </Button>
          </Box>
          <Box
            w="50%"
            borderRadius="16px"
            p={8}
            bg="rgba(48, 131, 255, 0.06)"
            alignItems="flex-start"
          >
            <HStack spacing={4} mb={8} alignItems="flex-start">
              <Icon as={IconNote} w="28px" h="28px" />
              <Text fontWeight={600}>
                Company X requested your input. Please submit all information
                related to Mica in your production.
              </Text>
            </HStack>
            <Link to="/questionnaire">
              <Button colorScheme="blue" ml="40px">
                Get started
              </Button>
            </Link>
          </Box>
        </HStack>
      </Box>
    </SimpleLayout>
  );
};
