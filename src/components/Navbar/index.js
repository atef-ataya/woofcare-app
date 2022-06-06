import * as React from "react";
// material icons
import MoreIcon from "@mui/icons-material/MoreVert";
// styles
import {
  StyledAppbar,
  StyledLink,
  StyledNavItem,
  StyledSelects,
} from "./styles";
// images
import Logo from "../../assets/images/logo.png";
import SMSIcon from "../../assets/images/sms-navbar.png";
// material
import {
  Button,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Box,
  Select,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
  List,
  ListItemIcon,
} from "@mui/material";
import Notifications from "./Notifications";
import { useLocation, useNavigate } from "react-router-dom";
import { allCountriesData } from "../../utils/constants";
import { StyledCard } from "../Card";
import User from "./User";
import { Mail } from "@mui/icons-material";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const auth = JSON.parse(localStorage.getItem("authenticated"));

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const links = auth
    ? [
        {
          title: "Dashboard",
          path: "/dashboard",
        },
        {
          title: "Hire Services",
          path: "/",
        },
        {
          title: "Job History",
          path: "/job-history",
        },
        {
          title: "Earning",
          path: "/earning",
        },
      ]
    : [
        {
          title: "Search Services",
          path: "/",
        },
        {
          title: "Become Sitter",
          path: "/my-profile",
        },
        {
          title: "Job History",
          path: "/job-history",
        },
      ];
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const renderMobileMenu = (
    <Drawer
      anchor="right"
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box sx={{ width: 250 }} role="presentation">
        <Box
          display="flex"
          py={1}
          justifyContent="space-evenly"
          sx={{ borderTop: "1px solid", borderBottom: "1px solid" }}
        >
          <Select
            size="small"
            variant="standard"
            defaultValue="AF"
            className="font-semibold"
            sx={{ color: "#000" }}
            disableUnderline
          >
            {allCountriesData.map((value) => (
              <MenuItem value={value.Code} selected>
                <img
                  src={`https://countryflagsapi.com/png/${value.Code}`}
                  alt="United Arab Emirates flag"
                  height={14}
                  width={20}
                />
              </MenuItem>
            ))}
          </Select>
          <Divider />
          <Select
            disableUnderline
            size="small"
            color="success"
            variant="standard"
            defaultValue="en"
            className="font-semibold"
            sx={{ color: "#000" }}
          >
            <MenuItem value="en">EN</MenuItem>
            <MenuItem value="ur">UR</MenuItem>
            <MenuItem value="ar">AR</MenuItem>
          </Select>
          <Divider />
          <Select
            disableUnderline
            size="small"
            color="success"
            variant="standard"
            defaultValue="usd"
            className="font-semibold"
            sx={{ color: "#000" }}
          >
            <MenuItem value="inr">INR</MenuItem>
            <MenuItem value="pkr">PKR</MenuItem>
            <MenuItem value="usd">USD</MenuItem>
          </Select>
        </Box>
        <List>
          {links.map((value, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigate(`${value.path}`)}>
                <ListItemIcon>
                  <Mail />
                </ListItemIcon>
                <ListItemText primary={value.title} className="font-regular" />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
          <ListItem key="login" disablePadding>
            <ListItemButton onClick={() => navigate(`/login`)}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Login" className="font-regular" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <StyledAppbar position="static">
          <Toolbar>
            <StyledLink to="/" className="font-bold">
              <img src={Logo} alt="logo" />
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                Woof Care
              </Typography>
            </StyledLink>
            <Box px={6} display="flex" height="63px" sx={{ flexGrow: 1 }}>
              {links.map((value) => (
                <StyledNavItem
                  active={value.path === location.pathname}
                  to={value.path}
                  className="font-regular"
                >
                  {value.title}
                </StyledNavItem>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <StyledNavItem to="/chat" active={location.pathname === "/chat"}>
                {/* <Badge badgeContent={4} color="primary"> */}
                <img src={SMSIcon} alt="sms" />
                {/* </Badge> */}
              </StyledNavItem>
              <Notifications />
              <StyledSelects mx={2}>
                <Select
                  size="small"
                  color="secondary"
                  variant="standard"
                  defaultValue="AF"
                  className="font-semibold"
                >
                  {allCountriesData.map((value) => (
                    <MenuItem value={value.Code} selected>
                      <img
                        src={`https://countryflagsapi.com/png/${value.Code}`}
                        alt="United Arab Emirates flag"
                        height={14}
                        width={20}
                      />
                    </MenuItem>
                  ))}
                </Select>
                <Divider orientation="vertical" />
                <Select
                  size="small"
                  color="secondary"
                  variant="standard"
                  defaultValue="en"
                  className="font-semibold"
                >
                  <MenuItem value="en">EN</MenuItem>
                  <MenuItem value="ur">UR</MenuItem>
                  <MenuItem value="ar">AR</MenuItem>
                </Select>
                <Divider orientation="vertical" />
                <Select
                  size="small"
                  color="secondary"
                  variant="standard"
                  defaultValue="usd"
                  className="font-semibold"
                >
                  <MenuItem value="inr">INR</MenuItem>
                  <MenuItem value="pkr">PKR</MenuItem>
                  <MenuItem value="usd">USD</MenuItem>
                </Select>
              </StyledSelects>
              {auth ? (
                <User />
              ) : (
                <Button
                  className="font-semibold"
                  color="secondary"
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: "5.23952px", mr: 2 }}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="secondary"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </StyledAppbar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </>
  );
}
