import React from "react";
// material
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// components
import { StyledCard } from "../../components/Card";
import AvaialabilityCalendar from "../ServiceProviderProfile/components/AvailabilityCalender";
import ImageGallery from "../ServiceProviderProfile/components/ImageGallery";
import {
  StyledBadge,
  StyledAvatar,
} from "../ServiceProviderProfile/components/style";
// image
import User from "../../assets/images/card-profile.png";
import TableComp from "./components/Table";
import Visa from "../../assets/images/visa.png";
import Master from "../../assets/images/master.png";
import Paypal from "../../assets/images/PayPal.png";
import { useNavigate } from "react-router-dom";

const fontSize = { fontSize: "23px" };

const infoData = [
  {
    title: "Balance",
    value: "$310",
  },
  {
    title: "Active Jobs",
    value: "+4 Jobs ($200)",
  },
  {
    title: "Earned this Month",
    value: "$400",
  },
  {
    title: "Expected Earning",
    value: "$298",
  },
];

export default function Dashboard({ mode = null }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ m: { lg: 4, md: 3 } }}>
      <StyledCard pt={mode === "earning" && 0}>
        {mode === null && (
          <>
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
                      <Typography variant="h5" className="font-semibold">
                        Yaroslove K.
                      </Typography>
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
                    </Box>
                    <Box display="flex" alignItems="center">
                      <Rating
                        name="text-feedback"
                        value={5}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
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
              <Grid item md={2} my="auto">
                <Button
                  className="font-semibold"
                  variant="contained"
                  color="success"
                  disableElevation
                  sx={{ mr: 2, width: "140px" }}
                  onClick={() => navigate("/my-profile")}
                >
                  My Profile
                </Button>
              </Grid>
            </Grid>
            <Divider orientation="horizontal" sx={{ mt: 3 }} />
          </>
        )}
        <Grid container>
          <Grid item md={3}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                py: mode == " earning" ? 2 : 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography className="font-semibold" sx={fontSize}>
                {mode === null ? "Stats" : "Earning"}
              </Typography>
              {mode === "earning" && (
                <Button
                  className="font-semibold"
                  variant="outlined"
                  color="inherit"
                  disableElevation
                  sx={{ mr: 2, width: "140px" }}
                >
                  Withdraw
                </Button>
              )}
            </Box>
            {infoData.map((item) => (
              <Box my={3} pr={2}>
                <Typography
                  variant="h6"
                  className="font-semibold"
                  sx={{ mb: 1 }}
                >
                  {item.title}
                </Typography>
                {item.title === "Balance" ? (
                  <div className="font-bold rate">
                    {item.value}
                    <span className="font-regular unit"></span>
                  </div>
                ) : (
                  <Typography
                    variant="p"
                    className="font-regular"
                    sx={{ mb: 1 }}
                  >
                    {item.value}
                  </Typography>
                )}
              </Box>
            ))}
            {mode !== "earning" ? (
              <>
                <Box my={3} pr={2}>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ mb: 1 }}
                  >
                    My Availablity Calender
                  </Typography>
                  <div>
                    <AvaialabilityCalendar />
                  </div>
                </Box>
                <Box my={3} pr={2}>
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ mb: 1 }}
                  >
                    My Map Location
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
                      My Gallery
                    </Typography>
                  </Box>
                  <ImageGallery />
                </Box>
              </>
            ) : (
              <Box my={3} pr={2}>
                <Box
                  display="flex"
                  height={60}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography
                    variant="h6"
                    className="font-semibold"
                    sx={{ mb: 1 }}
                  >
                    Withdraw Method
                  </Typography>
                  <Button variant="text" className="font-regular" color="error">
                    Edit Method
                  </Button>
                </Box>
                <Box display="flex" height={60} alignItems="center">
                  <StyledCard sx={{ px: 1, py: 2, mx: 2, display: "flex" }}>
                    <img src={Visa} alt="credit" height="20px" width="70px" />
                  </StyledCard>
                  <img src={Master} alt="credit" height="80px" width="80px" />
                  <StyledCard sx={{ px: 3, py: 1.5, mx: 2, display: "flex" }}>
                    <img src={Paypal} alt="credit" />
                  </StyledCard>
                </Box>
              </Box>
            )}
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
          <Grid item md={9}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", p: 3 }}>
              <Typography className="font-semibold" sx={fontSize}>
                {mode === "earning" ? "Completed Jobs" : " Jobs"}
              </Typography>
            </Box>
            <TableComp />
            <Divider />
          </Grid>
        </Grid>
      </StyledCard>
    </Box>
  );
}
