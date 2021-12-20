import { FC } from "react";
import { Text } from "@chakra-ui/react";

interface QuestionAnswerItemProps {
	questionAnswerItem: any;
};

const QuestionAnswerItem:FC<QuestionAnswerItemProps> = ({
	questionAnswerItem,
}) => {
	return (<>
		<Text
			fontWeight={600}
			fontSize="18px"
			color="font.darkGray"
		>{questionAnswerItem.title}</Text>
		<Text
			mb={4}
			fontSize="16px"
			color="font.lightGray"
		>{questionAnswerItem.answer}</Text>
	</>);

};

export default QuestionAnswerItem;