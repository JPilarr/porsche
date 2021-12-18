import { AppLayout } from "components/AppLayout";
import { FC } from "react";
import { SuccessCard } from "components/Elements/SuccessCard";

interface ReviewDoneProps {}

const ReviewDone: FC<ReviewDoneProps> = ({}) => {
  return (
    <AppLayout
      alignItems="center"
      justifyContent="center"
      minH="100vh"
      display="flex"
    >
      <SuccessCard
        bodyText="If you have reviewed the information related to Mica from contributor
			x please approve the data now."
        buttonText="Back to Homepage"
      />
    </AppLayout>
  );
};

export default ReviewDone;
