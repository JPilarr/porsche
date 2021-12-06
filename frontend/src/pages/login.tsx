import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import Layout from "components/Layout";
import { LogInFormInput } from "interfaces";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const {
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogIn = (data: LogInFormInput) => {
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
        <VStack w="100%" p="16px">
          <VStack
            w="100%"
            as="form"
            id="document-form"
            onSubmit={handleSubmit(handleLogIn)}
            spacing={4}
          >
            <FormControl isInvalid={errors.name}>
              <FormLabel fontSize="sm">Username</FormLabel>
              <Input
                id="username"
                name="username"
                maxLength={50}
                placeholder="Username"
              />
              <FormErrorMessage textColor="red.error">
                {errors.username?.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.name}>
              <FormLabel fontSize="sm">Password</FormLabel>
              <Input id="password" name="password" type="password" />
              <FormErrorMessage textColor="red.error">
                {errors.password?.message}
              </FormErrorMessage>
            </FormControl>

            <Button w="100%" mt={4}>
              Login
            </Button>
          </VStack>
        </VStack>
      </Box>
    </Layout>
  );
};
