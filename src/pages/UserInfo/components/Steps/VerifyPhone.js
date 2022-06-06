import React from "react";
// material
import {
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from "@mui/material";
// styles
import StyledFormItem from "../../../../components/Input";
import ButtonComponent from "../../../../components/Button";

export default function VerifyPhone({ step }) {
  return (
    <Box>
      <Typography variant="caption" className="font-regular">{`Step ${
        step + 1
      } of 5`}</Typography>
      <Typography variant="h4" className="font-bold">
        Verify Phone Number
      </Typography>
      <Typography variant="p" className="font-regular">
        Lorem ipsum dolor sit emet conseteur
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <StyledFormItem label="Mobile No.">
            <Grid container alignItems="center" spacing={2}>
              <Grid item lg={2}>
                <Select size="small" defaultValue="+91">
                  <MenuItem value="+91">+91</MenuItem>
                  <MenuItem value="+92">+92</MenuItem>
                  <MenuItem value="+93">+93</MenuItem>
                </Select>
              </Grid>
              <Grid item lg={6}>
                {" "}
                <TextField
                  size="small"
                  className="font-regular"
                  placeholder="Enter Phone Number"
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                  type="number"
                />
              </Grid>
              <Grid item lg={3}>
                <ButtonComponent outlined text="Verify" />
              </Grid>
            </Grid>
          </StyledFormItem>
        </Grid>
        <Grid item lg={8}>
          <Typography variant="p" className="font-bold">
            Enter 6 Digit Code and Verfiy your Phone Number
          </Typography>
          <StyledFormItem>
            <Grid container spacing={2}>
              <Grid item xs={1}>
                <TextField
                  size="small"
                  className="font-regular"
                  type="number"
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  size="small"
                  className="font-regular"
                  type="number"
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  size="small"
                  className="font-regular"
                  type="number"
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  size="small"
                  className="font-regular"
                  type="number"
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  size="small"
                  className="font-regular"
                  type="number"
                />
              </Grid>
              <Grid item xs={1}>
                <TextField
                  size="small"
                  className="font-regular"
                  type="number"
                />
              </Grid>
            </Grid>
          </StyledFormItem>
        </Grid>
      </Grid>
    </Box>
  );
}
