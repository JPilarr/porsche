import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Text,
  Input,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  contributor: string | null;
  company: string | null;
  duns: string | null;
  email: string | null;
};

export const StepThree: FC<{
  onSubmit: (data: FormData) => void;
  initialValue: FormData | null;
}> = ({ onSubmit, initialValue }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: initialValue ?? {
      contributor: null,
      company: null,
      duns: null,
      email: null,
    },
  });

  const handleStepSubmit = (data: FormData) => {
    onSubmit({
      contributor: data.contributor,
      company: data.company,
      duns: data.duns,
      email: data.email,
    });
  };

  return (
    <VStack
      w="full"
      as="form"
      onSubmit={handleSubmit(handleStepSubmit)}
      spacing="20px"
    >
      <FormControl isInvalid={!!errors.contributor}>
        <FormLabel variant="secondary">Contributor name</FormLabel>
        <Input
          id="contributor"
          {...register("contributor", {
            required: "Contributor is required.",
          })}
          maxLength={600}
          placeholder="Max Mustermann"
        />
        <FormErrorMessage textColor="red.error">
          {errors.contributor?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.company}>
        <FormLabel variant="secondary">Company name</FormLabel>
        <Input
          id="company"
          {...register("company", {
            required: "Company is required.",
          })}
          maxLength={600}
          placeholder="Company X"
        />
        <FormErrorMessage textColor="red.error">
          {errors.company?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.duns}>
        <FormLabel variant="secondary">
          DUNS number
          <Text as="span" fontWeight={400} color="font.gray">
            {" "}
            <i>(optional)</i>
          </Text>
        </FormLabel>
        <Input id="duns" {...register("duns")} maxLength={600} />
        <FormErrorMessage textColor="red.error">
          {errors.duns?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.email}>
        <FormLabel variant="secondary">Contributor email address</FormLabel>
        <Input
          id="email"
          placeholder="max@email.com"
          maxLength={600}
          {...register("email", {
            required: "Your email is required.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          })}
          autocomplete="email"
        />
        <FormErrorMessage textColor="red.error">
          {errors.email?.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt="40px" colorScheme="blue" w="full" type="submit">
        Next
      </Button>
    </VStack>
  );
};
