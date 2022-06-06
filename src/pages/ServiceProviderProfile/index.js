import React from "react";
// material
import {
  Avatar,
  Tab,
  Box,
  Button,
  Divider,
  Grid,
  Rating,
  Typography,
  IconButton,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// components
import { StyledCard } from "../../components/Card";
import AvaialabilityCalendar from "./components/AvailabilityCalender";
import ImageGallery from "./components/ImageGallery";
import { StyledBadge, StyledAvatar, StyledTabs } from "./components/style";
import About from "./components/About";
import Pets from "./components/Pets";
import Reviews from "./components/Reviews";
// image
import User from "../../assets/images/card-profile.png";
import { Check } from "@mui/icons-material";
import EditIcon from "../../assets/images/edit-icon.png";
import { useNavigate } from "react-router-dom";

// tab panel
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const fontSize = { fontSize: "19px" };

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const editInput = ({ value, type }) => (
  <>
    {type === "text" && (
      <StyledCard sx={{ py: 0.5, px: 2 }}>
        <TextField
          InputProps={{ disableUnderline: true }}
          variant="standard"
          className="font-regular"
          defaultValue={value}
          size="small"
        />
      </StyledCard>
    )}
    {type === "textarea" && (
      <TextareaAutosize
        style={{ padding: "10px", width: "40%" }}
        className="font-regular"
        defaultValue={value}
      />
    )}
  </>
);

const infoData = [
  {
    title: "Gender",
    value: "Male",
    editable: true,
  },
  {
    title: "Phone Number",
    value: "+92361705507",
    editable: true,
  },
  {
    title: "Language",
    value: "English",
    editable: true,
  },
  {
    title: "Joined",
    value: "March 2020",
    editable: false,
  },
];

export default function ServiceProviderProfile({ mode = null }) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const [inputVisible, setInputVisible] = React.useState("");

  const handleChange = (_, idx) => {
    setValue(idx);
  };

  const editIcon = (state) => (
    <Box
      sx={{
        backgroundColor: "#F1F5F9",
        height: "40px",
        width: "40px",
        borderRadius: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state === inputVisible ? (
        <Check />
      ) : (
        <img src={EditIcon} alt="edit-icon" />
      )}
    </Box>
  );

  return (
    <Box sx={{ m: { lg: 4, md: 3 } }}>
      <StyledCard>
        {/* main profile section */}
        <Grid container justifyContent="space-between">
          <Grid item xl={5} lg={7} md={8}>
            <Box sx={{ display: "flex" }}>
              <StyledAvatar>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar
                    src={User}
                    alt="profile"
                    sx={{ height: "114px", width: "114px" }}
                  />
                </StyledBadge>
              </StyledAvatar>
              <Box
                mx={2}
                sx={{
                  width: "100%",
                }}
              >
                <Box display="flex" alignItems="center">
                  {inputVisible === "title" ? (
                    editInput({ value: "Yaroslove K.", type: "text" })
                  ) : (
                    <Typography variant="h5" className="font-semibold">
                      Yaroslove K.
                    </Typography>
                  )}
                  {mode === "edit" && (
                    <IconButton
                      onClick={() =>
                        inputVisible === "title"
                          ? setInputVisible("")
                          : setInputVisible("title")
                      }
                      sx={{ ml: 1 }}
                      size="small"
                      disableRipple
                    >
                      {editIcon("title")}
                    </IconButton>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="p"
                    className="font-regular"
                    sx={{ color: "#64748B" }}
                  >
                    2972 Westheimer Rd. Santa Ana, Illinois 85486
                  </Typography>
                  <Button
                    variant="outlined"
                    className="font-semibold"
                    color="inherit"
                  >
                    {mode === "edit" ? "Set" : "View"} Location
                  </Button>
                </Box>
                <Box display="flex" alignItems="center">
                  <Rating
                    name="text-feedback"
                    value={5}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                  <Typography
                    variant="p"
                    className="font-regular"
                    sx={{ color: "#94A3B8" }}
                  >{`(200)`}</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          {mode === null && (
            <Grid item md={3} my="auto">
              <Button
                className="font-semibold"
                variant="contained"
                color="success"
                disableElevation
                sx={{ mr: 2, width: "140px" }}
                onClick={() => navigate("/chat")}
              >
                Message
              </Button>
              <Button
                className="font-semibold"
                variant="contained"
                color="primary"
                disableElevation
                sx={{ width: "140px" }}
                onClick={() => navigate("/billing-info")}
              >
                Book
              </Button>
            </Grid>
          )}
        </Grid>
        <Divider orientation="horizontal" sx={{ mt: 3 }} />
        <Grid container>
          <Grid item md={3}>
            {mode === "edit" ? (
              infoData.map((item) => (
                <Box my={3} pr={2}>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ mb: 1 }}
                  >
                    {item.title}
                  </Typography>
                  <Box display="flex" alignItems="center">
                    {inputVisible === item.title ? (
                      editInput({ value: item.value, type: "text" })
                    ) : (
                      <Typography
                        variant="p"
                        className="font-regular"
                        sx={{ mb: 1 }}
                      >
                        {item.value}
                      </Typography>
                    )}
                    {mode === "edit" && (
                      <IconButton
                        onClick={() =>
                          inputVisible === item.title
                            ? setInputVisible("")
                            : setInputVisible(item.title)
                        }
                        sx={{ ml: 1 }}
                        size="small"
                        disableRipple
                      >
                        {editIcon(item.title)}
                      </IconButton>
                    )}
                  </Box>
                </Box>
              ))
            ) : (
              <>
                <Box my={3} pr={2}>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ mb: 1 }}
                  >
                    Per Hour Rate
                  </Typography>
                  <div className="font-bold rate">
                    $10
                    <span className="font-regular unit">/hr</span>
                  </div>
                </Box>
                <Box my={3} pr={2}>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ mb: 1 }}
                  >
                    Services
                  </Typography>
                  <div>
                    <Button
                      variant="outlined"
                      className="font-semibold"
                      color="inherit"
                      sx={{ mr: 2 }}
                    >
                      Dog Walker
                    </Button>
                    <Button
                      variant="outlined"
                      className="font-semibold"
                      color="inherit"
                    >
                      Dog Sitter
                    </Button>
                  </div>
                </Box>
                <Box my={3} pr={2}>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ mb: 1 }}
                  >
                    Availablity Calender
                  </Typography>
                  <div>
                    <AvaialabilityCalendar />
                  </div>
                </Box>
              </>
            )}
            <Box my={3} pr={2}>
              <Typography variant="h6" className="font-semibold" sx={{ mb: 1 }}>
                Map
              </Typography>
              <Box>
                <div className="google-map-code">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
                    frameborder="0"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    width="100%"
                    height="481px"
                    title="user-map"
                  ></iframe>
                </div>
              </Box>
            </Box>
            <Box my={3} pr={2}>
              <Box display="flex" alignItems="center">
                <Typography
                  variant="h6"
                  className="font-semibold"
                  sx={{ mb: 1 }}
                >
                  Yaroslove’s Gallery
                </Typography>
                {mode === "edit" && (
                  <IconButton
                    onClick={() =>
                      inputVisible === "gallery"
                        ? setInputVisible("")
                        : setInputVisible("gallery")
                    }
                    sx={{ ml: 1 }}
                    size="small"
                    disableRipple
                  >
                    {editIcon("gallery")}
                  </IconButton>
                )}
              </Box>
              <ImageGallery />
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
          <Grid item md={9}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", pt: 1 }}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  className="font-semibold"
                  sx={fontSize}
                  label="About Yaroslove"
                  {...a11yProps(0)}
                />
                <Tab
                  className="font-semibold"
                  sx={fontSize}
                  label="Yaroslove Pet’s"
                  {...a11yProps(1)}
                />
              </StyledTabs>
            </Box>
            <TabPanel value={value} index={0}>
              <About
                mode={mode}
                editInput={editInput}
                editIcon={editIcon}
                inputVisible={inputVisible}
                setInputVisible={setInputVisible}
              />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Pets mode={mode} />
            </TabPanel>
            <Divider />
            <Reviews />
          </Grid>
        </Grid>
      </StyledCard>
    </Box>
  );
}
