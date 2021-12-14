import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FormQuestion } from "interfaces";
import { FC } from "react";

interface TextQuestionProps {
  question: FormQuestion;
}

export const TextQuestion: FC<TextQuestionProps> = ({ question }) => {
  return (
    <FormControl>
      <FormLabel>{question.title}</FormLabel>
      <Input placeholder={question.placeholder} />
    </FormControl>
  );
};
