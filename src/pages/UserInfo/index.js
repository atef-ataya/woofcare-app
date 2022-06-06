import React from "react";
// material imports
import { Divider, Typography } from "@mui/material";
// styled components import
import { StyledContainer } from "./components/styles";
import Stepper from "./components/Stepper";
import { Box } from "@mui/system";

const UserInfo = () => {
  return (
    <>
      <StyledContainer>
        <div className="texts">
          <Typography variant="h4" className="font-bold">
            Complete these Steps
          </Typography>
          <Typography variant="p" className="font-regular">
            Lorem ipsum dolor sit emet conseteur
          </Typography>
        </div>
        <Box mb={4}>
          <Divider />
        </Box>
        <div>
          <Stepper />
        </div>
      </StyledContainer>
    </>
  );
};
export default UserInfo;
