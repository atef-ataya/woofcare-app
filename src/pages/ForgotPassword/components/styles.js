import { Grid } from "@mui/material";
import styled from "styled-components";

const StyledLockImage = styled.div`
  text-align: center;
  margin: auto !important;
  background-color: #f1f5f9;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

const StyledText = styled.div`
  text-align: center;
  & :nth-child(1) {
    padding: 10px;
  }
  @media screen and (max-width: 450px) {
    .MuiTypography-p {
      font-size: 13px;
    }
    & :nth-child(1) {
      font-size: 20px;
    }
  }
`;
const StyledGrid = styled(Grid)`
  height: 100vh;
`;
export { StyledLockImage, StyledText, StyledGrid };
