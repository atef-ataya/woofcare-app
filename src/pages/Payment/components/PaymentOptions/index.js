import React, { useState } from "react";
import {
  Box,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  TextField,
} from "@mui/material";
import Visa from "../../../../assets/images/visa.png";
import Master from "../../../../assets/images/master.png";
import Paypal from "../../../../assets/images/PayPal.png";
import { StyledCard } from "../../../../components/Card";
import styledComponents from "styled-components";

export const StyledLabel = styledComponents.label`
  color:#474554;
  font-size: 14px;
  font-style: normal;
  padding-bottom:5px;
`;
export default function PaymentOptions() {
  const [method, setMethod] = useState("credit");
  const handleChangeMethod = (event) => {
    setMethod(event.target.value);
  };

  return (
    <>
      <FormControlLabel
        value="credit"
        control={<Radio color="success" />}
        label={
          <Box display="flex" alignItems="center" width="100%">
            Credit Card{"  "}
            <StyledCard sx={{ px: 1, py: 2, mx: 2, display: "flex" }}>
              <img src={Visa} alt="credit" height="20px" width="70px" />
            </StyledCard>
            <img src={Master} alt="credit" height="80px" width="80px" />
          </Box>
        }
        checked={method === "credit"}
        onChange={handleChangeMethod}
      />
      <Grid container spacing={4}>
        <Grid item md={5}>
          <StyledLabel className="font-regular">First Name</StyledLabel>
          <StyledCard sx={{ py: 1, px: 2 }}>
            <TextField
              fullWidth
              placeholder="First Name"
              InputProps={{ disableUnderline: true }}
              variant="standard"
              className="font-regular"
            />
          </StyledCard>
        </Grid>
        <Grid item md={5}>
          <StyledLabel className="font-regular">Last Name</StyledLabel>
          <StyledCard sx={{ py: 1, px: 2 }}>
            <TextField
              fullWidth
              placeholder="Last Name"
              InputProps={{ disableUnderline: true }}
              variant="standard"
              className="font-regular"
            />
          </StyledCard>
        </Grid>
        <Grid item md={10}>
          <StyledLabel className="font-regular">Card Number</StyledLabel>
          <StyledCard sx={{ py: 1, px: 2 }}>
            <TextField
              fullWidth
              InputProps={{ disableUnderline: true }}
              variant="standard"
              className="font-regular"
            />
          </StyledCard>
        </Grid>
        <Grid item md={5}>
          <StyledLabel className="font-regular">Expiration Date</StyledLabel>
          <StyledCard sx={{ py: 1, px: 2 }}>
            <TextField
              fullWidth
              InputProps={{ disableUnderline: true }}
              variant="standard"
              className="font-regular"
            />
          </StyledCard>
        </Grid>
        <Grid item md={5}>
          <StyledLabel className="font-regular">Security Code</StyledLabel>
          <StyledCard sx={{ py: 1, px: 2 }}>
            <TextField
              fullWidth
              InputProps={{ disableUnderline: true }}
              variant="standard"
              className="font-regular"
            />
          </StyledCard>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <FormControlLabel
        value="paypal"
        control={<Radio color="success" />}
        label={
          <Box display="flex" alignItems="center" width="100%">
            PayPal{"  "}
            <StyledCard sx={{ px: 3, py: 1.5, mx: 2, display: "flex" }}>
              <img src={Paypal} alt="credit" />
            </StyledCard>
          </Box>
        }
        checked={method === "paypal"}
        onChange={handleChangeMethod}
      />
    </>
  );
}
