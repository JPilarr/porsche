import { FormQuestion } from "interfaces";
import { FC } from "react";
import { CheckboxQuestion } from "./Questions/CheckboxQuestion";
import { DateQuestion } from "./Questions/DateQuestion";
import { DropdownQuestion } from "./Questions/DropdownQuestion";
import { NumberQuestion } from "./Questions/NumberQuestion";
import { RadioQuestion } from "./Questions/RadioQuestion";
import { TextQuestion } from "./Questions/TextQuestion";

interface QuestionProps {
  field_type: string;
  question: FormQuestion;
}

export const Question: FC<QuestionProps> = ({ field_type, question }) => {
  if (field_type === "number") {
    return <NumberQuestion question={question} />;
  }

  if (field_type === "date") {
    return <DateQuestion question={question} />;
  }

  if (field_type === "checkbox") {
    return <CheckboxQuestion question={question} />;
  }

  if (field_type === "radio") {
    return <RadioQuestion question={question} />;
  }

  if (field_type === "dropdown") {
    return <DropdownQuestion question={question} />;
  }

  return <TextQuestion question={question} />;
};
