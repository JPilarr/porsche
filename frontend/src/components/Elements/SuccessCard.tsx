import { Box, Button, Icon, VStack, Text } from "@chakra-ui/react";
import { FC } from "react";
import { ReactComponent as IconDone } from "static/icons/done.svg";
import { Link as RouteLink } from "react-router-dom";

interface SuccessCardProps {
  bodyText: string;
  buttonText: string;
  to?: string;
}

export const SuccessCard: FC<SuccessCardProps> = ({
  bodyText,
  buttonText,
  to = "/",
}) => (
  <VStack
    maxW="560px"
    backgroundColor="background.lightBlue"
    borderRadius="20px"
    p="80px"
  >
    <Box
      borderRadius="50%"
      backgroundColor="background.lightSnow"
      p="25px"
      mb="40px"
    >
      <Icon as={IconDone} w="55px" h="48px" />
    </Box>
    <Text pb="40px" textAlign="center" fontWeight="600" fontSize="20px">
      {bodyText}
    </Text>
    <Button colorScheme="blue" as={RouteLink} to={to}>
      {buttonText}
    </Button>
  </VStack>
);
