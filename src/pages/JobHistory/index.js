import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Rating,
  Select,
  Tab,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { StyledCard } from "../../components/Card";
import { Close, KeyboardArrowDown, MoreHoriz } from "@mui/icons-material";
import PropTypes from "prop-types";
import { StyledTabs } from "./components/styles";
import TableComp from "./components/Table";
import ModalComponent from "../../components/Modal";
import SearchIcon from "../../assets/images/search-icon.png";
import Vector from "../../assets/images/modal-tick.png";
import User from "../../assets/images/user-message.png";
import cancelIcon from "../../assets/images/cancel-icon.png";
import updateIcon from "../../assets/images/update-icon.png";

const totalData = [
  {
    title: "Sub total",
    value: "$350",
  },
  {
    title: "Service Fee",
    value: "$9.9",
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
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);
  const [completeOrderModalVisible, setCompleteOrderModalVisible] =
    useState(false);
  const [cancelModalVisible, setCancelModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [upgradeModalState, setUpgradeModalState] = useState(1);
  const [cancelModalState, setCancelModalState] = useState(1);
  const [completeModalState, setCompleteModalState] = useState(1);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ m: { md: 3, lg: 4 } }}>
      <StyledCard sx={{ p: 0 }}>
        <Grid container>
          <Grid item md={2}>
            <Box sx={{ p: 2 }}>
              {open ? (
                <TextField
                  fullWidth
                  placeholder="Search"
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => {
                            setOpen(false);
                            setSearch("");
                          }}
                        >
                          <Close />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  variant="standard"
                  className="font-regular"
                  onChange={(e) => setSearch(e.target.value)}
                  onBlur={() => !search.length && setOpen(false)}
                />
              ) : (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h5" className="font-bold">
                    All Jobs
                  </Typography>
                  <IconButton onClick={() => setOpen(true)}>
                    <img src={SearchIcon} alt="seach-icon" />
                  </IconButton>
                </Box>
              )}
            </Box>
            <Divider />
            <Box>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                orientation="vertical"
                textColor="inherit"
              >
                <Tab
                  label="All Jobs"
                  {...a11yProps(0)}
                  sx={TabStyle}
                  className="font-semibold"
                />
                <Tab
                  label="Active Jobs"
                  {...a11yProps(1)}
                  sx={TabStyle}
                  className="font-semibold"
                />
                <Tab
                  label="Canceled Jobs"
                  {...a11yProps(2)}
                  sx={TabStyle}
                  className="font-semibold"
                />
              </StyledTabs>
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mr: "-2px" }} />
          <Grid item md={10}>
            <Box
              sx={{ padding: "16px" }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <Typography variant="h6" className="font-semibold"></Typography>
              </div>
              <div>
                <IconButton
                  size="small"
                  sx={{ border: " 0.571429px solid #94A3B8", ml: 2 }}
                >
                  <MoreHoriz fontSize="small" />
                </IconButton>
              </div>
            </Box>
            <Divider />
            <TabPanel value={value} index={0}>
              <TableComp
                setCompleteModalVisible={setCompleteOrderModalVisible}
                setCancelModalVisible={setCancelModalVisible}
                setUpdateModalVisible={setUpdateModalVisible}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <TableComp
                setCompleteModalVisible={setCompleteOrderModalVisible}
                setCancelModalVisible={setCancelModalVisible}
                setUpdateModalVisible={setUpdateModalVisible}
              />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TableComp
                setCompleteModalVisible={setCompleteOrderModalVisible}
                setCancelModalVisible={setCancelModalVisible}
                setUpdateModalVisible={setUpdateModalVisible}
              />
            </TabPanel>
          </Grid>
        </Grid>
      </StyledCard>
      {/* complete order modals */}
      <ModalComponent
        modalVisible={completeOrderModalVisible}
        setModalVisible={(val) => {
          setCompleteOrderModalVisible(val);
          setCompleteModalState(1);
        }}
        titleImage={completeModalState === 2 ? null : Vector}
        title={() => {
          if (completeModalState === 1) {
            return "Confirm Job Completion";
          }
          if (completeModalState === 3) {
            return "Your job is Successfully Completed";
          }
          if (completeModalState === 2) {
            return null;
          }
        }}
        textAlign={completeModalState === 2 ? "start" : "center"}
        bodyContent={
          completeModalState !== 2 ? (
            <>
              <Typography
                variant=""
                className="font-regular"
                sx={{ color: "#64748B" }}
              >
                {completeModalState === 1
                  ? "Get exclusive updates and gifts right at your desktop without opening your mail again and again! You can disable them anytime."
                  : "Your Job is Complete Request Send to Owner he must have to take action on job in next 48h otherwise request will be withdrawn"}
              </Typography>
              <Box>
                <Button
                  disableElevation
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="font-semibold"
                  sx={{ my: 2 }}
                  onClick={() => {
                    if (completeModalState < 3) {
                      setCompleteModalState(completeModalState + 1);
                    } else {
                      setCompleteModalState(1);
                      setCompleteOrderModalVisible(false);
                    }
                  }}
                >
                  {completeModalState === 1 ? "Complete Order" : "Back to Home"}
                </Button>
                <Button
                  variant="text"
                  disableRipple
                  disableTouchRipple
                  className="font-semibold"
                  sx={{ color: "#7C9A06" }}
                  onClick={() => {
                    setCompleteOrderModalVisible(false);
                    setCompleteModalState(1);
                  }}
                >
                  {completeModalState === 1 ? "Cancel" : "Skip"}
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h5" className="font-bold">
                Provide Feedback
              </Typography>
              <StyledCard my={2}>
                <Box display="flex" alignItems="center" mb={2}>
                  <img src={User} alt="user" height="35px" width="35px" />
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ ml: 2 }}
                  >
                    Yaroslove K.
                  </Typography>
                </Box>
                <Typography
                  variant="p"
                  className="font-regular"
                  sx={{ color: "#64748B" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                  ultrices ultrices aliquet elementum. Enim aliquam.
                </Typography>
              </StyledCard>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={1}
              >
                <Typography variant="p" className="font-regular">
                  Care
                </Typography>
                <Rating />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={1}
              >
                <Typography variant="p" className="font-regular">
                  Service
                </Typography>
                <Rating />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                my={1}
              >
                <Typography variant="p" className="font-regular">
                  Communication
                </Typography>
                <Rating />
              </Box>
              <Box textAlign="center">
                <Button
                  disableElevation
                  fullWidth
                  variant="contained"
                  color="success"
                  className="font-semibold"
                  sx={{ my: 2 }}
                  onClick={() => setCompleteModalState(completeModalState + 1)}
                >
                  Add Feedback
                </Button>
                <Button
                  variant="text"
                  disableRipple
                  disableTouchRipple
                  className="font-semibold"
                  sx={{ color: "#94A3B8" }}
                  onClick={() => setCompleteModalState(completeModalState + 1)}
                >
                  Skip
                </Button>
              </Box>
            </>
          )
        }
      />
      {/* cancel modal */}
      <ModalComponent
        modalVisible={cancelModalVisible}
        setModalVisible={(val) => {
          setCancelModalVisible(val);
          setCancelModalState(1);
        }}
        titleImage={cancelIcon}
        title={
          cancelModalState === 1
            ? "Are you sure you want to cancel Job?"
            : "You job is Sucessfully Canceled"
        }
        bodyContent={
          <>
            <Typography
              variant="p"
              className="font-regular"
              sx={{ color: "#64748B" }}
            >
              Get exclusive updates and gifts right at your desktop without
              opening your mail again and again! You can disable them anytime.
            </Typography>
            {cancelModalState === 1 && (
              <Box display="grid" textAlign="start" my={2}>
                <Typography variant="p" className="font-regular" sx={{ pb: 1 }}>
                  Explain Reason
                </Typography>

                <TextareaAutosize
                  className="font-regular"
                  style={{ padding: "10px" }}
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam."
                />
              </Box>
            )}
            <Box textAlign="center">
              <Button
                disableElevation
                fullWidth
                variant="contained"
                color={cancelModalState === 1 ? "error" : "primary"}
                className="font-semibold"
                sx={{ my: 2 }}
                onClick={() => {
                  if (cancelModalState === 1) {
                    setCancelModalState(cancelModalState + 1);
                  } else {
                    setCancelModalVisible(false);
                    setCancelModalState(1);
                  }
                }}
              >
                {cancelModalState === 1 ? "Cancel Order" : "Back to Home"}
              </Button>
              <Button
                variant="text"
                disableRipple
                disableTouchRipple
                className="font-semibold"
                color="inherit"
                onClick={() => {
                  setCancelModalVisible(false);
                  setCancelModalState(1);
                }}
              >
                {cancelModalState === 1 ? "Cancel" : "Skip"}
              </Button>
            </Box>
          </>
        }
      />
      {/* update modal */}
      <ModalComponent
        modalVisible={updateModalVisible}
        setModalVisible={(value) => {
          setUpdateModalVisible(value);
          setUpgradeModalState(1);
        }}
        titleImage={upgradeModalState === 3 ? Vector : updateIcon}
        title={
          upgradeModalState === 3
            ? "Job Update Request Sent"
            : "Do you want to Upgrade your Job"
        }
        bodyContent={
          <>
            {upgradeModalState === 1 && (
              <Typography
                variant="p"
                className="font-regular"
                sx={{ color: "#64748B" }}
              >
                Get exclusive updates and gifts right at your desktop without
                opening your mail again and again! You can disable them anytime.
              </Typography>
            )}
            {upgradeModalState === 2 && (
              <Box textAlign="start" my={2}>
                <Box sx={{ mt: 2 }}>
                  <label className="font-regular">From</label>
                  <StyledCard sx={{ py: 0, pl: 0, pr: 1 }}>
                    <Select
                      variant="standard"
                      disableUnderline
                      className="font-semibold"
                      sx={{ width: "100%", py: 1, px: 2 }}
                      defaultValue="none"
                      IconComponent={KeyboardArrowDown}
                    >
                      <MenuItem value="none" disabled>
                        Select
                      </MenuItem>
                    </Select>
                  </StyledCard>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <label className="font-regular">To</label>
                  <StyledCard sx={{ py: 0, pl: 0, pr: 1 }}>
                    <Select
                      variant="standard"
                      disableUnderline
                      className="font-semibold"
                      sx={{ width: "100%", py: 1, px: 2 }}
                      defaultValue="none"
                      IconComponent={KeyboardArrowDown}
                    >
                      <MenuItem value="none" disabled>
                        Select
                      </MenuItem>
                    </Select>
                  </StyledCard>
                </Box>
                <Box my={2}>
                  <Grid container justifyContent="space-between" spacing={2}>
                    {totalData.map((item) => (
                      <>
                        <Grid item md={6}>
                          <Typography variant="p" className="font-semibold">
                            {item.title}
                          </Typography>
                        </Grid>
                        <Grid item md={6}>
                          <Box sx={{ textAlign: "right" }}>
                            <Typography variant="p" className="font-semibold">
                              {item.value}
                            </Typography>
                          </Box>
                        </Grid>
                      </>
                    ))}
                  </Grid>
                </Box>
              </Box>
            )}
            {upgradeModalState === 3 && (
              <Typography
                variant="p"
                className="font-regular"
                sx={{ color: "#64748B" }}
              >
                Your Job is Update Request Send to Owner he must have to take
                action on job in next 48h otherwise request will be withdrawn
              </Typography>
            )}
            <Box textAlign="center">
              <Button
                disableElevation
                fullWidth
                variant="contained"
                className="font-semibold"
                sx={{ my: 2 }}
                onClick={() => {
                  if (upgradeModalState < 3) {
                    setUpgradeModalState(upgradeModalState + 1);
                  } else {
                    setUpdateModalVisible(false);
                    setUpgradeModalState(1);
                  }
                }}
              >
                {upgradeModalState === 1 && "Upgrade Job"}
                {upgradeModalState === 2 && "Upgrade Job and Pay $230"}
                {upgradeModalState === 3 && "Back to home"}
              </Button>
              <Button
                variant="text"
                disableRipple
                disableTouchRipple
                className="font-semibold"
                color="inherit"
                onClick={() => {
                  setUpdateModalVisible(false);
                  setUpgradeModalState(1);
                }}
              >
                Cancel
              </Button>
            </Box>
          </>
        }
      />
    </Box>
  );
}
