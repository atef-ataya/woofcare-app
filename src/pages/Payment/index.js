import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledCard } from "../../components/Card";
import { Avatar, Box, Divider, Grid, Rating, Typography } from "@mui/material";
import PaymentOptions from "./components/BookServices";
import BookServices from "./components/BookServices";
import Totals from "./components/Totals";
import {
  StyledAvatar,
  StyledBadge,
} from "../ServiceProviderProfile/components/style";
import User from "../../assets/images/card-profile.png";
import StarIcon from "@mui/icons-material/Star";

export default function Payment() {
  const [mode, setMode] = React.useState("billing-mode");
  const location = useLocation();
  // set mode according to path
  React.useEffect(() => {
    if (location.pathname === "/billing-info") {
      setMode("billing-mode");
    } else {
      setMode("payment-option");
    }
  }, [location]);

  return (
    <Box sx={{ m: { lg: 4, md: 3 } }}>
      <StyledCard>
        <Grid container>
          <Grid item md={4}>
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
                <Typography variant="h5" className="font-semibold">
                  Yaroslove K.
                </Typography>
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
            <Box sx={{ my: 3, pr: 4 }}>
              <Typography variant="h4" className="font-semibold">
                {mode === "billing-mode"
                  ? "Book Services"
                  : "Billing Information"}
              </Typography>
              {mode === "billing-mode" ? <BookServices /> : <Totals />}
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} />
          <Grid item md={8}>
            <Box sx={{ my: 2, ml: 2, px: 3 }}>
              <Typography variant="h5" className="font-bold">
                {mode === "billing-mode"
                  ? "Billing Information"
                  : "Payment Option"}
              </Typography>
              {mode === "billing-mode" ? (
                <Totals mode={mode} />
              ) : (
                <PaymentOptions />
              )}
            </Box>
          </Grid>
        </Grid>
      </StyledCard>
    </Box>
  );
}
