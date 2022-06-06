import styled from "@emotion/styled";
import { TextField } from "@mui/material";

const StyledTextfield = styled(TextField)`
  input {
    height: 52px;
    padding: 0px 14px;
  }
  & .MuiInputBase-root,
  .MuiInputBase-input {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
  }
`;
export { StyledTextfield };
