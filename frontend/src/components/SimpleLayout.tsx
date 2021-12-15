import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ReactComponent as IconLogo } from "static/icons/logo.svg";

export const SimpleLayout = ({ children }: any) => {
  return (
    <>
      <Box w="full" className="layout-container">
        <Box
          position="absolute"
          maxW="1400px"
          margin="auto"
          p={10}
          w="100%"
          left="50%"
          transform="translateX(-50%)"
        >
          <Link to="/">
            <Flex alignItems="center">
              <Icon as={IconLogo} w="120px" h="46px" />
            </Flex>
          </Link>
        </Box>
        <Grid minH="100vh" w="full">
          <Flex flexDir="column" w="full">
            <Box
              as="main"
              flex="1"
              h="full"
              bg="background.light"
              pt={32}
              px={10}
              pb={10}
            >
              {children}
            </Box>
          </Flex>
        </Grid>
      </Box>
    </>
  );
};
