import { Box, Button, Icon, VStack, Text } from '@chakra-ui/react';
import { AppLayout } from 'components/AppLayout';
import { FC } from 'react';
import { ReactComponent as IconDone } from "static/icons/done.svg";
import { Link as RouteLink } from "react-router-dom";

interface ReviewDoneProps {

};

const ReviewDone:FC<ReviewDoneProps> = ({}) => {

	return (<AppLayout
		alignItems="center"
		justifyContent="center"
		minH="100vh"
		display="flex"
	>
		
		<VStack
         maxW="560px"
         backgroundColor="background.lightBlue"
         borderRadius="lg"
         p="80px"
      >
			<Box
				borderRadius="50%"
				backgroundColor="background.lightSnow"
				p="25px"
				mb="40px"
			>
				<Icon
					as={IconDone}
					w="55px"
					h="48px"
				/>
			</Box>
			<Text
            pb="40px"
            textAlign="center"
            fontWeight="600"
            fontSize="20px"
         >If you have reviewed the information related to Mica from contributor x please approve the data now.</Text>
			<Button
            colorScheme="blue"
            as={RouteLink}
            to="/"
         >Back to Homepage</Button>
		</VStack>
	</AppLayout>);

};

export default ReviewDone;