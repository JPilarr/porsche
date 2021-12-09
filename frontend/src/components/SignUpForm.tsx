import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { CredentialsForm } from "components/CredentialsForm";
import { SignUpFormInput } from "interfaces";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

export const SignUpForm = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    watch,
  } = useForm();

  const [show, setShow] = useState(false);
  const handlePasswordIconClick = () => setShow(!show);
  const toast = useToast();

  const mutation = useMutation(
    (data: SignUpFormInput) =>
      axios.post(`${process.env.REACT_APP_API}/users/signup/`, data),
    {
      onSuccess: () => {
        toast({
          title: "Account was successfully created",
          status: "success",
          position: "top",
          duration: 9000,
          isClosable: true,
        });
      },
    }
  );

  const [step, setStep] = useState(0);

  const handleSignUp = (data: SignUpFormInput) => {
    mutation.mutate(data);
  };

  return (
    <CredentialsForm>
      <HStack w="100%" pb={6}>
        <Divider />
        <Text fontSize="sm" fontWeight="500" color="font.lightGray">
          {step === 0 ? <>COMPANY&nbsp;DETAILS</> : <>YOUR&nbsp;DETAILS</>}
        </Text>
        <Divider />
      </HStack>
      <Box
        as="form"
        id="document-form"
        onSubmit={handleSubmit(handleSignUp)}
        w="100%"
      >
        <VStack w="100%" spacing={4} d={step === 0 ? "flex" : "none"}>
          <FormControl isInvalid={errors.company}>
            <FormLabel>Company name</FormLabel>
            <Input
              id="company"
              {...register("company", {
                required: "Company is required.",
                maxLength: 50,
              })}
              maxLength={50}
              placeholder="Name of company"
              autocomplete="company"
            />
            <FormErrorMessage textColor="red.error">
              {errors.company?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.duns}>
            <FormLabel>Duns Nr.</FormLabel>
            <Input
              id="duns"
              {...register("duns", {
                required: "Duns Nr. is required.",
                maxLength: 50,
              })}
              placeholder="Duns Nr."
            />
            <FormErrorMessage textColor="red.error">
              {errors.duns?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.country} pb={6}>
            <FormLabel>Country</FormLabel>
            <Input
              id="country"
              maxLength={50}
              placeholder="Country"
              autocomplete="off"
              {...register("country", {
                required: "country is required.",
                maxLength: 50,
              })}
            />
            <FormErrorMessage textColor="red.error">
              {errors.country?.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            w="100%"
            colorScheme="blue"
            isDisabled={
              !watch("company") || !watch("duns") || !watch("country")
            }
            onClick={() => setStep(1)}
          >
            Next
          </Button>
        </VStack>
        {/* STEP 2 */}
        <VStack w="100%" spacing={4} d={step === 1 ? "flex" : "none"}>
          <FormControl isInvalid={errors.name}>
            <FormLabel>Full name</FormLabel>
            <Input
              id="name"
              {...register("name", {
                required: "Your name is required.",
                maxLength: 50,
              })}
              maxLength={50}
              placeholder="Your name"
            />
            <FormErrorMessage textColor="red.error">
              {errors.name?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.username}>
            <FormLabel>Email</FormLabel>
            <Input
              id="username"
              {...register("username", {
                required: "Your email is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
              autocomplete="email"
              placeholder="Your email"
            />
            <FormErrorMessage textColor="red.error">
              {errors.username?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                id="password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: 6,
                })}
                type={show ? "text" : "password"}
                placeholder="Your password"
              />
              <InputRightElement
                onClick={handlePasswordIconClick}
                pr={2}
                cursor="pointer"
              >
                {show ? "Hide" : "Show"}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage textColor="red.error">
              {errors.password?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.phone_number}>
            <FormLabel>Phone number</FormLabel>
            <Input
              id="phone_number"
              {...register("phone_number", {
                required: "Your Phone number is required.",
                pattern: {
                  value:
                    /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/i,
                  message: "invalid phone number",
                },
              })}
              autocomplete="tel"
              placeholder="Your Phone number"
            />
            <FormErrorMessage textColor="red.error">
              {errors.phone_number?.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.job} pb={6}>
            <FormLabel>Job title</FormLabel>
            <Input
              id="job"
              {...register("job", {
                required: "Your title / role is required.",
              })}
              placeholder="Your title / role"
            />
            <FormErrorMessage textColor="red.error">
              {errors.job?.message}
            </FormErrorMessage>
          </FormControl>
          <Button w="100%" colorScheme="blue" type="submit">
            Confirm
          </Button>
        </VStack>
        <Center mt={8}>
          <Text
            fontSize="sm"
            color="font.gray3"
            letterSpacing="0.1em"
            fontWeight="500"
          >
            {step + 1}/2
          </Text>
        </Center>
      </Box>
    </CredentialsForm>
  );
};
