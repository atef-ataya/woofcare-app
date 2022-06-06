import React, { useState } from "react";
import { Box, createTheme, ThemeProvider, Typography } from "@mui/material";
import { StyledPickers } from "../styles";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F172A",
    },
  },
});

export default function Duration() {
  const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StyledPickers className="font-semibold">
          <div>
            <Typography className="font-light">From</Typography>
            <Box sx={{ borderRadius: "5px 0px 0px 5px" }}>
              <DateTimePicker
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField fullWidth variant="standard" {...params} />
                )}
              />
            </Box>
          </div>
          <div>
            <Typography className="font-light">To</Typography>
            <Box sx={{ borderRadius: "0px 5px 5px 0px" }}>
              <DateTimePicker
                value={value}
                onChange={handleChange}
                renderInput={(params) => (
                  <TextField fullWidth variant="standard" {...params} />
                )}
              />
            </Box>
          </div>
        </StyledPickers>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
