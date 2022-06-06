import React from "react";
// material
import { Grid, Typography, Box } from "@mui/material";
// styles
import { StyledServiceButton } from "../../../../components/ServiceButton";

export default function ChooseService({ step }) {
  return (
    <Box>
      <Typography variant="caption" className="font-regular">{`Step ${
        step + 1
      } of 5`}</Typography>
      <Typography variant="h4" className="font-bold">
        Choose Services
      </Typography>
      <Typography variant="p" className="font-regular">
        Lorem ipsum dolor sit emet conseteur
      </Typography>
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <Box my={3} display="flex">
            <StyledServiceButton primary className="font-bold">
              Buy Dog Service
            </StyledServiceButton>
            <StyledServiceButton secondary className="font-bold">
              Become Service Provider
            </StyledServiceButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
