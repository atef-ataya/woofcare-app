import React from "react";
// material imports
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
// icon import
import LockIcon from "../../assets/images/lock.png";
import { Link, useNavigate } from "react-router-dom";
// styled components import
import { StyledContainer } from "../Login/components/styles";
import { StyledLockImage, StyledText, StyledGrid } from "./components/styles";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledGrid container justifyContent="center" alignItems="center">
        <Grid item lg={5}>
          <StyledContainer>
            <div className="display-grid children-margin">
              <StyledLockImage>
                <img src={LockIcon} alt="lock-icon" />
              </StyledLockImage>
              <StyledText>
                <Typography variant="h5" className="font-bold">
                  Forgot Password
                </Typography>
                <Typography variant="p" className="font-regular">
                  No worrie we will send you reset instruction
                </Typography>
              </StyledText>
              <FormControl>
                <InputLabel shrink className="font-regular">
                  Email
                </InputLabel>
                <TextField
                  size="small"
                  placeholder="Enter Email here"
                  type="Email"
                  className="email-input font-regular"
                />
              </FormControl>
              <Button
                fullWidth
                className="login-btn font-bold"
                onClick={() => navigate("/check-your-email")}
              >
                Login
              </Button>
              <span className="register font-regular text-center">
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
export default ForgotPassword;
