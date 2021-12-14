import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { QuestionnaireProgress } from "./QuestionnaireProgress";

export const QuestionnaireLayout: React.FC<{ title: string }> = ({
  title,
  children,
}) => {
  return (
    <Grid
      w="100%"
      minH="100vh"
      templateColumns={{ base: "1fr", md: "315px 1fr" }}
      bgColor="#F8F8FA"
    >
      <QuestionnaireProgress title={title} />
      <Box w="100%" position="relative" overflow="hidden">
        <Box
          maxW="1440px"
          px={{ base: "20px", lg: "55px" }}
          mx="auto"
          pt={{ base: "80px", md: "65px" }}
          w="100%"
        >
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
