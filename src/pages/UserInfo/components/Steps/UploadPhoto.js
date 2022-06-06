import React from "react";
// material
import { Grid, Input, Typography, Box } from "@mui/material";
// styles
import ButtonComponent from "../../../../components/Button";
import { StyledUploadImage } from "../styles";
// images
import Profile from "../../../../assets/images/profile.png";

export default function UploadPhoto({ step }) {
  return (
    <Box>
      <Typography variant="caption" className="font-regular">{`Step ${
        step + 1
      } of 5`}</Typography>
      <Typography variant="h4" className="font-bold">
        Upload Profile Picture
      </Typography>
      <Typography variant="p" className="font-regular">
        Lorem ipsum dolor sit emet conseteur
      </Typography>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "30vh" }}
      >
        <Grid item>
          <StyledUploadImage mb={3}>
            <img src={Profile} alt="profile" />
          </StyledUploadImage>
          <label htmlFor="contained-button-file" style={{ margin: "auto" }}>
            <Box display="none">
              <Input accept="image/*" multiple type="file" />
            </Box>
            <Box display="flex" justifyContent="center">
              <ButtonComponent
                text="Upload Photo"
                className="font-regular"
                secondary
              />
            </Box>
          </label>
        </Grid>
      </Grid>
    </Box>
  );
}
