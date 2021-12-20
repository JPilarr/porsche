import { Box, Button, Icon, VStack, Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
} from '@chakra-ui/react';
import { AppLayout } from 'components/AppLayout';
import { FC, useState } from 'react';
import { ReactComponent as IconClipboard } from "static/icons/clipboard-tick.svg";
import { ReactComponent as IconInfo } from "static/icons/info-circle.svg";
import { Link as RouteLink } from "react-router-dom";

interface ReviewApproveProps {

};

const ReviewApprove:FC<ReviewApproveProps> = ({}) => {

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const handleApproveReview = () => {
		
		setModalIsOpen(false);
	};

	return (<AppLayout
		alignItems="center"
		justifyContent="center"
		minH="100vh"
		display="flex"
	>
		
		<VStack maxW="480px" >
			<Box
				borderRadius="50%"
				backgroundColor="background.lightSnow"
				p="40px"
				mb="40px"
			>
				<Icon
					as={IconClipboard}
					w="67px"
					h="60px"
				/>
			</Box>
			<Text fontSize="28px" pb="8px" fontWeight="bold">Approve data report</Text>
			<Text pb="40px" textAlign="center">If you have reviewed the information related to Mica from contributor x please approve the data now.</Text>
			<Button colorScheme="blue" onClick={() => setModalIsOpen(true)}>Approve data report</Button>
		</VStack>

		<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
		  <ModalOverlay />
		  <ModalContent py="50px">
			 <ModalCloseButton />
			 <ModalBody>
				<VStack>
					<Box
						borderRadius="50%"
						backgroundColor="background.lightSnow"
						p="35px"
						mb="40px"
						w="105px"
						h="105px"
					>
						<Icon
							as={IconInfo}
							w="35px"
							h="35px"
						/>
					</Box>
					<Text fontSize="18px" textAlign="center">You are confirming this data request is accurate and good to go!</Text>
				</VStack>
			 </ModalBody>

			 <ModalFooter justifyContent="center">
				<Button
					colorScheme='blue' mr={3}
					as={RouteLink}
					to="/review/done"
					// onClick={handleApproveReview}
				>
					Confirm
				</Button>
			</ModalFooter>
		  </ModalContent>
		</Modal>

	</AppLayout>);

};

export default ReviewApprove;