import styled from "@emotion/styled";
import { Divider, Typography } from "@mui/material";

const StyledTitle = styled(Typography)`
  font-size: 72px;
  line-height: 80px;
  /* or 111% */

  text-align: center;
  letter-spacing: -0.04em;

  background: linear-gradient(97.1deg, #7c9a06 4.8%, #7c9a06 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StyledDivider = styled(Divider)`
  width: 8px;
  height: 128px;
  background: #7c9a06;
  margin-right: 10px;
`;

export { StyledTitle, StyledDivider };
