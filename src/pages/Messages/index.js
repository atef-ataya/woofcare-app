import React from "react";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { StyledCard } from "../../components/Card";
import SearchIcon from "../../assets/images/search-icon.png";
import User from "../../assets/images/user-message.png";
import { StyledMessageItem } from "./components/style";
import { StyledLink as Link } from "../../components/Link";
import {
  AttachFile,
  MoreHoriz,
  Send,
  SentimentSatisfied,
} from "@mui/icons-material";

const data = [
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquamquam adipiscing scelerisque aenean. Egestas orci eu orcised. Rutrum faucibus eu et, accumsan magna amet commodo.",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquamquam adipiscing scelerisque aenean. Egestas orci eu orcised. Rutrum faucibus eu et, accumsan magna amet commodo.",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message: "Lorem ipsum dolor sit amet",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquamquam adipiscing scelerisque aenean. Egestas orci eu orcised. Rutrum faucibus eu et, accumsan magna amet commodo.",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum.",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquamquam adipiscing scelerisque aenean. Egestas orci eu orcised. Rutrum faucibus eu et, accumsan magna amet commodo.",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquamquam adipiscing scelerisque aenean. Egestas orci eu orcised. Rutrum faucibus eu et, accumsan magna amet commodo.",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquamquam adipiscing scelerisque aenean. Egestas orci eu orcised. Rutrum faucibus eu et, accumsan magna amet commodo.",
    userImg: User,
  },
  {
    name: "Yaroslove K.",
    date: "11/20/2020",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam ultrices ultrices aliquet elementum. Enim aliquamquam adipiscing scelerisque aenean. Egestas orci eu orcised. Rutrum faucibus eu et, accumsan magna amet commodo.",
    userImg: User,
  },
];

export default function Messages() {
  return (
    <Box sx={{ m: { md: 3, lg: 4 } }}>
      <StyledCard sx={{ p: 0 }}>
        <Grid container>
          <Grid item md={4}>
            <Box sx={{ p: 2 }}>
              <TextField
                fullWidth
                placeholder="Search"
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <img src={SearchIcon} alt="seach-icon" />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                className="font-regular"
              />
            </Box>
            <Divider />
            <Box height="75vh" overflow="auto">
              {data.map((user) => (
                <>
                  <StyledMessageItem sx={{ p: 2 }}>
                    <img
                      src={user.userImg}
                      alt="user"
                      height="65px"
                      width="65px"
                    />
                    <div className="title-box">
                      <Box className="text-box">
                        <Link to="#">
                          <Typography variant="h6" className="font-semibold">
                            {user.name}
                          </Typography>
                        </Link>
                        <Typography
                          variant="caption"
                          className="font-light"
                          sx={{ color: "#64748B" }}
                        >
                          {user.date}
                        </Typography>
                      </Box>
                      <div className="message">
                        <Typography
                          variant="p"
                          className="font-regular"
                          sx={{ color: "#64748B" }}
                        >
                          {user.message}
                        </Typography>
                      </div>
                    </div>
                  </StyledMessageItem>
                  <Divider />
                </>
              ))}
            </Box>
          </Grid>
          <Divider orientation="vertical" flexItem sx={{ mr: "-2px" }} />
          <Grid item md={8}>
            <Box
              sx={{ padding: "4px 10px" }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <div>
                <Link to="#">
                  <Typography variant="h6" className="font-semibold">
                    Yaroslove K.
                  </Typography>
                </Link>
                <Typography
                  variant="p"
                  className="font-regular"
                  sx={{ color: "#64748B" }}
                >
                  Last Seen 2hour ago
                </Typography>
              </div>
              <div>
                <IconButton>
                  <MoreHoriz />
                </IconButton>
              </div>
            </Box>
            <Divider />
            <Box height="63.8vh" overflow="auto">
              {data.map((user) => (
                <>
                  <StyledMessageItem
                    sx={{ p: 2, cursor: "auto", justifyContent: "flex-start" }}
                    inChat
                  >
                    <img
                      src={user.userImg}
                      alt="user"
                      height="35px"
                      width="35px"
                    />
                    <div className="title-box">
                      <Box className="text-box">
                        <Link to="#">
                          <Typography variant="h6" className="font-semibold">
                            {user.name}
                          </Typography>
                        </Link>
                        <Typography
                          variant="caption"
                          className="font-light"
                          sx={{ color: "#64748B", pl: 2 }}
                        >
                          {user.date}
                        </Typography>
                      </Box>
                      <div>
                        <Typography
                          variant="p"
                          className="font-regular"
                          sx={{ color: "#64748B" }}
                        >
                          {user.message}
                        </Typography>
                      </div>
                    </div>
                  </StyledMessageItem>
                </>
              ))}
            </Box>
            <Divider />
            <Box display="flex" alignItems="center" px={2} textAlign="end">
              <TextField
                fullWidth
                placeholder="Write Message"
                InputProps={{
                  disableUnderline: true,
                }}
                variant="standard"
                className="font-regular"
                sx={{
                  minHeight: "3rem",
                  py: 3,
                }}
              />
              <Box width="30%">
                <IconButton>
                  <AttachFile color="inherit" />
                </IconButton>
                <IconButton>
                  <SentimentSatisfied color="inherit" />
                </IconButton>
                <IconButton>
                  <Send color="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </StyledCard>
    </Box>
  );
}
