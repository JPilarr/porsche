import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { LogInFormInput } from "interfaces";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { CredentialsForm } from "./CredentialsForm";
import axios, { AxiosError } from "axios";
import { useAuth } from "utils/auth";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const auth = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const mutation = useMutation(
    (data: LogInFormInput) =>
      axios.post(`${process.env.REACT_APP_API}/users/login/`, data),
    {
      onError: (error: AxiosError) => {
        const errorMessage =
          error?.response?.data?.["non_field_errors"] ?? error.message;
        toast({
          title: "Login Error",
          description: errorMessage,
          status: "error",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      },
      onSuccess: (data) => {
        auth.signin({ token: data.data.token as string, user: null });
        navigate("/");
      },
    }
  );

  const handleLogIn = (data: LogInFormInput) => {
    mutation.mutate(data);
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

        <Button w="100%" mt={4} colorScheme="blue" type="submit">
          Login
        </Button>
      </VStack>
    </CredentialsForm>
  );
};
