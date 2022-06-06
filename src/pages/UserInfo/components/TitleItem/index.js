import React from "react";
// material
import { Grid, Typography, Box } from "@mui/material";
// styles
import { StyledItem } from "../styles";

export default function TitleItem({ icon, title, description, disabled }) {
  return (
    <StyledItem disabled={disabled}>
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={10} md={9}>
          <Typography variant="h6" className="font-bold">
            {title}
          </Typography>
          <Typography variant="p" className="font-regular">
            {description}
          </Typography>
        </Grid>
        <Grid item lg={2} md={3}>
          <Box className="img-box">
            <img src={icon} alt="profile" />
          </Box>
        </Grid>
      </Grid>
    </StyledItem>
  );
}
