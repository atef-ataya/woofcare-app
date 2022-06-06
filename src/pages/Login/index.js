import React, { useEffect } from "react";
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
import HeroImage from "../../assets/images/login-hero.png";
import WoofIcon from "../../assets/images/woof-care-icon.png";
import Facebook from "../../assets/images/facebook.png";
import Google from "../../assets/images/google.png";
import Logo from "../../assets/images/logo.png";
// styled components import
import {
  StyledButtons,
  StyledContainer,
  StyledSection,
} from "./components/styles";
// react link
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadData } from "../../redux/slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.testSlice.data);
  const loading = useSelector((state) => state.testSlice.loading);
  const error = useSelector((state) => state.testSlice.error);
  useEffect(() => {
    if (!data.length) {
      dispatch(loadData());
    }
  }, [data]);

  console.log(loading, data, error);

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
              Login
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
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    to="/forgot-password"
                    className="forgot-password font-semibold"
                  >
                    Forgot Password?
                  </Link>
                </Grid>
              </Grid>
            </div>
            <Button
              fullWidth
              className="login-btn font-bold"
              onClick={() => {
                navigate("/");
                localStorage.setItem("authenticated", "true");
              }}
            >
              Login
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <span className="register font-regular">
                  Don't have an account?{" "}
                  <Link to="/sign-up" className="font-bold">
                    Register
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

export default Login;
