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
import { StyledGrid, StyledLockImage, StyledText } from "./components/styles";

const SetNewPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <StyledGrid container justifyContent="center" alignItems="center">
        <Grid item lg={4} md={6}>
          <StyledContainer>
            <div className="display-grid children-margin">
              <StyledLockImage>
                <img src={LockIcon} alt="sms-icon" />
              </StyledLockImage>
              <StyledText>
                <Typography variant="h5" className="font-bold">
                  Set new Password
                </Typography>
                <Typography variant="p" className="font-regular">
                  Your new password must be different from your previouly used
                  password
                </Typography>
              </StyledText>
              <FormControl>
                <InputLabel shrink className="font-regular">
                  Password
                </InputLabel>
                <TextField
                  size="small"
                  placeholder="Password"
                  type="Password"
                  className="email-input font-regular"
                />
              </FormControl>
              <FormControl>
                <InputLabel shrink className="font-regular">
                  Confirm Password
                </InputLabel>
                <TextField
                  size="small"
                  placeholder="Confirm Password"
                  type="Password"
                  className="email-input font-regular"
                />
              </FormControl>
              <Button
                fullWidth
                className="login-btn font-bold"
                onClick={() => navigate("/password-reset")}
              >
                Reset Password
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
export default SetNewPassword;
