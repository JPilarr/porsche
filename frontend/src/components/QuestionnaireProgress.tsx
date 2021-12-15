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
  Text,
  VStack,
} from "@chakra-ui/react";
import useFormStore from "hooks/useFormStore";
import { sections } from "mock";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconListItem } from "static/icons/accordion_listItem.svg";
import { ReactComponent as IconListEdit } from "static/icons/list_edit.svg";

export const QuestionnaireProgress: FC<{ title: string }> = ({ title }) => {
  const { subsectionStep, sectionStep, resetForm } = useFormStore();
  const [index, setIndex] = useState(sectionStep);

  useEffect(() => {
    setIndex(sectionStep);
  }, [sectionStep]);
  return (
    <VStack
      justifyContent="space-between"
      spacing={6}
      alignItems={"flex-start"}
      bg="background.light"
      py={20}
      px={10}
    >
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
        <Divider mt={6} mb={16} />
        <Accordion index={[index]}>
          {sections.map((section, sectionIndex) => (
            <AccordionItem>
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
                    {section.title}
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
                  {section.subsections.map((subsection, subsectionIndex) => (
                    <HStack alignItems="flex-start">
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
                          {subsection.title}
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
                  ))}
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
    </VStack>
  );
};
