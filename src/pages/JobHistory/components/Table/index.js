import React from "react";
import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { StyledTable } from "../styles";
import User from "../../../../assets/images/user-message.png";
import { StyledMessageItem } from "../../../Messages/components/style";
import { Link } from "react-router-dom";
import { MoreHoriz, MoreVert } from "@mui/icons-material";

const rows = [
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    id: 1,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
    amount: 20,
    status: "In Progress",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    id: 2,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
    amount: 20,
    status: "In Progress",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    id: 3,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
    amount: 20,
    status: "In Progress",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    id: 4,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
    amount: 20,
    status: "In Progress",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    id: 5,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
    amount: 20,
    status: "In Progress",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    id: 6,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
    amount: 20,
    status: "In Progress",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    id: 7,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
    amount: 20,
    status: "In Progress",
  },
];

export default function TableComp({
  setCompleteModalVisible,
  setCancelModalVisible,
  setUpdateModalVisible,
}) {
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
      <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="font-semibold">
            <TableCell>SERVICES</TableCell>
            <TableCell>Started Date & Time</TableCell>
            <TableCell>Ending Date</TableCell>
            <TableCell>Total</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              className="font-regular"
            >
              <TableCell component="th" scope="row">
                <StyledMessageItem
                  sx={{ justifyContent: "flex-start", alignItems: "center" }}
                  inChat
                >
                  <img
                    src={row.service.img}
                    alt="user"
                    height="45px"
                    width="45px"
                  />
                  <div className="title-box">
                    <Box className="text-box">
                      <Typography variant="h6" className="font-semibold">
                        {row.service.title}
                      </Typography>
                    </Box>
                    <div>
                      <Typography
                        variant="p"
                        className="font-regular"
                        sx={{ color: "#64748B" }}
                      >
                        Service by: {row.service.serviceBy}
                        <Link to="#" style={{ color: "#7C9A06" }}>
                          View Profie
                        </Link>
                      </Typography>
                    </div>
                  </div>
                </StyledMessageItem>
              </TableCell>
              <TableCell>{row.start_date}</TableCell>
              <TableCell>{row.end_date}</TableCell>
              <TableCell>${row.amount}/hr</TableCell>
              <TableCell align="center">
                <Box
                  sx={{
                    background: "#D1FAE5",
                    borderRadius: "5px",
                  }}
                >
                  <Typography variant="body2" sx={{ p: 1 }}>
                    {row.status}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align="right">
                <Box>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setCompleteModalVisible(true)}
                  >
                    Mark Complete
                  </Button>
                  <IconButton
                    size="small"
                    sx={{ border: " 0.571429px solid #94A3B8", ml: 2 }}
                    onClick={handleClick}
                  >
                    <MoreVert fontSize="small" />
                  </IconButton>
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
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
            mt: 1.5,
            width: "120px",
            borderRadius: "5px",
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem value="cancel" onClick={() => setCancelModalVisible(true)}>
          <Typography
            variant="caption"
            className="font-regular"
            sx={{ color: "#EF4444" }}
          >
            Cancel Order
          </Typography>
        </MenuItem>
        <MenuItem value="update" onClick={() => setUpdateModalVisible(true)}>
          <Typography variant="caption" className="font-regular">
            Update Order
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
