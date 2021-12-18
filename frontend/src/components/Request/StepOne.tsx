import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { FC } from "react";
import { Dropdown } from "components/Dropdown";
import { useForm, Controller } from "react-hook-form";
import { MOCK_TEMPLATES } from "pages/invite";
import { useLocation } from "react-router-dom";

export const StepOne: FC<{
  onSubmit: (data: string) => void;
  initialValue: string | null;
}> = ({ onSubmit, initialValue }) => {
  const location = useLocation();
  const defaultValue: any =
    initialValue || location?.state
      ? {
          value: initialValue ? initialValue : location?.state ?? "",
          label: initialValue ? initialValue : location?.state ?? "",
        }
      : "";

  const {
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ defaultValues: { topic: defaultValue } });

  const handleStepOneSubmit = (data: {
    topic: { label: string; value: string };
  }) => {
    onSubmit(data.topic.value);
  };

  return (
    <Box w="full" as="form" onSubmit={handleSubmit(handleStepOneSubmit)}>
      <FormControl isInvalid={errors?.topic}>
        <FormLabel variant="secondary">
          Topic you are collecting data for
        </FormLabel>
        <Controller
          name="topic"
          rules={{
            required: "Topic is required.",
          }}
          control={control}
          defaultValue={defaultValue && defaultValue.value}
          render={({ field: { onChange, value } }) => {
            return (
              <Dropdown
                onChange={onChange}
                placeholder="choose"
                options={MOCK_TEMPLATES.map((item) => ({
                  label: item.name,
                  value: item.name,
                }))}
                value={value}
              />
            );
          }}
        />
        <FormErrorMessage textColor="red.error">
          {errors.topic?.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt="40px" colorScheme="blue" w="full" type="submit">
        Confirm
      </Button>
    </Box>
  );
};
