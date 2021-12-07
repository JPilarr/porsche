import { Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { ReactComponent as IconProtect } from "static/icons/protect.svg";

export const CredentialsFormHeader = () => {
  return (
    <HStack
      backgroundColor="brand.primary"
      alignItems="flex-start"
      spacing={6}
      p={8}
    >
      <Icon as={IconProtect} w="52px" h="52px" flexShrink="0" />
      <VStack alignItems="flex-start">
        <Heading size="sm" color="white">
          We protect your data
        </Heading>
        <Text color="white">
          We keep all your information safe and protected from threats. We also
          make sure that only you have access to it. You have full ownership at
          all times.
        </Text>
      </VStack>
    </HStack>
  );
};
