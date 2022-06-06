import React from "react";
// link
import { Link } from "react-router-dom";
// material
import { Box, Divider, Grid, Typography } from "@mui/material";
// images & icons
import Facebook from "../../assets/images/facebook-footer.png";
import Twitter from "../../assets/images/twitter-footer.png";
import Insta from "../../assets/images/instagram-footer.png";
import LinkedIn from "../../assets/images/linkedIn-footer.png";
import Snapchat from "../../assets/images/snapchat-footer.png";
import Tiktok from "../../assets/images/tikTok-footer.png";
import Whatsapp from "../../assets/images/whatsApp-footer.png";
import Telegram from "../../assets/images/telegram-footer.png";
// styles
import { StyledFooter, StyledLinks } from "./styles";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Grid container spacing={3}>
          <Grid item sm={12} xs={12} lg={3} md={3}>
            <Typography variant="h4" className="font-bold">
              Woof Care
            </Typography>
            <Typography variant="p" className="font-regular">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A egestas
              feugiat sagittis id. Porttitor urna nisi, morbi adipiscing ut
              malesuada id. At orci, blandit sed dignissim venenatis, convallis
              lectus.
            </Typography>
          </Grid>
          <Grid item md={3} lg={3} sm={4} xs={6}>
            <StyledLinks grid>
              <Typography variant="h6">QUICK ACCESS</Typography>
              <Link to="/">Search Services</Link>
              <Link to="/">Request Dog Sitter </Link>
              <Link to="/job-history">Job History</Link>
              <Link to="/chat">Messages</Link>
            </StyledLinks>
          </Grid>
          <Grid item md={3} lg={3} sm={4} xs={6}>
            <Typography variant="h6">COMPANY</Typography>
            <StyledLinks grid>
              <Link to="#">Privacy</Link>
              <Link to="#">Terms</Link>
              <Link to="#">Copyright</Link>
              <Link to="#">Contact Us</Link>
            </StyledLinks>
          </Grid>
          <Grid item md={3} lg={3} sm={4} xs={12}>
            <StyledLinks>
              <Typography variant="h6">SOCIAL LINKS</Typography>
              <Link to="">
                <img src={Facebook} alt="fb-icon" />
              </Link>
              <Link to="">
                <img src={Twitter} alt="tw-icon" />
              </Link>
              <Link to="">
                <img src={Insta} alt="insta-icon" />
              </Link>
              <Link to="">
                <img src={LinkedIn} alt="linkedin-icon" />
              </Link>
              <Link to="">
                <img src={Snapchat} alt="snapchat-icon" />
              </Link>
              <Link to="">
                <img src={Tiktok} alt="tiktok-icon" />
              </Link>
              <Link to="">
                <img src={Whatsapp} alt="whatsapp-icon" />
              </Link>
              <Link to="">
                <img src={Telegram} alt="telegram-icon" />
              </Link>
            </StyledLinks>
          </Grid>
        </Grid>
      </StyledFooter>
      <Box backgroundColor="#000" sx={{ pt: { xs: 2, sm: 2, md: 1 } }}>
        <Divider sx={{ backgroundColor: "#fff" }} />
        <Box p={3}>
          <Typography
            sx={{ color: "#fff" }}
            variant="caption"
            className="font-semibold"
          >
            © 2022 Dog Walker™ All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
