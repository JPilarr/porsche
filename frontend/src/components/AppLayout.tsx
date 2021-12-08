import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { LeftNavbar } from "./LeftNavbar";

export const AppLayout: React.FC<{}> = ({ children }) => {
  return (
    <Grid
      w="100%"
      minH="100vh"
      templateColumns={{ base: "1fr", md: "108px 1fr" }}
      bgColor="background.light"
    >
      <LeftNavbar />
      <Box w="100%" position="relative" overflow="hidden">
        <Box
          maxW="1440px"
          px={{ base: "20px", lg: "55px" }}
          mx="auto"
          pt={{ base: "80px", md: "65px" }}
          bgColor="background.light"
          w="100%"
        >
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
