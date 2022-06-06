import React from "react";
import { Button } from "@mui/material";
import { styled, css } from "@mui/material/styles";

const StyledButton = styled(Button)`
  text-transform: capitalize;
  color: #000;
  min-width: 100px;
  ${(props) =>
    props.primary &&
    css`
      background-color: #ddf96f;
      :hover {
        background-color: #ddf96f;
      }
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: #f1f5f9;
      :hover {
        background-color: #f1f5f9;
      }
    `}
    ${(props) =>
    props.outlined &&
    css`
      outline: 1px solid;
      :hover {
        outline: 1px solid;
      }
    `}
`;

export default function ButtonComponent(props) {
  return (
    <StyledButton className="font-bold" {...props}>
      {props.text}
    </StyledButton>
  );
}
