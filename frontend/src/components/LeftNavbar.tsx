import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Link as ChakraLink,
  useBreakpointValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as IconAccountBarBurger } from "static/icons/account-bar-burger.svg";
import { ReactComponent as IconAccountBarClose } from "static/icons/account-bar-close.svg";
import { ReactComponent as IconEdit } from "static/icons/edit.svg";
import { ReactComponent as IconHome } from "static/icons/home.svg";
import { ReactComponent as IconForm } from "static/icons/form.svg";
import { ReactComponent as IconLogo } from "static/icons/logo.svg";
import { ReactComponent as IconLogOut } from "static/icons/logout.svg";

const NavigationLink: React.FC<{
  icon: React.ReactElement;
  to: string;
  onClick?: () => void;
  children: string;
  disabled?: boolean;
  className?: string;
}> = ({ icon, to, children, onClick, disabled, className }) => {
  const path = to;
  const location = useLocation();

  const match = matchPath(path, location.pathname);

  return (
    <ChakraLink
      as={Link}
      to={to}
      textDecoration="none"
      _hover={{
        textDecoration: "none",
        borderLeft: "2px solid #3083FF",
      }}
      fontSize="10px"
      fontWeight="400"
      lineHeight="10px"
      display="flex"
      alignItems="center"
      color={match ? "white" : "fonts.gray"}
      onClick={onClick}
      data-cypress={`sidemenu-${children.toLowerCase()}`}
      w="full"
      justifyContent="center"
      py={4}
      borderLeft={match ? "2px solid #3083FF" : "2px solid transparent"}
      h="full"
      minH="58px"
      _focus={{ color: "white", outline: "none" }}
      cursor={disabled ? "not-allowed" : "pointer"}
      pointerEvents={disabled ? "none" : "auto"}
      opacity={disabled ? "0.3" : "1"}
    >
      <Flex
        direction="column"
        justify="center"
        align="center"
        w="full"
        className={className}
      >
        <Box mb="7px">
          {React.cloneElement(icon, {
            color: match ? "#3083FF" : "#292D32",
            fontSize: "25px",
            width: "25px",
            height: "25px",
          })}
        </Box>
      </Flex>
    </ChakraLink>
  );
};

const NavigationLinkMobile: React.FC<{
  icon: React.ReactElement;
  to: string;
  onClick?: () => void;
  children: string;
  disabled?: boolean;
  className?: string;
}> = ({ icon, to, children, onClick, disabled, className }) => {
  const path = to.match(/account\/?$/) ? to : to.replace(/\/?$/, "/*");
  const location = useLocation();

  const match = matchPath(path, location.pathname);
  return (
    <Flex p="10px 30px" borderLeft={match ? "2px solid #3083FF" : ""}>
      <ChakraLink
        as={Link}
        to={to}
        fontSize="13px"
        fontWeight="500"
        display="flex"
        alignItems="center"
        color={match ? "white" : "fonts.gray"}
        onClick={onClick}
        data-cypress={`sidemenu-${children.toLowerCase()}`}
        _focus={{ color: "white", outline: "none" }}
        cursor={disabled ? "not-allowed" : "pointer"}
        pointerEvents={disabled ? "none" : "auto"}
        opacity={disabled ? "0.3" : "1"}
        className={className}
      >
        <Flex>
          <Box marginRight="16px" w="18px">
            {React.cloneElement(icon, {
              color: match ? "#3083FF" : "#292D32",
            })}
          </Box>
          {children}
        </Flex>
      </ChakraLink>
    </Flex>
  );
};

export const LeftNavbar = () => {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  async function handleSignOut() {
    try {
      // TODO: Logout
      console.log("Logout");
      navigate("/login");
    } catch (error) {
      console.log("Sign out error:", error);
    }
  }

  const drawerClassName = useBreakpointValue({
    base: "navigation-help",
    md: "",
  });

  return (
    <>
      <Flex
        bg="background.gray"
        h="60px"
        w="100%"
        position="fixed"
        display={{ base: "flex", md: "none" }}
        align="center"
        justify="space-between"
        padding="0 20px"
        zIndex="999"
      >
        <Link to="/account">
          <Icon as={IconLogo} ml="10px" w="140px" h="full" />
        </Link>
        <IconButton
          ref={btnRef}
          aria-label="Open menu"
          variant="unstyled"
          icon={
            isDrawerOpen ? <IconAccountBarClose /> : <IconAccountBarBurger />
          }
          onClick={isDrawerOpen ? onDrawerClose : onDrawerOpen}
          width={isDrawerOpen ? "24px" : "30px"}
          minWidth={isDrawerOpen ? "24px" : "30px"}
          transitionDuration="0s"
          _focus={{ outline: "none" }}
          cursor="pointer"
          className={drawerClassName}
        />
      </Flex>
      <Drawer
        size="xs"
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay top="60px" display={{ base: "block", md: "none" }}>
          <DrawerContent mt="60px">
            <DrawerBody padding="0" background="background.gray">
              <Box data-cypress="account-sidemenu-mobile" p="30px 0" w="100%">
                <NavigationLinkMobile
                  icon={<IconHome />}
                  to="/"
                  onClick={onDrawerClose}
                >
                  Home
                </NavigationLinkMobile>
                <NavigationLinkMobile
                  icon={<IconEdit />}
                  to="/invite"
                  onClick={onDrawerClose}
                >
                  Invite user
                </NavigationLinkMobile>
                <NavigationLinkMobile
                  icon={<IconForm />}
                  to="/inquiries"
                  onClick={onDrawerClose}
                >
                  Inquiries
                </NavigationLinkMobile>

                <Icon
                  as={IconLogOut}
                  data-cypress="navbar-profile-option-logout"
                  onClick={handleSignOut}
                  cursor="pointer"
                />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
      <Box
        bg="background.gray"
        display={{ base: "none", md: "block" }}
        data-cypress="account-sidemenu"
        height="100vh"
        position="sticky"
        top="0"
      >
        <VStack h="100%" justifyContent="space-between" pb="60px">
          <Flex direction="column" align="center" justify="center">
            <Center mt="16px" mb="30px" px="10px">
              <Link to="/">
                <Icon as={IconLogo} h="full" w="full" />
              </Link>
            </Center>

            <NavigationLink icon={<IconHome />} to="/" onClick={onDrawerClose}>
              Home
            </NavigationLink>
            <NavigationLink
              icon={<IconEdit />}
              to="/invite"
              onClick={onDrawerClose}
            >
              Invite user
            </NavigationLink>
            <NavigationLink
              icon={<IconForm />}
              to="/inquiries"
              onClick={onDrawerClose}
            >
              Inquiries
            </NavigationLink>
          </Flex>
          <Flex direction="column" align="center" justify="center" w="100%">
            <Icon
              as={IconLogOut}
              data-cypress="navbar-profile-option-logout"
              onClick={handleSignOut}
              cursor="pointer"
              fontSize="25px"
              color="#292D32"
              _hover={{
                color: "#3083FF",
              }}
            />
          </Flex>
        </VStack>
      </Box>
    </>
  );
};
