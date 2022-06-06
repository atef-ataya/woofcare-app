import React from "react";
// material imports
import {
  Button,
  FormControl,
  Grid,
  Hidden,
  IconButton,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
// icons & images import
import FacebookIcon from "../../components/Icons/FacebookIcon";
import TwitterIcon from "../../components/Icons/TwitterIcon";
import InstagramIcon from "../../components/Icons/InstagramIcon";
import HeroImage from "../../assets/images/signup-hero-img.png";
import WoofIcon from "../../assets/images/woof-care-icon.png";
import Facebook from "../../assets/images/facebook.png";
import Google from "../../assets/images/google.png";
import Logo from "../../assets/images/logo.png";
// styled components import
import {
  StyledButtons,
  StyledContainer,
  StyledSection,
} from "../Login/components/styles";
// react link
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        {/* hide this section on small screens */}
        <Hidden mdDown>
          <Grid item xs={7}>
            <StyledSection>
              <div className="social-icons">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
              </div>

              <div className="image-container">
                <img src={HeroImage} alt="dog" />
              </div>

              <div className="logo-image">
                <img src={WoofIcon} alt="dog" />
                <Typography variant="h5" className="font-bold">
                  Woof Care
                </Typography>
              </div>
              <Typography className="font-regular">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                at elit in eu augue nulla porttitor interdum. Eu aliquet sit
                nisl amet, hac quisque turpis. Sit ut mattis amet a quis augue
                lacus, morbi lorem. Est dui rhoncus blandit massa sed ipsum
                felis.
              </Typography>
            </StyledSection>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={5}>
          <StyledContainer fixed>
            {/* show up on small screens */}
            <Hidden mdUp>
              <Grid container justifyContent="center" alignItems="center">
                <Grid item>
                  <img src={Logo} alt="logo" className="" />
                </Grid>
                <Grid item>
                  <Typography variant="h5" className="font-bold">
                    Woof Care
                  </Typography>
                </Grid>
              </Grid>
            </Hidden>
            <Typography variant="h5" className="font-bold">
              Register
            </Typography>
            <Typography variant="p" className="font-regular">
              Lorem ipsum dolor sit emet conseteur
            </Typography>
            <StyledButtons>
              <Button
                disableElevation
                startIcon={<img src={Facebook} alt="facebook" />}
                className="font-medium"
              >
                Facebook
              </Button>
              <Button
                disableElevation
                startIcon={<img src={Google} alt="google" />}
                className="font-medium"
              >
                Google
              </Button>
            </StyledButtons>
            <div className="display-grid">
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
              <FormControl>
                <InputLabel shrink className="font-regular">
                  Password
                </InputLabel>
                <TextField
                  size="small"
                  placeholder="Enter Password here"
                  type="Password"
                  className="font-regular"
                />
              </FormControl>
            </div>
            <Button
              fullWidth
              className="login-btn font-bold"
              onClick={() => navigate("/user-info")}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <span className="register font-regular">
                  Already have an account?{" "}
                  <Link to="/login" className="font-bold">
                    Login
                  </Link>
                </span>
              </Grid>
            </Grid>
          </StyledContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default SignUp;
