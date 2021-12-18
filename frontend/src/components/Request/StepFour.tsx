import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
  VStack,
  Text,
} from "@chakra-ui/react";
import { DatePicker } from "components/DatePicker";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

type FormData = {
  dueDate: string | null;
  message: string | null;
};

export const StepFour: FC<{
  onSubmit: (data: FormData) => void;
}> = ({ onSubmit }) => {
  const {
    formState: { errors },
    handleSubmit,
    clearErrors,
    setValue,
    register,
    control,
  } = useForm({
    defaultValues: {
      dueDate: null,
      message: null,
    },
  });
  const handleStepSubmit = (data: FormData) => {
    clearErrors();
    onSubmit({
      dueDate: data.dueDate,
      message: data.message,
    });
  };

  return (
    <VStack
      w="full"
      as="form"
      onSubmit={handleSubmit(handleStepSubmit)}
      spacing="20px"
    >
      <FormControl isInvalid={!!errors.dueDate}>
        <FormLabel variant="secondary">Contributor name</FormLabel>
        <Controller
          name="dueDate"
          rules={{
            required: "Due date is required.",
          }}
          control={control}
          render={({ field: { onChange, value } }) => {
            return (
              <DatePicker
                placeholder="Set a deadline"
                onChangeValue={(value) => setValue("dueDate", value)}
              />
            );
          }}
        />
        <FormErrorMessage textColor="red.error">
          {errors.dueDate?.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!errors.message}>
        <FormLabel variant="secondary">
          Add a short message to your contributor
          <Text as="span" fontWeight={400} color="font.gray">
            {" "}
            <i>(optional)</i>
          </Text>
        </FormLabel>
        <Textarea
          placeholder="Write a personalized message"
          size="sm"
          id="message"
          {...register("message")}
          maxLength={10000}
          borderRadius="14px"
          p="10px 15px"
        />
        <FormErrorMessage textColor="red.error">
          {errors.message?.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt="40px" colorScheme="blue" w="full" type="submit">
        Send data request
      </Button>
    </VStack>
  );
};
