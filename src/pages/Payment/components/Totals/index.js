import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const totalData = [
  {
    title: "Sub total",
    value: "$350",
  },
  {
    title: "Service Fee",
    value: "$9.9",
  },
];
export default function Totals({ mode }) {
  const navigate = useNavigate();
  return (
    <>
      <Box my={2}>
        <Grid container justifyContent="space-between" spacing={2}>
          {totalData.map((item) => (
            <>
              <Grid item md={6}>
                <Typography
                  variant="p"
                  className="font-regular"
                  sx={{ color: "#64748B" }}
                >
                  {item.title}
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Box sx={{ textAlign: "right" }}>
                  <Typography
                    variant="p"
                    className="font-regular"
                    sx={{ color: "#64748B" }}
                  >
                    {item.value}
                  </Typography>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
      <Divider orientation="horizontal" sx={{ my: 4 }} />
      <Box my={2}>
        <Grid container justifyContent="space-between" spacing={2}>
          {totalData.map((item) => (
            <>
              <Grid item md={6}>
                <Typography variant="p" className="font-semibold">
                  {item.title}
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="p" className="font-semibold">
                    {item.value}
                  </Typography>
                </Box>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
      <Button
        variant="contained"
        disableElevation
        fullWidth
        className="font-semibold"
        sx={{ mt: 3 }}
        onClick={() =>
          mode === "billing-mode" ? navigate("/payment-options") : navigate("/")
        }
      >
        {mode === "billing-mode" ? "Checkout" : "Pay $320"}
      </Button>
    </>
  );
}
