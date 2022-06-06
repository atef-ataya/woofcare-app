import * as React from "react";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Avatar, Box, CardContent } from "@mui/material";
import { StyledCard } from "../styles";
import { StyledLink } from "../../../../components/Link";

export default function BlogCard({ blogData }) {
  const { title, cover } = blogData;
  return (
    <StyledCard sx={{ maxWidth: 340 }}>
      <Box
        className="bg-section"
        sx={{ backgroundImage: `url(${cover})` }}
      ></Box>
      <CardContent>
        <StyledLink to="/blog">
          <Typography variant="h5" className="font-semibold">
            {title}
          </Typography>
        </StyledLink>
      </CardContent>
      <CardActions sx={{ display: "flex", mb: 1, mt: 2 }}>
        <Avatar
          sx={{ bgcolor: "#DDF96F", color: "#000", fontSize: "14px" }}
          className="font-semibold"
        >
          DW
        </Avatar>
        <Typography
          sx={{ color: "#64748B", fontSize: "14px", ml: 1 }}
          className="font-regular"
        >
          Dog Walker Blog
        </Typography>
      </CardActions>
    </StyledCard>
  );
}
