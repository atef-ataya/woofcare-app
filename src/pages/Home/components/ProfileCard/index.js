import * as React from "react";
import {
  Avatar,
  Box,
  Rating,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { StyledCard } from "../styles";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../../../../components/Link";

export default function ProfileCard({ profileData }) {
  const navigate = useNavigate();
  const { name, distance, rating, reviews, rate, profile, cover } = profileData;
  return (
    <StyledCard my={2} sx={{ maxWidth: "340px" }}>
      <Box
        className="bg-section"
        sx={{ backgroundImage: `url(${cover})` }}
      ></Box>
      <div className="main-div">
        <Avatar src={profile} />
        <StyledLink to="/service-provider-profile">
          {" "}
          <Typography className="font-semibold">{name}</Typography>
        </StyledLink>
        <Typography variant="p" className="font-regular">
          {distance} away
        </Typography>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Rating
            name="text-feedback"
            value={rating}
            readOnly
            precision={0.5}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          <Typography
            variant="p"
            className="font-regular"
          >{`(${reviews})`}</Typography>
        </Box>
      </div>
      <CardActions
        sx={{ display: "flex", justifyContent: "space-between", mb: 1, mt: 2 }}
      >
        <div className="font-bold rate">
          ${rate}
          <span className="font-regular unit">/hr</span>
        </div>
        <Button
          color="primary"
          variant="contained"
          className="font-regular"
          disableElevation
          onClick={() => navigate("/billing-info")}
        >
          Book
        </Button>
      </CardActions>
    </StyledCard>
  );
}
