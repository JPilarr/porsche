import { FC, useState } from "react";
import { questionSections, questions } from "mock";
import { Box, Link, Text, Button, HStack, Divider, Icon } from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";
import QuestionAnswerItem from './QuestionAnswerItem';
import AppLayoutTwoColumn from 'components/AppLayoutTwoColumn';
import Main from 'components/AppLayoutTwoColumn/Main';
import ASide from 'components/AppLayoutTwoColumn/ASide';
import PersonAvatar from 'components/Elements/PersonAvatar';
import { ReactComponent as IconTabSelected } from "static/icons/tab-selected.svg";
import { ReactComponent as IconTabUnselected } from "static/icons/tab-unselected.svg";
import { ReactComponent as IconCalendar } from "static/icons/calendar.svg";

interface ReviewProps {

};

const Review:FC<ReviewProps> = ({}) => {
	const [selectedSectionIndex, setSelectedSectionIndex] = useState(1);	

	const handleApprove = () => {
		console.log("approve");
	};



	return (
		<AppLayoutTwoColumn>
			<Main>
				<Box mb="24px">
					<Link
						as={RouteLink}
						to="/"
					>
						&lt; Back
					</Link>
				</Box>
				<Text fontSize={18} fontWeight={600} mb="40px">Review contributor response on CO2 Footprint</Text>
				<HStack>
					{questionSections.map(questionSectionItem => (
						<HStack pr="32px" key={questionSectionItem.index}>
							<Icon
								as={
									questionSectionItem.index === selectedSectionIndex
									? IconTabSelected
									: IconTabUnselected
								}
								w="24px"
								h="24px"
							/>
							<Text
								textDecorationStyle={'solid'}
								{...questionSectionItem.index === selectedSectionIndex
									? {
										color: "brand.primary",
										borderBottom: "1px solid",
										borderBottomColor: "brand.primary"
									}
									: {
										color: "font.lightBlack",
										borderBottom: "1px solid transparent",
									}
								}
							>{questionSectionItem.title}</Text>
						</HStack>
					))}
				</HStack>
				<Divider mx="-55px" width="calc(100% + 110p)" mb="40px" />

				{
					questions
						.filter(questionItem => questionItem.sectionIndex === selectedSectionIndex)
						.map(questionItem => (<QuestionAnswerItem
							key={questionItem.index}
							questionAnswerItem={questionItem}
						/>))
				}
				

				{
					selectedSectionIndex === questionSections.length
					?
						<Button
							mt="16px"
							px="64px"
							colorScheme="blue"
							onClick={handleApprove}
							as={RouteLink}
							to="/review/approve"
						>Approve</Button>
					:
						<Button
							mt="16px"
							px="64px"
							colorScheme="blue"
							onClick={() => setSelectedSectionIndex(selectedSectionIndex + 1)}
						>Next</Button>
				}
				
			</Main>
			<ASide>
				<Text fontSize={18} fontWeight={600} mb="16px" mt="40px">Activies</Text>
				
				<Divider mx="-55px" width="calc(100% + 110p)" mb="24px" />
				
				<Text fontSize={18} fontWeight={600} mb="16px" textTransform="uppercase">Date received</Text>
				<HStack mb="48px">
					<Icon
						as={IconCalendar}
						w="20px"
						h="20px"
					/>
					<Text>Today, 16 of Nov. 2021</Text>
				</HStack>
				
				<Text fontSize={18} fontWeight={600} mb="16px" textTransform="uppercase">Contributor</Text>
				<PersonAvatar
					fullName="Thomas Maier"
					avatarText="TM"
					companyName="Company xyz"
				/>

			</ASide>
		</AppLayoutTwoColumn>
	);
};




export default Review;