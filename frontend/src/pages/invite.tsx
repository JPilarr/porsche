import {
  Button,
  Heading,
  Flex,
  Grid,
  Icon,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { ReactComponent as IconEdit } from "static/icons/edit_outline.svg";
import { ReactComponent as IconArrow } from "static/icons/arrow_right.svg";
import { AppLayout } from "components/AppLayout";
import { useNavigate } from "react-router-dom";

export const MOCK_TEMPLATES = [
  {
    name: "CO2",
    text: "We want to measure our CO2 footprint and need your help to understand the product carbon footprint.",
  },
  {
    name: "Mica",
    text: "Help us ensure there is no child labor in our supply-chain by understanding the country or origin for Mica.",
  },
];
export const InvitePage = () => {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <Flex direction="column" px="110px 60px 60px" w="full">
        <Flex direction="row" justify="space-between" w="full" mb="62px">
          <VStack align="flex-start">
            <Heading size="lg">Data request</Heading>
            <Text>Create data requests</Text>
          </VStack>
          <Button colorScheme="blue" onClick={() => navigate("/request")}>
            <Icon as={IconEdit} color="white" mr={2} w="24px" h="24px" /> New
            data request
          </Button>
        </Flex>
        <Flex
          direction="column"
          borderRadius="24px"
          border="4px solid #EBF3FF"
          p="47px 40px"
        >
          <Text textStyle="uppercaseGreyHeading" mb="22px">
            My templates
          </Text>
          <SimpleGrid columns={2} spacing="40px">
            {MOCK_TEMPLATES.map((template) => (
              <Grid
                borderRadius="16px"
                bgColor="rgba(48, 131, 255, 0.06)"
                p="17px 22px"
                templateColumns="5fr 0.5fr"
                templateRows="repeat(1, 1fr)"
                w="full"
                gap="24px"
                cursor="pointer"
                onClick={() => navigate("/request", { state: template.name })}
              >
                <VStack spacing="0">
                  <Text textStyle="blueHeading" w="full">
                    {template.name}
                  </Text>
                  <Text>{template.text}</Text>
                </VStack>
                <Icon
                  as={IconArrow}
                  color="blue.500"
                  mr={2}
                  w="12px"
                  h="16px"
                  mt="6px"
                />
              </Grid>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </AppLayout>
  );
};
