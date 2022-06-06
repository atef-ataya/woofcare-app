import { Box } from "@mui/material";
import styled, { css } from "styled-components";

const StyledContainer = styled.div`
  padding: 0 10%;
  margin-top: 2%;
  .texts {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 789px) {
    h4 {
      font-size: 18px;
    }
    .MuiTypography-p,
    input,
    button {
      font-size: 11px;
    }
    h6 {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 1440px) {
    padding: 0 5%;
    h4 {
      font-size: 21px;
    }
    .MuiTypography-p,
    input,
    button {
      font-size: 14px;
    }
    h6 {
      font-size: 18px;
    }
  }
`;

const StyledItem = styled.div`
  text-align: right;
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.18;
    `}
  .img-box {
    background-color: #000;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledBox = styled(Box)`
  .MuiStepLabel-root {
    flex-direction: row-reverse !important;
  }
  .MuiStepLabel-labelContainer {
    margin-right: 40px;
  }
  .MuiStepConnector-line {
    height: 80px;
    float: right;
    margin-right: 18px;
    z-index: 9999;
  }
  @media screen and (max-width: 1440px) {
    .MuiStepConnector-line {
      height: 55px;
    }
  }
`;

const StyledConnector = styled.div`
  color: red;
  border: 3px solid #000 !important;
  border-radius: 100% !important;
`;

const StyledUploadImage = styled(Box)`
  height: 150px;
  width: 150px;
  background-color: #f1f5f9;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  img {
    height: 7rem;
  }
`;

export {
  StyledContainer,
  StyledItem,
  StyledBox,
  StyledConnector,
  StyledUploadImage,
};
