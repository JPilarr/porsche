import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { FormQuestion } from "interfaces";
import { FC } from "react";

interface RadioQuestionProps {
  question: FormQuestion;
}

export const RadioQuestion: FC<RadioQuestionProps> = ({ question }) => {
  const options = question.extra_fields.split(",");

  return (
    <FormControl>
      <FormLabel>{question.title}</FormLabel>
      <RadioGroup>
        <VStack alignItems="flex-start" spacing={6}>
          {options.map((item) => (
            <Radio value={item} key={item}>
              {item}
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </FormControl>
  );
};
