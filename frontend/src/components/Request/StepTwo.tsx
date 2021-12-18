import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Box,
  Input,
} from "@chakra-ui/react";
import { FC } from "react";
import { useForm } from "react-hook-form";

export const StepTwo: FC<{
  onSubmit: (data: string) => void;
  initialValue: string | null;
}> = ({ onSubmit, initialValue }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({ defaultValues: { part: initialValue ?? "" } });

  const handleStepTwoSubmit = (data: { part: string }) => {
    onSubmit(data.part);
  };

  return (
    <Box w="full" as="form" onSubmit={handleSubmit(handleStepTwoSubmit)}>
      <FormControl isInvalid={!!errors.part}>
        <FormLabel variant="secondary">
          Part you are collecting data for
        </FormLabel>
        <Input
          id="part"
          {...register("part", {
            required: "Part is required.",
          })}
          maxLength={600}
          placeholder="front fender"
        />
        <FormErrorMessage textColor="red.error">
          {errors.part?.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt="40px" colorScheme="blue" w="full" type="submit">
        Next
      </Button>
    </Box>
  );
};
