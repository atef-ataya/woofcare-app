import React from "react";
// material
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
// styles
import {
  StyledCarousel,
  StyledContainer,
  StyledHeroSection,
} from "./components/styles";
// components
import StyledFormItem from "../../components/Input";
import ChooseLocation from "./components/ChooseLocation";
import Duration from "./components/Duration";
import HourlyRange from "./components/HourlyRate";
import ProfileCard from "./components/ProfileCard";
// images
import BlogCover from "../../assets/images/blog-bg.png";
import BlogCard from "./components/Blog";
import Partner1 from "../../assets/images/partner1.png";
import Partner2 from "../../assets/images/partner2.png";
import Partner3 from "../../assets/images/partner3.png";
import HomeBg from "../../assets/images/home-bg.png";
import Profile from "../../assets/images/card-profile.png";
import CardBg from "../../assets/images/card-bg.png";
import { useNavigate } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 3, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 4 },
  { width: 1750, itemsToShow: 5 },
];

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
];

const blogData = [
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
  {
    title: "How to Keep your Dog Cool in Summer",
    cover: BlogCover,
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}
      <StyledHeroSection sx={{ backgroundImage: `url(${HomeBg})` }}>
        <Typography variant="h4" className="font-bold">
          Loving pet care in your neighborhood
        </Typography>
        <Typography variant="p" className="font-regular">
          Book trusted sitters and dog walkers.
        </Typography>
      </StyledHeroSection>

      <StyledContainer fixed>
        {/* Search Section */}
        <Box
          px={4}
          mx={4}
          sx={{ pt: 4, pb: 6, bgcolor: "#fff" }}
          className="marginTop rounded-card"
        >
          <Typography variant="h6" className="font-semibold" sx={{ pb: 2 }}>
            Search Dog Services
          </Typography>
          <Box mb={2}>
            <Button
              variant="contained"
              disabled
              sx={{ mr: 2 }}
              className="font-regular"
              disableElevation
            >
              Dog Walker
            </Button>
            <Button
              variant="contained"
              className="font-regular"
              disableElevation
            >
              Dog Sitter
            </Button>
          </Box>
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
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                color="success"
                variant="contained"
                className="font-regular"
                disableElevation
                sx={{ px: 4, mt: 3 }}
                onClick={() => navigate("/search-results")}
              >
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>

        {/* Profiles Section */}
        <Box px={4} my={7}>
          <Typography variant="h4" className="font-bold">
            Best Pet Walker in Dubai
          </Typography>
          <Typography variant="p" className="font-regular" sx={{ pb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            lacinia accumsan ultricies tortor
          </Typography>
          <StyledCarousel breakPoints={breakPoints}>
            {profiles.map((profile) => (
              <div style={{ width: "100%" }}>
                <ProfileCard profileData={profile} />
              </div>
            ))}
          </StyledCarousel>
        </Box>

        {/* Blogs */}
        <Box px={4} my={7}>
          <Typography variant="h4" className="font-bold">
            Petcare Blog
          </Typography>
          <Typography variant="p" className="font-regular" sx={{ pb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            lacinia accumsan ultricies tortor
          </Typography>
          <StyledCarousel breakPoints={breakPoints}>
            {blogData.map((blog) => (
              <div style={{ width: "100%" }}>
                <BlogCard blogData={blog} />
              </div>
            ))}
          </StyledCarousel>
        </Box>

        {/* Partners */}
        <Box
          px={4}
          my={4}
          py={8}
          sx={{ textAlign: "center", bgcolor: "#F8FAFC" }}
        >
          <Typography variant="h4" className="font-bold">
            Our Partners
          </Typography>
          <Typography variant="p" className="font-regular" sx={{ pb: 2 }}>
            Just to name a few of our global partners
          </Typography>
          <Box my={6}>
            <img
              src={Partner1}
              alt="partners"
              style={{ marginRight: "40px" }}
            />
            <img
              src={Partner2}
              alt="partners"
              style={{ marginRight: "40px" }}
            />
            <img src={Partner3} alt="partners" />
          </Box>
        </Box>

        {/* Services */}
        <Box px={4} my={4} py={8} sx={{ textAlign: "center" }}>
          <Typography variant="h4" className="font-bold">
            Services
          </Typography>
          <Typography variant="p" className="font-regular" sx={{ pb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. A egestas
            feugiat sagittis id. Porttitor
          </Typography>
          <Box my={6}>
            <Grid container justifyContent="center">
              <Grid item>
                <Box bgcolor="#F1F5F9" p={4} mx={2} width="350px">
                  <Typography
                    variant="h5"
                    className="font-semibold"
                    sx={{ pb: 2 }}
                  >
                    Dog Walking
                  </Typography>
                  <Typography variant="caption" className="font-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    egestas feugiat sagittis id. Porttitor urna nisi, morbi
                    adipiscing ut malesuada id. At orci, blandit sed dignissim
                    venenatis, convallis lectus.
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box bgcolor="#F1F5F9" p={4} mx={2} width="350px">
                  <Typography
                    variant="h5"
                    className="font-semibold"
                    sx={{ pb: 2 }}
                  >
                    Dog Walking
                  </Typography>
                  <Typography variant="caption" className="font-regular">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    egestas feugiat sagittis id. Porttitor urna nisi, morbi
                    adipiscing ut malesuada id. At orci, blandit sed dignissim
                    venenatis, convallis lectus.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </StyledContainer>
    </>
  );
};

export default Home;
