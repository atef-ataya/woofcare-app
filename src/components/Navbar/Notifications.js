import * as React from "react";
import NotifIcon from "../../assets/images/notification.png";
import NotifIconFocused from "../../assets/images/notification-focused.png";
import Menu from "@mui/material/Menu";
import {
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { BorderBottom } from "./styles";
import { StyledMessageItem } from "../../pages/Messages/components/style";
import User from "../../assets/images/user-message.png";
import OKIcon from "../../assets/images/tick.png";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Your Payment is Done",
    time: "2m",
    message: "payment_done",
    userImg: OKIcon,
  },
  {
    title: "Yaroslove K.",
    time: "2m",
    message: "job_started",
    userImg: User,
  },
  {
    title: "Yaroslove K.",
    time: "2m",
    message: "job_started",
    userImg: User,
  },
  {
    title: "Yaroslove K.",
    time: "2m",
    message: "job_started",
    userImg: User,
  },
  {
    title: "Yaroslove K.",
    time: "2m",
    message: "job_started",
    userImg: User,
  },
  {
    title: "Yaroslove K.",
    time: "2m",
    message: "job_started",
    userImg: OKIcon,
  },
];

export default function Notifications() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <BorderBottom open={open}>
        <IconButton
          size="small"
          aria-label="show 17 new notifications"
          color="secondary"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Badge badgeContent={17} color="primary">
            <img src={open ? NotifIconFocused : NotifIcon} alt="notification" />
          </Badge>
        </IconButton>
      </BorderBottom>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 3.0,
            width: "30%",
            border: "1px solid #E2E8F0",
            borderRadius: "5px",
          },
        }}
      >
        <Box display="flex" justifyContent="space-between" px={2} py={1}>
          <Typography variant="h5" className="font-semibold">
            Notifications
          </Typography>
          <Button
            variant="text"
            color="error"
            disableTouchRipple
            disableFocusRipple
          >
            Mark all as read{" "}
          </Button>
        </Box>
        <Divider />
        <Box height="50vh" overflow="auto">
          {data.map((user) => (
            <>
              <StyledMessageItem sx={{ p: 2 }}>
                <img src={user.userImg} alt="user" height="40px" width="40px" />
                <div className="title-box">
                  <Box className="text-box">
                    <Link to="#">
                      <Typography variant="p" className="font-semibold">
                        {user.title}
                      </Typography>
                    </Link>
                    <Typography
                      variant="caption"
                      className="font-light"
                      sx={{ color: "#64748B" }}
                    >
                      {user.time}
                    </Typography>
                  </Box>
                  <div className="message">
                    <Typography
                      variant="body2"
                      className="font-regular"
                      sx={{ color: "#64748B" }}
                    >
                      Your <Link to="">Job</Link> "Dog Walker" started.
                    </Typography>
                  </div>
                </div>
              </StyledMessageItem>
              <Divider />
            </>
          ))}
        </Box>
      </Menu>
    </>
  );
}
