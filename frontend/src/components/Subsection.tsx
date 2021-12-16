import { Divider, Heading, VStack } from "@chakra-ui/react";
import { FormQuestion } from "interfaces";
import { FC } from "react";
import { Question } from "./Question";

interface SubsectionProps {
  title: string;
  questions: FormQuestion[];
}

export const Subsection: FC<SubsectionProps> = ({ title, questions }) => {
  return (
    <>
      <Heading size="md" textAlign="center">
        {title}
      </Heading>
      <Divider my={10} />
      <VStack spacing={6}>
        {questions.map((question) => (
          <Question
            field_type={question.field_type}
            question={question}
            key={question.title}
          />
        ))}
      </VStack>
    </>
  );
};
