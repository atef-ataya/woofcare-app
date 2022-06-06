import { Box } from "@mui/system";
import styled from "styled-components";
import { css } from "styled-components";

const StyledFooter = styled.footer`
  background-color: #000;
  min-height: 450px;
  padding: 40px 20px 0px 40px;
  color: #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4,
  h6 {
    color: #fff;
    padding: 30px 0px;
  }
  h4 {
    font-size: 34px;
  }
  h6 {
    font-size: 19px;
  }
  a,
  p {
    color: #e2e8f0;
    font-size: 16px;
    margin: 10px 0px;
  }
  a:hover {
    color: #fff;
  }
  img {
    margin-right: 5px;
  }
`;

const StyledLinks = styled(Box)`
  ${(props) =>
    props.grid &&
    css`
      display: grid;
    `}
`;

export { StyledFooter, StyledLinks };
