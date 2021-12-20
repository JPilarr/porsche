import { FC } from 'react';
import { Box } from "@chakra-ui/react";

interface ASideProps {};

const ASide:FC<ASideProps> = ({
	children,
}) => (
	<Box w="40%" position="relative" overflow="hidden">
		<Box
			maxW="1440px"
			px={{ base: "20px", lg: "55px" }}
			pt={{ base: "80px", md: "65px" }}
			mx="auto"
			bgColor="background.lightGray"
			w="100%"
			height="100%"
		>
			{children}
		</Box>
	</Box>
);

export default ASide;