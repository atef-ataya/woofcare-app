import React from "react";
import { Box, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { StyledTable } from "../../JobHistory/components/styles";
import User from "../../../assets/images/user-message.png";
import { StyledMessageItem } from "../../Messages/components/style";
import { Link } from "react-router-dom";

const rows = [
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    amount: 20,
    status: "In Progress",
    id: 1,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    amount: 20,
    status: "In Progress",
    id: 1,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    amount: 20,
    status: "In Progress",
    id: 1,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
  },
  {
    service: {
      title: "Dog Walking",
      serviceBy: "Yaroslove K.",
      img: User,
    },
    amount: 20,
    status: "In Progress",
    id: 1,
    start_date: "12 Apirl 2022  13:00 ",
    end_date: "12 Apirl 2022  13:00 ",
  },
];

export default function TableComp() {
  return (
    <>
      <StyledTable sx={{ minWidth: 650 }} aria-label="simple table">
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
                        <Link
                          to="/service-provider-profile"
                          style={{ color: "#7C9A06" }}
                        >
                          View Profie
                        </Link>
                      </Typography>
                    </div>
                  </div>
                </StyledMessageItem>
              </TableCell>
              <TableCell>${row.amount}/hr</TableCell>

              <TableCell align="center">
                <Box
                  sx={{
                    background: "#D1FAE5",
                    borderRadius: "5px",
                  }}
                >
                  <Typography sx={{ py: 1 }}>{row.status}</Typography>
                </Box>
              </TableCell>
              <TableCell align="center">
                <div>{row.start_date}</div>
                {row.end_date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </>
  );
}
