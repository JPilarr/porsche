import { Box, Flex, Grid } from "@chakra-ui/react";
import { NavBar } from "./NavBar";

const Layout = ({ children }: any) => {
  return (
    <>
      <Box w="full" className="layout-container">
        <Grid minH="100vh" w="full">
          <Flex flexDir="column" w="full">
            <Box
              w="100%"
              boxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
              position="relative"
            >
              <Box as="nav" maxW="6xl" mx="auto" w="full" py={2}>
                <NavBar />
              </Box>
            </Box>
            <Box as="main" flex="1" h="full" bg="#F1F6FE" pt={8}>
              {children}
            </Box>
          </Flex>
        </Grid>
      </Box>
    </>
  );
};

export default Layout;
