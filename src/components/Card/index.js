import { Box } from "@mui/material";
import styled from "styled-components";

const StyledCard = styled(Box)`
  padding: 16px;
  background-color: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  box-sizing: border-box;
  & .rate {
    font-size: 23px;
    color: #059669;
  }
  & .unit {
    font-size: 12px;
    color: #64748b;
  }
  & .MuiSelect-select:focus {
    background-color: transparent;
  }
`;

export { StyledCard };
