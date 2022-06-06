import * as React from "react";
import InputBase from "@mui/material/InputBase";
import { Box } from "@mui/system";
import Vector from "../../../../assets/images/send.png";
import { KeyboardArrowDown } from "@mui/icons-material";
import { StyledBox } from "../styles";

export default function ChooseLocation() {
  return (
    <StyledBox component="form">
      <Box aria-label="menu" mr={1}>
        <img src={Vector} alt="send" height="20px" />
      </Box>
      <InputBase
        size="small"
        placeholder="Search Your Location"
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Box color="primary">
        <KeyboardArrowDown fontSize="small" />
      </Box>
    </StyledBox>
  );
}
