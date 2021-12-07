import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { LogInFormInput } from "interfaces";
import { useForm } from "react-hook-form";
import { CredentialsForm } from "./CredentialsForm";

export const LoginForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const handleLogIn = (data: LogInFormInput) => {
    console.log({ data });
  };

  return (
    <CredentialsForm>
      <VStack
        w="100%"
        as="form"
        id="document-form"
        onSubmit={handleSubmit(handleLogIn)}
        spacing={4}
      >
        <FormControl isInvalid={errors.name}>
          <FormLabel>Username</FormLabel>
          <Input
            id="username"
            {...register("username", {
              required: "username is required.",
            })}
            maxLength={50}
            placeholder="Username"
          />
          <FormErrorMessage textColor="red.error">
            {errors.username?.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.name} pb={6}>
          <FormLabel>Password</FormLabel>
          <Input
            id="password"
            {...register("password", {
              required: "password is required.",
            })}
            type="password"
            placeholder="Password"
          />
          <FormErrorMessage textColor="red.error">
            {errors.password?.message}
          </FormErrorMessage>
        </FormControl>

        <Button w="100%" mt={4} colorScheme="blue">
          Login
        </Button>
      </VStack>
    </CredentialsForm>
  );
};
