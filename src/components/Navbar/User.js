import React from "react";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import UserImg from "../../assets/images/user-message.png";
import { BorderBottom } from "./styles";
import { StyledLink } from "../Link";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();
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
      <Box mr={1}>
        <BorderBottom open={open}>
          <IconButton
            size="small"
            aria-label="user menu"
            aria-controls={open ? "user-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Avatar src={UserImg} />
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
              mt: 2.5,
              width: "20%",
              border: "1px solid #E2E8F0",
              borderRadius: "5px",
            },
          }}
        >
          <Box display="flex" alignItems="center" mx={2}>
            <Avatar
              src={UserImg}
              sx={{ mr: 1, height: "37px", width: "37px" }}
            />
            <Box pb={1}>
              <Typography variant="h6" className="font-semibold">
                Rana Mukaram
              </Typography>
              <StyledLink to="/my-profile">
                <Typography variant="caption" className="font-semibold">
                  View Profile
                </Typography>
              </StyledLink>
            </Box>
          </Box>
          <Divider />
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/verification")}>
                <ListItemText
                  primary="Manage Documents"
                  className="font-regular"
                  disableTypography
                  sx={{ fontSize: "12px", color: "#475569" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/refer-friend")}>
                <ListItemText
                  primary="Refer Friends"
                  className="font-regular"
                  disableTypography
                  sx={{ fontSize: "12px", color: "#475569" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => navigate("/customer-support")}>
                <ListItemText
                  primary="Help and Support"
                  className="font-regular"
                  disableTypography
                  sx={{ fontSize: "12px", color: "#475569" }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  localStorage.setItem("authenticated", "false");
                  navigate("/");
                }}
              >
                <ListItemText
                  primary="Logout"
                  className="font-regular"
                  disableTypography
                  sx={{ fontSize: "12px", color: "#EF4444" }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Menu>
      </Box>
    </>
  );
}
