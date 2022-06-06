import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  MenuItem,
  Select,
  Tab,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { StyledCard } from "../../components/Card";
import PropTypes from "prop-types";
import { StyledTabs } from "../JobHistory/components/styles";
import StyledFormItem from "../../components/Input";
import DropzoneArea from "../UserInfo/components/Steps/Dropzone";
import { KeyboardArrowDown } from "@mui/icons-material";

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

export default function CustomerSupport() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ m: { md: 3, lg: 4 } }}>
      <StyledCard sx={{ p: 0 }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" className="font-bold">
            Customer Support
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
                label="Email Support"
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
                sx={{ py: 1 }}
                align="center"
              >
                Submit a request
              </Typography>
              <Grid container justifyContent="center">
                <Grid item lg={8}>
                  <Typography
                    variant="body2"
                    className="font-regular"
                    align="center"
                  >
                    Please enter the details of your request. A member of our
                    support staff will respond as soon as possible. flash.
                  </Typography>
                </Grid>
              </Grid>
              <Box my={2}>
                <Grid container justifyContent="center">
                  <Grid item lg={9}>
                    <StyledFormItem label="Are you owner or service provider">
                      <Select
                        size="small"
                        className="font-semibold"
                        placeholder="Select"
                        type="text"
                        defaultValue="unset"
                        color="secondary"
                        IconComponent={KeyboardArrowDown}
                      >
                        <MenuItem value="unset" hidden selected disabled>
                          Select
                        </MenuItem>
                        <MenuItem value="yes">Yes</MenuItem>
                        <MenuItem value="no">No</MenuItem>
                      </Select>
                    </StyledFormItem>
                  </Grid>
                  <Grid item lg={9}>
                    <StyledFormItem label="Your Name">
                      <TextField
                        size="small"
                        placeholder="Enter Name"
                        type="text"
                        color="secondary"
                      />
                    </StyledFormItem>
                  </Grid>
                  <Grid item lg={9}>
                    <StyledFormItem label="Your Email Address">
                      <TextField
                        size="small"
                        placeholder="Enter Email"
                        type="text"
                        color="secondary"
                      />
                    </StyledFormItem>
                  </Grid>
                  <Grid item lg={9}>
                    <StyledFormItem label="Message">
                      <TextField
                        multiline
                        rows={2}
                        maxRows={4}
                        placeholder="Enter Message"
                        type="text"
                        color="secondary"
                      />
                    </StyledFormItem>
                  </Grid>
                  <Grid item lg={9}>
                    <Box my={2}>
                      <DropzoneArea />
                    </Box>
                  </Grid>
                  <Grid item lg={9}>
                    <Box sx={{ float: "right" }}>
                      <Button
                        disableRipple
                        disableElevation
                        variant="contained"
                      >
                        Submit
                      </Button>
                    </Box>
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
