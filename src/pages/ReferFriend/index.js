import React from "react";
import {
  Box,
  Card,
  Divider,
  Grid,
  Paper,
  Tab,
  TextField,
  Typography,
} from "@mui/material";
import { StyledCard } from "../../components/Card";
import PropTypes from "prop-types";
import { StyledTabs } from "../JobHistory/components/styles";
import { StyledLabel } from "../Payment/components/PaymentOptions";
import LinkCircle from "../../assets/images/link-circle.png";
import DirectBox from "../../assets/images/directbox-default.png";
import DollarCircle from "../../assets/images/dollar-circle.png";
import CopyIcon from "../../assets/images/document-copy.png";
import styled from "@emotion/styled";
import { css } from "styled-components";

const StyledStep = styled(Box)`
  display: flex;
  .step-image {
    height: 60px;
    width: 60px;
    background-color: #000;
    border-radius: 100%100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
`;

const StyledDivider = styled.div`
  ${({ steps, index }) =>
    index !== steps.length - 1 &&
    css`
      border: 1px dotted black;
    `}
  height: 30px;
  width: 2px;
  margin-left: 28px;
`;

const StyledPaper = styled(Paper)`
  width: 70%;
  margin: auto;
  .copy-box {
    background: rgba(221, 249, 111, 0.37);
    border-radius: 7px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    cursor: pointer;
  }
`;

const steps = [
  {
    title: "Get Referral Link",
    description: "Register and get your unique refferal and code",
    img: LinkCircle,
  },
  {
    title: "Invite your friends",
    description: "Invite your  friends to register via your link  or code",
    img: DirectBox,
  },
  {
    title: "Get Referral Link",
    description:
      "You will receive up to $20 SD when your friends get his first Job or hire first job",
    img: DollarCircle,
  },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabStyle = {
  borderBottom: "1px solid #E2E8F0",
  fontSize: "14px",
};

export default function JobHistory() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ m: { md: 3, lg: 4 } }}>
      <StyledCard sx={{ p: 0 }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" className="font-bold">
            Refer Friend
          </Typography>
        </Box>
        <Divider />
        <Grid container>
          <Grid item md={3}>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              orientation="vertical"
              textColor="inherit"
            >
              <Tab
                label="Refer  a Friend"
                {...a11yProps(0)}
                sx={TabStyle}
                className="font-semibold"
              />
            </StyledTabs>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mr: "-2px" }} />
          <Grid item md={9}>
            <TabPanel
              value={value}
              index={0}
              style={{ width: "100%", margin: "20px" }}
            >
              <Typography
                variant="h5"
                className="font-semibold"
                sx={{ py: 3 }}
                align="center"
              >
                Enter Referral Code Here and Earn $5
              </Typography>
              <Grid container justifyContent="center">
                <Grid item lg={8}>
                  <StyledLabel className="font-regular">
                    Referral Code
                  </StyledLabel>
                  <StyledCard sx={{ py: 1, px: 2 }}>
                    <TextField
                      placeholder="Enter Referral Code"
                      InputProps={{ disableUnderline: true }}
                      variant="standard"
                      className="font-regular"
                    />
                  </StyledCard>
                </Grid>
              </Grid>
              <Grid container sx={{ my: 4 }}>
                <Grid item md={4}>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ color: "#94A3B8" }}
                  >
                    REFERAL FRIENDS
                  </Typography>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ pt: 1 }}
                  >
                    0
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ color: "#94A3B8" }}
                  >
                    REFERAL BONUS
                  </Typography>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ pt: 1 }}
                  >
                    0
                  </Typography>
                </Grid>
              </Grid>
              <Box my={2}>
                <Grid container alignItems="center">
                  <Grid item lg={6}>
                    <Typography
                      variant="h6"
                      className="font-semibold"
                      sx={{ py: 2 }}
                    >
                      How it Works
                    </Typography>
                    {steps.map((item, index) => (
                      <>
                        <StyledStep>
                          <Grid container>
                            <Grid item lg={2}>
                              <div className="step-image">
                                <img src={item.img} alt="stp" />
                              </div>
                              <StyledDivider
                                className="divider"
                                steps={steps}
                                index={index}
                              />
                            </Grid>
                            <Grid item lg={10}>
                              <Box className="steps-text">
                                <Typography
                                  variant="p"
                                  className="font-semibold"
                                >
                                  {item.title}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  className="font-regular"
                                  sx={{ color: "#94A3B8", pt: 1 }}
                                >
                                  {item.description}
                                </Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </StyledStep>
                      </>
                    ))}
                  </Grid>
                  <Grid item lg={6}>
                    <StyledPaper sx={{ p: 2 }} elevation={4}>
                      <Typography variant="caption" className="font-regular">
                        YOUR REFERRAL CODE
                      </Typography>
                      <Box className="copy-box" my={1}>
                        <Typography className="font-semibold">
                          12345567
                        </Typography>
                        <img src={CopyIcon} alt="icon" />
                      </Box>
                      <Typography variant="caption" className="font-regular">
                        YOUR REFERRAL CODE
                      </Typography>
                      <Box className="copy-box" my={1}>
                        <Typography className="font-semibold">
                          www.woofcare.com/hdjhc dbcuswhchhjcccvcbmk
                        </Typography>
                        <img src={CopyIcon} alt="icon" />
                      </Box>
                    </StyledPaper>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          </Grid>
        </Grid>
      </StyledCard>
    </Box>
  );
}
