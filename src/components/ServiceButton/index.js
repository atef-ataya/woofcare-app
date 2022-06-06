import { Button } from "@mui/material";
import { styled, css } from "@mui/system";

const StyledServiceButton = styled(Button)`
  text-transform: capitalize;
  border-radius: 5px;
  height: 150px;
  width: 150px;
  font-size: 16px;
  margin-right: 20px;
  color: #0f172a;
  ${(props) =>
    props.primary &&
    css`
      background-color: rgba(221, 249, 111, 0.24);
      border: 1px solid #ddf96f;
    `}
  ${(props) =>
    props.secondary &&
    css`
      background-color: #f1f5f9;
      border: none;
    `}
`;

export { StyledServiceButton };
