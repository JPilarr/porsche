import { Box, HStack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface PersonAvatarProps {
	fullName: string;
	avatarText: string;
	companyName: string;
};

const PersonAvatar:FC<PersonAvatarProps> = ({
	fullName,
	avatarText,
	companyName,
}) => (
	<HStack
		backgroundColor="background.light"
		borderRadius="lg"
		px="18px"
		py="14px"		
	>
		<Box
			borderRadius="50%"
			backgroundColor="#D7DBE7"
			p="8px"
		>{avatarText}</Box>
		<Box>
			<Text>{fullName}</Text>
			<Text color="font.lightGray">{companyName}</Text>
		</Box>
	</HStack>
);

export default PersonAvatar;


