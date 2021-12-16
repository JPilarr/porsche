import { Box, Spinner } from "@chakra-ui/react";
import { endpoint } from "api";
import { QuestionnaireLayout } from "components/QuestionnaireLayout";
import { Section } from "components/Section";
import useFormStore from "hooks/useFormStore";
import { useRequest } from "hooks/useRequest";
import { useQuery } from "react-query";

export const QuestionnairePage = () => {
  const { sectionStep } = useFormStore();

  const { request } = useRequest();

  const { data, isLoading } = useQuery("pending_questions", async () => {
    const response = await request({
      url: endpoint.pendingQuestions,
    });
    return response;
  });

  const sections = data?.data?.results || [];

  return (
    <QuestionnaireLayout title="MICA">
      <Box maxW="500px" margin="auto">
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {sections.length > 0 && (
              <Section
                subsections={sections[sectionStep]?.sub_sections}
                sections={sections}
              />
            )}
          </>
        )}
      </Box>
    </QuestionnaireLayout>
  );
};
