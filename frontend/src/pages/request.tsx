import { useState } from "react";
import {
  Flex,
  Text,
  Heading,
  Icon,
  HStack,
  Divider,
  Button,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { StepOne } from "components/Request/StepOne";
import { StepTwo } from "components/Request/StepTwo";
import { StepThree } from "components/Request/StepThree";
import { StepFour } from "components/Request/StepFour";
import { Link } from "react-router-dom";
import { ReactComponent as IconArrow } from "static/icons/arrow_left.svg";
import { SuccessCard } from "components/Elements/SuccessCard";

type FormData = {
  topic: string | null;
  part: string | null;
  contributor: string | null;
  company: string | null;
  duns: string | null;
  email: string | null;
  dueDate: string | null;
  message: string | null;
};

const initialData = {
  topic: null,
  part: null,
  contributor: null,
  company: null,
  duns: null,
  email: null,
  dueDate: null,
  message: null,
};

export const RequestPage = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [currentStep, setCurrentStep] = useState<number>(1);

  const isFirstStep = currentStep === 1;
  const isThirdStep = currentStep === 3;
  console.log("main form data", formData);

  if (currentStep === 5) {
    return (
      <Flex align="center" justify="center" h="100%" minH="100vh">
        <SuccessCard
          bodyText="We have sent your data request 
to your contributor"
          buttonText="Back to data request"
          to="/invite"
        />
      </Flex>
    );
  }

  return (
    <Flex
      direction="column"
      bgColor="white"
      w="100vw"
      minH="100vh"
      h="full"
      p="40px"
    >
      <ChakraLink
        as={Link}
        to="/invite"
        textDecoration="none"
        _hover={{
          textDecoration: "underline",
        }}
      >
        <HStack spacing="1px" align="flex-start">
          <Icon
            as={IconArrow}
            color="blue.500"
            mr={2}
            w="12px"
            h="16px"
            mt="6px"
          />
          <Text textStyle="blueHeading">Back to data request</Text>
        </HStack>
      </ChakraLink>
      <Flex
        direction="column"
        w="full"
        align="center"
        justify="center"
        pt="32px"
      >
        <Flex direction="column" w="472px" align="center" justify="center">
          <Flex
            w="full"
            justify={isFirstStep ? "flex-end" : "space-between"}
            align="center"
          >
            {!isFirstStep && (
              <Button
                variant="ghost"
                w="50px"
                h="10px"
                color="black"
                _hover={{ textDecoration: "underline" }}
                ml="-32px"
                onClick={() =>
                  setCurrentStep(isFirstStep ? 1 : currentStep - 1)
                }
              >
                <Icon as={IconArrow} color="black" w="12px" h="14px" mr="6px" />
                Back
              </Button>
            )}
            <Text
              fontSize="14px"
              fontWeight={600}
              color="black"
            >{`${currentStep}/4`}</Text>
          </Flex>
          <Heading size="md" mb={isThirdStep ? "5px" : "40px"} pt="30px">
            New data request
          </Heading>
          {isThirdStep && (
            <Text align="center" w="full" mb="40px">
              You can invite a new contributor by entering their email. Or
              simply look them up with their DUNS number or name.
            </Text>
          )}
          <Divider w="full" borderColor="border.gray" mb="60px" />
          {isFirstStep && (
            <StepOne
              onSubmit={(data) => {
                setFormData({ ...formData, topic: data });
                setCurrentStep(2);
              }}
              initialValue={formData.topic}
            />
          )}
          {currentStep === 2 && (
            <StepTwo
              onSubmit={(data) => {
                setFormData({ ...formData, part: data });
                setCurrentStep(3);
              }}
              initialValue={formData.part}
            />
          )}
          {currentStep === 3 && (
            <StepThree
              onSubmit={(data) => {
                setFormData({
                  ...formData,
                  ...data,
                });
                setCurrentStep(4);
              }}
              initialValue={{
                contributor: formData.contributor,
                company: formData.company,
                duns: formData.duns,
                email: formData.email,
              }}
            />
          )}
          {currentStep === 4 && (
            <StepFour
              onSubmit={(data) => {
                setFormData({
                  ...formData,
                  ...data,
                });
                setCurrentStep(5);
              }}
            />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
