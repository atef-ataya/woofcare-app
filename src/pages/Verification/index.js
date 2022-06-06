import React from "react";
import {
  Box,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Tab,
  Typography,
} from "@mui/material";
import { StyledCard } from "../../components/Card";
import PropTypes from "prop-types";
import { StyledTabs } from "../JobHistory/components/styles";
import StyledFormItem from "../../components/Input";
import DropzoneArea from "../UserInfo/components/Steps/Dropzone";

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

export default function Verification() {
  const [value, setValue] = React.useState(0);
  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ m: { md: 3, lg: 4 } }}>
      <StyledCard sx={{ p: 0 }}>
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" className="font-bold">
            Manage Doucments
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
                label="Passport/ID Verification"
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
                Verification
              </Typography>
              <Grid container justifyContent="center">
                <Grid item lg={8}>
                  <Typography
                    variant="body2"
                    className="font-regular"
                    align="center"
                  >
                    Upload a goverment-issued ID that clearly shows your full
                    name and complete photo.The doucment must be a cleared
                    high-resolution color copy of the complete (uncropped)
                    orginal doucment with no information obscured by camera’s
                    flash.
                  </Typography>
                </Grid>
              </Grid>
              <Box my={2}>
                <Grid container justifyContent="center">
                  <Grid item lg={9}>
                    <StyledFormItem label="Country">
                      <Select
                        size="small"
                        className="font-regular"
                        placeholder="Select Country"
                        type="text"
                        defaultValue="unset"
                      >
                        <MenuItem value="unset" hidden selected disabled>
                          Select a Country
                        </MenuItem>
                      </Select>
                    </StyledFormItem>
                  </Grid>
                  <Grid item lg={9}>
                    <StyledFormItem>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="passport"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="passport"
                          control={<Radio color="success" />}
                          label="Passport"
                        />
                        <FormControlLabel
                          value="id"
                          control={<Radio color="success" />}
                          label="National ID"
                        />
                      </RadioGroup>
                    </StyledFormItem>
                  </Grid>
                  <Grid item lg={10}>
                    <DropzoneArea />
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
