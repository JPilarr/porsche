import {
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();
  return (
    <Flex alignItems="center" fontWeight="bold" px={2}>
      <Link to="/">Logo</Link>
      <Spacer />
      <HStack
        spacing={{ base: 2, md: 4 }}
        display={{ base: "none", md: "inherit" }}
      >
        {location.pathname !== "/login" && (
          <Button
            as={Link}
            to="/login"
            variant="outline"
            data-cypress="header-login-button"
            size="xs"
          >
            Login
          </Button>
        )}

        {location.pathname !== "/sign-up" && (
          <Button
            as={Link}
            to="/sign-up"
            data-cypress="header-sign-up-button"
            size="xs"
          >
            Sign Up
          </Button>
        )}
      </HStack>
      <Box display={{ base: "inherit", md: "none" }}>
        <Menu autoSelect={false}>
          <MenuButton as={Button} colorScheme="red" size="xs">
            Menu
          </MenuButton>
          <MenuList>
            <MenuGroup>
              {location.pathname !== "/login" && (
                <MenuItem justifyContent="center">
                  <Button
                    as={Link}
                    to="/login"
                    variant="outline"
                    data-cypress="header-login-button-mobile"
                    size="xs"
                  >
                    Login
                  </Button>
                </MenuItem>
              )}
              {location.pathname !== "/sign-up" && (
                <MenuItem justifyContent="center">
                  <Button
                    as={Link}
                    to="/sign-up"
                    data-cypress="header-sign-up-button-mobile"
                    size="xs"
                  >
                    Sign Up
                  </Button>
                </MenuItem>
              )}
            </MenuGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
