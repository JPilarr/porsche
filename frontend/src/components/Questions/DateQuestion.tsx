import { FormControl, FormLabel } from "@chakra-ui/react";
import { DatePicker } from "components/DatePicker";
import { FormQuestion } from "interfaces";
import { FC } from "react";

interface DateQuestionProps {
  question: FormQuestion;
}

export const DateQuestion: FC<DateQuestionProps> = ({ question }) => {
  return (
    <FormControl>
      <FormLabel>{question.title}</FormLabel>
      <DatePicker placeholder={question.placeholder} />
    </FormControl>
  );
};
