import {
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormLabel,
  VStack,
} from "@chakra-ui/react";
import { FormQuestion } from "interfaces";
import { FC } from "react";

interface CheckboxQuestionProps {
  question: FormQuestion;
}

export const CheckboxQuestion: FC<CheckboxQuestionProps> = ({ question }) => {
  const options = question.extra_fields.split(",");
  return (
    <FormControl>
      <FormLabel>{question.title}</FormLabel>
      <CheckboxGroup>
        <VStack alignItems="flex-start" spacing={6}>
          {options.map((item) => (
            <Checkbox value={item} key={item}>
              {item}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
    </FormControl>
  );
};
