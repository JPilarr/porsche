import { Box } from "@chakra-ui/react";
import { QuestionnaireLayout } from "components/QuestionnaireLayout";
import { Section } from "components/Section";
import useFormStore from "hooks/useFormStore";
import { sections } from "mock";

export const Co2FormPage = () => {
  const { sectionStep } = useFormStore();

  return (
    <QuestionnaireLayout title="CO2">
      <Box maxW="500px" margin="auto">
        <Section subsections={sections[sectionStep].subsections} />
      </Box>
    </QuestionnaireLayout>
  );
};