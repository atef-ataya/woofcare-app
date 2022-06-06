import styled from "@emotion/styled";
import { AppBar, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { css } from "styled-components";

const StyledAppbar = styled(AppBar)`
  background-color: #000;
  height: auto;
  box-shadow: none;
  width: 100%;
  &:hover {
    background-color: #000;
  }
  &.MuiPaper-root {
    margin-left: 0px;
  }
  @media screen and (max-width: 600px) {
    & .MuiToolbar-root {
      height: 63px;
    }
  }
`;

const StyledLink = styled(Link)(({ theme }) => ({
  color: "#fff",
  display: "flex",
  alignItems: "center",
  "& img": {
    marginRight: "10px",
  },
  [theme.breakpoints.down("md")]: {
    "& .MuiTypography-root": {
      display: "contents",
    },
  },
}));

const StyledNavItem = styled(Link)`
  font-size: 14px;
  margin-right: 5%;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 22px 0px;
  border-bottom: 3px solid #000;
  &:focus {
    color: #ddf96f;
    border-bottom: 3px solid #ddf96f;
  }
  ${(props) =>
    props.active &&
    css`
      color: #ddf96f;
      border-bottom: 3px solid #ddf96f;
    `}

  @media screen and (max-width: 712px) {
    display: none;
  }
`;

const StyledSelects = styled(Box)`
  & .MuiSelect-select {
    color: #fff;
    margin-left: 5px;
    font-size: 14px;
    min-width: 50px;
  }
  & svg {
    color: #fff;
    margin-left: 5px;
  }
  & .MuiInput-root::after {
    display: none;
  }
  & hr {
    background-color: rgb(133, 133, 133);
    height: 29px;
    margin: 0px 3px;
  }
  outline: 1px solid rgb(133, 133, 133);
  border-radius: 5.23952px;
  color: #f1f5f9;
  display: flex;
  align-items: center !important;
`;

const BorderBottom = styled.div`
  border-bottom: 3px solid #000;
  padding: 16px 0px;
  ${(props) =>
    props.open &&
    css`
      border-bottom: 3px solid #ddf96f;
    `}
`;

export { StyledNavItem, StyledLink, StyledAppbar, StyledSelects, BorderBottom };
