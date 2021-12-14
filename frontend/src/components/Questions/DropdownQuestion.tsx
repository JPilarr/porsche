import { FormControl, FormLabel } from "@chakra-ui/react";
import { Dropdown } from "components/Dropdown";
import { FormQuestion } from "interfaces";
import { FC } from "react";

interface DropdownQuestionProps {
  question: FormQuestion;
}

export const DropdownQuestion: FC<DropdownQuestionProps> = ({ question }) => {
  const options = question.extra_fields.split(",");
  return (
    <FormControl>
      <FormLabel>{question.title}</FormLabel>
      <Dropdown
        placeholder={question.placeholder}
        options={options.map((item) => ({ label: item, value: item }))}
      />
    </FormControl>
  );
};
