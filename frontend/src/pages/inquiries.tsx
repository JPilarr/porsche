import { Heading } from "@chakra-ui/react";
import { AppLayout } from "components/AppLayout";
import { InquiryTable } from "components/InquiryTable";

export const InquiriesPage = () => {
  return (
    <AppLayout>
      <Heading mb={10}>Inquiries</Heading>
      <InquiryTable />
    </AppLayout>
  );
};
