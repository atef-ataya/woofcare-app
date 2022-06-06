import { KeyboardArrowDown } from "@mui/icons-material";
import {
  Box,
  Divider,
  MenuItem,
  Rating,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { StyledReviewsTitle } from "../style";
import Reviewer from "../../../../assets/images/reviewer.png";
import { StyledLink } from "../../../../components/Link";

const reviewsData = [
  {
    name: "Yaroslove K. ",
    img: Reviewer,
    date: "20 May 2020",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.",
  },
  {
    name: "Yaroslove K. ",
    img: Reviewer,
    date: "20 May 2020",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.",
  },
  {
    name: "Yaroslove K. ",
    img: Reviewer,
    date: "20 May 2020",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.",
  },
  {
    name: "Yaroslove K. ",
    img: Reviewer,
    date: "20 May 2020",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.",
  },
  {
    name: "Yaroslove K. ",
    img: Reviewer,
    date: "20 May 2020",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.",
  },
  {
    name: "Yaroslove K. ",
    img: Reviewer,
    date: "20 May 2020",
    rating: 5,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquam quam adipiscing scelerisque aenean. Egestas orci eu orci sed. Rutrum faucibus eu et, accumsan magna amet commodo. Amet libero libero aliquam sapien ut facilisi lacinia nibh nunc. Magna leo pulvinar diam ut sed arcu semper pharetra. Erat pellentesque sed est tempus senectus et.",
  },
];

export default function Reviews() {
  return (
    <>
      <StyledReviewsTitle>
        <Typography variant="h5" className="font-semibold">
          Reviews
        </Typography>
        <Select
          variant="standard"
          defaultValue="recent"
          disableUnderline
          IconComponent={KeyboardArrowDown}
          className="font-semibold"
        >
          <MenuItem value="recent">Recent</MenuItem>
          <MenuItem value="all">All</MenuItem>
        </Select>
      </StyledReviewsTitle>
      <Divider />
      {reviewsData.map((review) => (
        <>
          <Box p={2}>
            <Box display="flex" alignItems="center">
              <img src={review.img} alt="reviewer" height={65} width={65} />
              <StyledLink to="#">
                <Typography
                  variant="p"
                  className="font-semibold"
                  sx={{ ml: 2 }}
                >
                  {review.name}
                </Typography>
              </StyledLink>
              <Typography
                variant="body2"
                className="font-semibold"
                sx={{ ml: 4, color: "#64748B" }}
              >
                {review.date}
              </Typography>
              <Rating value={review.rating} sx={{ marginLeft: "auto" }} />
            </Box>
            <Box py={3}>
              <Typography
                variant="p"
                className="font-regular"
                sx={{ color: "#64748B" }}
              >
                {review.review}
              </Typography>
            </Box>
          </Box>
          <Divider />
        </>
      ))}
    </>
  );
}
