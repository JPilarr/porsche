import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";
import useFormStore from "hooks/useFormStore";
import { FormSubsection } from "interfaces";
import { sections } from "mock";
import { FC } from "react";
import { Subsection } from "./Subsection";

interface SectionProps {
  subsections: FormSubsection[];
}

export const Section: FC<SectionProps> = ({ subsections }) => {
  const {
    subsectionStep,
    sectionStep,
    increaseSubsectionStep,
    decreaseSubsectionStep,
    increaseSectionStep,
  } = useFormStore();
  const isLastSubsectionStep = subsectionStep + 1 === subsections.length;
  const isLastSectionStep = sectionStep + 1 === sections.length;

  return (
    <VStack minH="500px" justifyContent="space-between" spacing={10} w="100%">
      <Box w="100%">
        <HStack justifyContent="space-between" mb={8}>
          {subsectionStep > 0 ? (
            <Text
              color="black"
              fontWeight={600}
              fontSize="sm"
              cursor="pointer"
              _hover={{ color: "var(--chakra-colors-blue-500)" }}
              onClick={decreaseSubsectionStep}
            >
              {"<"} Back
            </Text>
          ) : (
            <Box />
          )}

          <Text color="black" fontWeight={600} fontSize="sm">
            {subsectionStep + 1}/{subsections.length}{" "}
          </Text>
        </HStack>

        <Subsection
          title={subsections[subsectionStep].title}
          questions={subsections[subsectionStep].questions}
        />
      </Box>
      <Button
        colorScheme="blue"
        w="100%"
        onClick={
          isLastSubsectionStep
            ? isLastSectionStep
              ? () => console.log("FINISH")
              : increaseSectionStep
            : increaseSubsectionStep
        }
      >
        {isLastSubsectionStep
          ? isLastSectionStep
            ? "Finish"
            : "Next section"
          : "Continue"}
      </Button>
    </VStack>
  );
};
