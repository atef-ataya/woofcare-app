import React from "react";
// material imports
import { Button, Grid, Typography } from "@mui/material";
// icon import
import SMSIcon from "../../assets/images/sms.png";
import { Link } from "react-router-dom";
// styled components import
import { StyledContainer } from "../Login/components/styles";
import { StyledLockImage, StyledText, StyledGrid } from "./components/styles";
import { useNavigate } from "react-router-dom";

const CheckYourEmail = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledGrid container justifyContent="center" alignItems="center">
        <Grid item lg={4} md={6}>
          <StyledContainer>
            <div className="display-grid children-margin">
              <StyledLockImage>
                <img src={SMSIcon} alt="sms-icon" />
              </StyledLockImage>
              <StyledText>
                <Typography variant="h5" className="font-bold">
                  Check your Email
                </Typography>
                <Typography variant="p" className="font-regular">
                  We sent a password reset link to
                  <Link to="/" className="font-bold">
                    r.mukaram@gmail.com
                  </Link>
                </Typography>
              </StyledText>
              <Button
                fullWidth
                className="login-btn font-bold"
                onClick={() => navigate("/create-new-password")}
              >
                Open Email App
              </Button>
              <span className="text-center font-regular">
                Didn’t Recive an Email?{" "}
                <Link to="/forgot-password" className="font-bold">
                  Send Again
                </Link>
              </span>
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
export default CheckYourEmail;
