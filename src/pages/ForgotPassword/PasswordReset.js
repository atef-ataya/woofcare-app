import React from "react";
// material imports
import { Button, Grid, Typography } from "@mui/material";
// icon import
import SuccesIcon from "../../assets/images/success.png";
import { Link, useNavigate } from "react-router-dom";
// styled components import
import { StyledContainer } from "../Login/components/styles";
import { StyledLockImage, StyledText, StyledGrid } from "./components/styles";

const PasswordReset = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledGrid container justifyContent="center" alignItems="center">
        <Grid item lg={4} md={6}>
          <StyledContainer>
            <div className="display-grid children-margin">
              <StyledLockImage>
                <img src={SuccesIcon} alt="success-icon" />
              </StyledLockImage>
              <StyledText>
                <Typography variant="h5" className="font-bold">
                  Password Reset
                </Typography>
                <Typography variant="p" className="font-regular">
                  Your password has been sucessfully reset click below to login
                  magically
                </Typography>
              </StyledText>

              <Button
                fullWidth
                className="login-btn font-bold"
                onClick={() => navigate("/")}
              >
                Continue
              </Button>
              <span className="text-center font-regular">
                Back to{" "}
                <Link to="/login" className="font-bold">
                  Login
                </Link>
              </span>
            </div>
          </StyledContainer>
        </Grid>
      </StyledGrid>
    </>
  );
};
export default PasswordReset;
