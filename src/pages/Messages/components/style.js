import { Box, styled } from "@mui/material";
import { css } from "styled-components";

const StyledMessageItem = styled(Box)`
  cursor: pointer;
  display: flex;
  .title-box {
    width: 80%;
  }
  img {
    margin-right: 10px;
  }
  .text-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  ${(props) =>
    props.inChat &&
    css`
      .text-box {
        justify-content: flex-start;
      }
    `}
  .message {
    white-space: nowrap;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export { StyledMessageItem };
