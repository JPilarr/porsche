import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Progress,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { endpoint } from "api";
import useFormStore from "hooks/useFormStore";
import { useRequest } from "hooks/useRequest";
import { FormSection } from "interfaces";
import { FC, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { ReactComponent as IconListItem } from "static/icons/accordion_listItem.svg";
import { ReactComponent as IconListEdit } from "static/icons/list_edit.svg";
import { getFormProgress } from "utils/getFormProgress";

export const QuestionnaireProgress: FC<{ title: string }> = ({ title }) => {
  const { subsectionStep, sectionStep, resetForm } = useFormStore();
  const [index, setIndex] = useState(sectionStep);

  useEffect(() => {
    setIndex(sectionStep);
  }, [sectionStep]);

  const { request } = useRequest();

  const { data, isLoading } = useQuery("pending_questions", async () => {
    const response = await request({
      url: endpoint.pendingQuestions,
    });
    return response;
  });

  const sections: FormSection[] = data?.data?.results || [];

  const progress = getFormProgress(sections, sectionStep, subsectionStep);

  if (!isLoading && sections.length === 0) {
    return (
      <VStack
        justifyContent="space-between"
        spacing={6}
        alignItems={"flex-start"}
        bg="background.light"
        py={20}
        px={10}
      >
        <Box>
          <Text>No Questionnaire</Text>
        </Box>
        <Link to="/">
          <Button variant="outline" onClick={resetForm}>
            Back to homepage
          </Button>
        </Link>
      </VStack>
    );
  }

  return (
    <VStack
      justifyContent="space-between"
      spacing={6}
      alignItems={"flex-start"}
      bg="background.light"
      py={20}
      px={10}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Box w="100%">
            <Heading size="xs">{title}</Heading>
            <Divider my={6} />
            <Text
              fontWeight={500}
              textTransform="uppercase"
              letterSpacing="0.1em"
              fontSize="sm"
            >
              data request progress
            </Text>
            <Divider mt={6} mb={8} />
            <VStack spacing={2} alignItems="flex-start" mb={8}>
              <Text>
                <b>{Math.round(progress * 100) / 100}%</b> completed
              </Text>
              <Box w="100%" h="12px">
                <Progress colorScheme="blue" value={progress} />
              </Box>
            </VStack>
            <Accordion index={[index]}>
              {sections.map((section, sectionIndex) => (
                <AccordionItem key={section.name}>
                  <AccordionButton onClick={() => setIndex(sectionIndex)}>
                    <HStack
                      alignItems="center"
                      justifyContent="space-between"
                      w="100%"
                    >
                      <Text
                        fontSize="sm"
                        fontWeight={600}
                        color={
                          sectionStep === sectionIndex
                            ? "brand.primary"
                            : "font.black"
                        }
                      >
                        {section.name}
                      </Text>
                      <AccordionIcon
                        color={
                          sectionStep === sectionIndex
                            ? "brand.primary"
                            : "font.black"
                        }
                      />
                    </HStack>
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <VStack
                      alignItems="flex-start"
                      ml={6}
                      position="relative"
                      _before={{
                        content: '""',
                        position: "absolute",
                        left: "1px",
                        width: "1px",
                        background: "#DDDDDD",
                        top: 0,
                        bottom: "15px",
                      }}
                    >
                      {section.sub_sections.map(
                        (subsection, subsectionIndex) => (
                          <HStack alignItems="flex-start" key={subsection.name}>
                            <Icon as={IconListItem} />
                            <HStack spacing={2} alignItems="center">
                              {" "}
                              <Text
                                fontSize="sm"
                                color={
                                  sectionStep === sectionIndex &&
                                  subsectionStep === subsectionIndex
                                    ? "brand.primary"
                                    : "font.black"
                                }
                                fontWeight={600}
                              >
                                {" "}
                                {subsection.name}
                              </Text>
                              {sectionStep === sectionIndex &&
                                subsectionStep === subsectionIndex && (
                                  <Icon
                                    width="16px"
                                    height="16px"
                                    as={IconListEdit}
                                    color="brand.primary"
                                  />
                                )}
                            </HStack>
                          </HStack>
                        )
                      )}
                    </VStack>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>
          <Link to="/">
            <Button variant="outline" onClick={resetForm}>
              Save & continue later
            </Button>
          </Link>
        </>
      )}
    </VStack>
  );
};
