import {
  Avatar,
  Box,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
  Table,
  Tag,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { format } from "date-fns";
import { InquiryItem } from "interfaces";
import { inquiries } from "mock";
import React from "react";
import { ReactComponent as IconDots } from "static/icons/dots.svg";
import { ReactComponent as IconDownload } from "static/icons/download.svg";
import { ReactComponent as IconEdit } from "static/icons/list_edit.svg";

const InquiryTableItem: React.FC<{ inquiry: InquiryItem }> = ({ inquiry }) => {
  return (
    <Tr>
      <Td>{inquiry.title}</Td>
      <Td>{inquiry.part}</Td>
      <Td>{format(new Date(inquiry.sentOn), "dd.MM.yyyy")}</Td>
      <Td>{format(new Date(inquiry.dueDate), "dd.MM.yyyy")}</Td>

      <Td>
        <Tag
          colorScheme={
            inquiry.status === "pending"
              ? "blue"
              : inquiry.status === "completed"
              ? "green"
              : "red"
          }
          variant="brand"
        >
          {inquiry.status}
        </Tag>
      </Td>
      <Td>
        <HStack spacing={4}>
          <Avatar name={inquiry.owner.name} size="sm" />
          <Text>{inquiry.owner.email}</Text>
        </HStack>
      </Td>
      <Td textAlign="right">
        <Menu placement="bottom-end" autoSelect={false}>
          <MenuButton
            px={3}
            py={2}
            outline="none"
            _focus={{ outline: "none" }}
            _hover={{
              color: "#3083FF",
            }}
            color="#DBDBDB"
          >
            <Icon
              as={IconDots}
              width="24px"
              h="24px"
              _hover={{ color: "#3083FF" }}
            />
          </MenuButton>
          <MenuList
            boxShadow="0px 0px 60px rgba(202, 202, 202, 0.25)"
            border="none"
            borderRadius="16px"
            px={4}
          >
            <MenuGroup>
              <MenuItem borderRadius="8px" py={3} px={4}>
                <HStack spacing={2} alignItems="center">
                  <Icon
                    color="font.lightGray"
                    as={IconEdit}
                    w="18px"
                    h="18px"
                  />

                  <Text color="font.lightGray">Review report</Text>
                </HStack>
              </MenuItem>
              <MenuItem borderRadius="8px" py={3} px={4}>
                <HStack spacing={2} alignItems="center">
                  <Icon
                    color="font.lightGray"
                    as={IconDownload}
                    w="18px"
                    h="18px"
                  />

                  <Text color="font.lightGray">Export as csv</Text>
                </HStack>
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </Td>
    </Tr>
  );
};

export const InquiryTable: React.FC<{}> = () => {
  if (inquiries.length === 0) {
    return (
      <VStack spacing={4}>
        <Heading size="lg">Start by adding a inquiry</Heading>
        <Text mb={8}>No inquiry</Text>
      </VStack>
    );
  }

  return (
    <Box borderRadius="14px" overflow="hidden" w="100%" bgColor="white">
      <Table variant="custom">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th>Part</Th>
            <Th>Sent on</Th>
            <Th>Due date</Th>
            <Th>Status</Th>
            <Th>Owner</Th>
            <Th textAlign="right">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {inquiries?.map((inquiry, index) => (
            <InquiryTableItem inquiry={inquiry} key={index} />
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};
