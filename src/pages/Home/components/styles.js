import { Box, styled } from "@mui/material";
import Carousel from "react-elastic-carousel";

const StyledHeroSection = styled(Box)`
  text-align: center;
  color: #fff;
  height: 28rem;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledContainer = styled(Box)`
  & .rounded-card {
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    box-shadow: none;
  }
  & .marginTop {
    margin-top: -35px;
  }
  & .MuiSlider-track,
  .MuiSlider-thumbColorPrimary {
    color: #059669;
  }
  & .MuiSlider-rail {
    color: #f1f5f9;
  }
  & .react-multi-carousel-track {
    margin: 40px 0px;
  }
`;
const StyledPickers = styled(Box)`
  display: flex;
  border-radius: 10px;
  & div {
    width: 100%;
  }
  & > * {
    font-size: 16px;
  }
  & p {
    font-size: 14px;
    padding-bottom: 5px;
  }
  & select:focus-visible {
    outline: none;
    border: none;
  }
  & .MuiInputBase-root {
    border-bottom: none;
  }
  & .MuiInputBase-root::after,
  .MuiInputBase-root::before {
    display: none;
  }
  & .MuiBox-root {
    border: 1px solid #e2e8f0;
    height: 52px;
    padding: 10px;
  }
  .MuiInputAdornment-root button {
    margin-left: auto;
  }
`;

const StyledCard = styled(Box)`
  border: 1px solid #e2e8f0;
  border-radius: 5px;
  & .main-div {
    margin-top: -50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .MuiAvatar-root {
      text-align: center;
      width: 106px;
      height: 106px;
    }
    & .MuiTypography-p {
      color: #64748b;
      font-size: 14px;
    }
  }
  & .bg-section {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 147px;
    background-size: cover;
  }
  & .rate {
    font-size: 23px;
    color: #059669;
  }
  & .unit {
    font-size: 12px;
    color: #64748b;
  }
`;

const StyledCarousel = styled(Carousel)`
  margin: 30px 0px;
  & .rec-pagination {
    display: none;
  }
  & .rec-arrow,
  .rec-arrow:hover:enabled,
  .rec-arrow:focus:enabled {
    width: 41px;
    background: #ffffff;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.11);
    color: #000;
  }
  & .rec-arrow[disabled] {
    display: none;
  }
`;

const StyledBox = styled(Box)`
  background: #ffffff;
  /* Neutral/Gray 200 */

  border: 1px solid #e2e8f0 !important;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 0px 10px;
  & > * {
    font-size: 14px;
  }
`;

export {
  StyledHeroSection,
  StyledContainer,
  StyledCard,
  StyledPickers,
  StyledCarousel,
  StyledBox,
};
