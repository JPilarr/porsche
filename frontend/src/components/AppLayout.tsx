import { Box, BoxProps, Grid } from "@chakra-ui/react";
import React from "react";
import { LeftNavbar } from "./LeftNavbar";

interface AppLayoutProps extends BoxProps {};

export const AppLayout: React.FC<AppLayoutProps> = ({ children, ...props }) => {
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
          {...props}
          maxW="1440px"
          px={{ base: "20px", lg: "55px" }}
          mx="auto"
          pt={{ base: "60px", md: "100px" }}
          bgColor="background.light"
          w="100%"
        >
          {children}
        </Box>
      </Box>
    </Grid>
  );
};
