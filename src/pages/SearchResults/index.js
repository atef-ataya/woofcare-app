import React from "react";
// material
import { Box, Button, Grid, Typography } from "@mui/material";
// components
import ChooseLocation from "../Home/components/ChooseLocation";
import Duration from "../Home/components/Duration";
import HourlyRange from "../Home/components/HourlyRate";
import Distance from "./components/Distance";
import YourLocation from "./components/YourLocation";
import ProfileCard from "../Home/components/ProfileCard";
import { StyledCard } from "../../components/Card";
import { StyledContainer } from "../Home/components/styles";
import StyledFormItem from "../../components/Input";
// images
import Profile from "../../assets/images/card-profile.png";
import CardBg from "../../assets/images/card-bg.png";

// mock data
const profiles = [
  {
    name: "Yaroslove K.",
    distance: "2 KM",
    rating: 5,
    reviews: 200,
    rate: 10,
    profile: Profile,
    cover: CardBg,
  },
  {
    name: "Yaroslove K.",
    distance: "2 KM",
    rating: 5,
    reviews: 200,
    rate: 10,
    profile: Profile,
    cover: CardBg,
  },
  {
    name: "Yaroslove K.",
    distance: "2 KM",
    rating: 5,
    reviews: 200,
    rate: 10,
    profile: Profile,
    cover: CardBg,
  },
  {
    name: "Yaroslove K.",
    distance: "2 KM",
    rating: 5,
    reviews: 200,
    rate: 10,
    profile: Profile,
    cover: CardBg,
  },
  {
    name: "Yaroslove K.",
    distance: "2 KM",
    rating: 5,
    reviews: 200,
    rate: 10,
    profile: Profile,
    cover: CardBg,
  },
  {
    name: "Yaroslove K.",
    distance: "2 KM",
    rating: 5,
    reviews: 200,
    rate: 10,
    profile: Profile,
    cover: CardBg,
  },
];

export default function SearchResults() {
  return (
    <>
      <StyledContainer fixed sx={{ bgcolor: "#F8FAFC", pt: 2 }}>
        {/* Search Section */}
        <Box
          px={4}
          mx={4}
          my={2}
          sx={{ pt: 4, pb: 6, bgcolor: "#fff" }}
          className=" rounded-card"
        >
          <Typography variant="h6" className="font-semibold" sx={{ pb: 2 }}>
            Search Dog Services
          </Typography>
          <Button
            variant="contained"
            disabled
            sx={{ mr: 2 }}
            className="font-regular"
            disableElevation
          >
            Dog Walker
          </Button>
          <Button variant="contained" className="font-regular" disableElevation>
            Dog Sitter
          </Button>
          <Grid container spacing={3} className="font-regular">
            <Grid item md={3}>
              <StyledFormItem label="Choose Your Location">
                <ChooseLocation />
              </StyledFormItem>
            </Grid>
            <Grid item md={6}>
              <StyledFormItem>
                <Duration />
              </StyledFormItem>
            </Grid>
            <Grid item md={3}>
              <StyledFormItem label="Hourly Rate $">
                <HourlyRange />
              </StyledFormItem>
            </Grid>
            <Grid item md={3}>
              <StyledFormItem label="Distance">
                <Distance />
              </StyledFormItem>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                color="success"
                variant="contained"
                className="font-regular"
                disableElevation
                sx={{ px: 4, mt: 3 }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>

        <Box p={4}>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <YourLocation />
            </Grid>
            <Grid item md={8}>
              <StyledCard>
                <Box display="grid">
                  <Typography variant="p" className="font-semibold">
                    Search Result
                  </Typography>
                  <Typography variant="caption" className="font-medium">
                    15 Walker Available
                  </Typography>
                </Box>
                <Box>
                  <Grid container justifyContent="space-evenly">
                    {profiles.map((profile) => (
                      <Grid item md={5}>
                        <ProfileCard profileData={profile} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </StyledCard>
            </Grid>
          </Grid>
        </Box>
      </StyledContainer>
    </>
  );
}
