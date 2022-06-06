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

export default function PersonalInfo({ step }) {
  return (
    <Box>
      <Typography variant="caption" className="font-regular">{`Step ${
        step + 1
      } of 5`}</Typography>
      <Typography variant="h4" className="font-bold">
        Personal Information
      </Typography>
      <Typography variant="p" className="font-regular">
        Lorem ipsum dolor sit emet conseteur
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <StyledFormItem label="First Name">
            <TextField
              size="small"
              className="font-regular"
              placeholder="First Name"
              type="text"
            />
          </StyledFormItem>
        </Grid>
        <Grid item lg={6}>
          <StyledFormItem label="Last Name">
            <TextField
              size="small"
              className="font-regular"
              placeholder="Last Name"
              type="text"
            />
          </StyledFormItem>
        </Grid>
        <Grid item lg={12}>
          <StyledFormItem label="Gender">
            <Select size="small" defaultValue="unset">
              <MenuItem value="unset" disabled hidden selected>
                Select Gender
              </MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </StyledFormItem>
        </Grid>
        <Grid item lg={12}>
          <StyledFormItem label="City">
            <Select size="small" defaultValue="unset">
              <MenuItem value="unset" disabled hidden selected>
                Select City
              </MenuItem>
              <MenuItem value="male">City Name</MenuItem>
              <MenuItem value="female">City Name</MenuItem>
              <MenuItem value="other">City Name</MenuItem>
            </Select>
          </StyledFormItem>
        </Grid>
      </Grid>
    </Box>
  );
}
