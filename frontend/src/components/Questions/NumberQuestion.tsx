import {
  FormControl,
  FormLabel,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { FormQuestion } from "interfaces";
import { FC } from "react";

interface NumberQuestionProps {
  question: FormQuestion;
}

export const NumberQuestion: FC<NumberQuestionProps> = ({ question }) => {
  return (
    <FormControl>
      <FormLabel>{question.title}</FormLabel>
      <NumberInput>
        <NumberInputField placeholder={question.placeholder} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};
