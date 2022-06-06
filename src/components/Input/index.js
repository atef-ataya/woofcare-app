import React from "react";
import { FormControl } from "@mui/material";
import { styled, css } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)`
  width: 100%;
  margin-top: 10px;
  ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop};
    `}
  & label {
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    padding-bottom: 5px;
  }
  .MuiInputBase-root,
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiRadio-root {
    color: #000;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default function StyledFormItem(props) {
  return (
    <StyledFormControl marginTop={props.mt}>
      {props.label && (
        <label shrink className="font-regular">
          {props.label}
        </label>
      )}
      {props.children}
    </StyledFormControl>
  );
}
