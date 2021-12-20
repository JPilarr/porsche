import { Box, Grid, HStack } from "@chakra-ui/react";
import React from "react";
import { LeftNavbar } from "../LeftNavbar";

const AppLayoutTwoColumn: React.FC<{}> = ({ children }) => {
	return (
		<Grid
			w="100%"
			minH="100vh"
			templateColumns={{ base: "1fr", md: "108px 1fr" }}
			bgColor="background.light"
		>
			<LeftNavbar />
			<HStack alignItems="stretch">
				{children}
			</HStack>
		</Grid>
	);
};

export default AppLayoutTwoColumn;