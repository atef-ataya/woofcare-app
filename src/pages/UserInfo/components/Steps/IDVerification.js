import React from "react";
// material
import {
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Box,
  Typography,
} from "@mui/material";
// styles
import StyledFormItem from "../../../../components/Input";
import DropzoneArea from "./Dropzone";

export default function IDVerification({ step }) {
  return (
    <Box>
      <Typography variant="caption" className="font-regular">{`Step ${
        step + 1
      } of 5`}</Typography>
      <Typography variant="h4" className="font-bold">
        Passport/ID Verfication
      </Typography>
      <Typography variant="p" className="font-regular">
        Upload a goverment-issued ID that clearly shows your full name and
        complete photo.The doucment must be a cleared high-resolution color copy
        of the complete (uncropped) orginal doucment with no information
        obscured by camera’s flash.
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={8}>
          <StyledFormItem label="Country">
            <Select
              size="small"
              className="font-regular"
              placeholder="Select Country"
              type="text"
              defaultValue="unset"
            >
              <MenuItem value="unset" hidden selected disabled>
                Select a Country
              </MenuItem>
            </Select>
          </StyledFormItem>
        </Grid>
        <Grid item lg={8}>
          <StyledFormItem>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="passport"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="passport"
                control={<Radio color="success" />}
                label="Passport"
              />
              <FormControlLabel
                value="id"
                control={<Radio color="success" />}
                label="National ID"
              />
            </RadioGroup>
          </StyledFormItem>
        </Grid>
        <Grid item lg={12}>
          <DropzoneArea />
        </Grid>
      </Grid>
    </Box>
  );
}
