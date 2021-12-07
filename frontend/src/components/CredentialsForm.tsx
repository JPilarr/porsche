import { Box, VStack } from "@chakra-ui/react";
import { CredentialsFormHeader } from "components/CredentialsFormHeader";
import { FC, ReactNode } from "react";

export const CredentialsForm: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box
      borderRadius="16px"
      bg="white"
      maxW="560px"
      margin="auto"
      overflow="hidden"
    >
      <VStack>
        <CredentialsFormHeader />
      </VStack>
      <VStack w="100%" pb={8} pt={8} px={10}>
        {children}
      </VStack>
    </Box>
  );
};
