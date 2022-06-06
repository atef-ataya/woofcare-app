import { Grid } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item md={6}>
        <div className="not-found">
          <img src="https://i.imgur.com/qIufhof.png" height="100px" />
          <div>
            <h3>404: Page Not Found</h3>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
