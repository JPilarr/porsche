import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import Layout from "components/Layout";
import { SignUpFormInput } from "interfaces";
import { useForm } from "react-hook-form";

export const SignUpPage = () => {
  const {
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data: SignUpFormInput) => {
    console.log({ data });
  };
  return (
    <Layout>
      <Box
        borderRadius="16px"
        bg="white"
        maxW="400px"
        margin="auto"
        overflow="hidden"
      >
        <VStack>
          <HStack
            padding="16px"
            backgroundColor="blue"
            alignItems="flex-start"
            spacing={4}
          >
            <Box
              width="40px"
              height="40px"
              backgroundColor="gray"
              borderRadius="8px"
              flexShrink="0"
            />
            <VStack alignItems="flex-start">
              <Heading size="sm" color="white">
                We protect your data
              </Heading>
              <Text color="white">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Aliquam ornare wisi eu metus. Nullam rhoncus aliquam metus.
              </Text>
            </VStack>
          </HStack>
          <VStack w="100%">
            <VStack w="100%" p="16px">
              <HStack w="100%">
                <Divider />
                <Text>COMPANY&nbsp;DETAILS</Text>
                <Divider />
              </HStack>
              <VStack
                w="100%"
                as="form"
                id="document-form"
                onSubmit={handleSubmit(handleSignUp)}
                spacing={4}
              >
                <FormControl isInvalid={errors.name}>
                  <FormLabel fontSize="sm">Document name</FormLabel>
                  <Input
                    id="name"
                    name="name"
                    maxLength={50}
                    placeholder="Name of company"
                  />
                  <FormErrorMessage textColor="red.error">
                    {errors.name?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.name}>
                  <FormLabel fontSize="sm">Duns Nr.</FormLabel>
                  <Input id="duns" name="duns" placeholder="Duns Nr." />
                  <FormErrorMessage textColor="red.error">
                    {errors.duns?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.name}>
                  <FormLabel fontSize="sm">Country</FormLabel>
                  <Input
                    id="country"
                    name="country"
                    maxLength={50}
                    placeholder="Country"
                  />
                  <FormErrorMessage textColor="red.error">
                    {errors.country?.message}
                  </FormErrorMessage>
                </FormControl>
                <Button w="100%" mt={4}>
                  Next
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </Box>
    </Layout>
  );
};
