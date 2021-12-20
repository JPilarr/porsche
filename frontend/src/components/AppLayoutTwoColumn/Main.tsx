import { FC } from 'react';
import { Box } from "@chakra-ui/react";

interface MainProps {};

const Main:FC<MainProps> = ({
	children,
}) => (
	<Box w="60%" position="relative" overflow="hidden">
		<Box
			maxW="1440px"
			px={{ base: "20px", lg: "55px" }}
			pt={{ base: "80px", md: "65px" }}
			mx="auto"
			bgColor="background.light"
			w="100%"
		>
			{children}
		</Box>
	</Box>
);

export default Main;