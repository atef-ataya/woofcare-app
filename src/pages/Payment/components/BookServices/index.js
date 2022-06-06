import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, MenuItem, Select } from "@mui/material";
import { StyledCard } from "../../../../components/Card";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { createTheme, ThemeProvider } from "@mui/material";
import styled from "@emotion/styled";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F172A",
    },
  },
});

const StyledBox = styled(Box)`
  & .MuiOutlinedInput-root {
    background-color: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
  }
`;

export default function BookServices() {
  const [value, setValue] = React.useState(new Date("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box sx={{ mt: 2 }}>
          <label className="font-regular">Service</label>
          <StyledCard sx={{ py: 0, pl: 0, pr: 1 }}>
            <Select
              variant="standard"
              disableUnderline
              className="font-semibold"
              sx={{ width: "100%", py: 1, px: 2 }}
              defaultValue="none"
              IconComponent={KeyboardArrowDown}
            >
              <MenuItem value="none" disabled>
                Select Service
              </MenuItem>
              <MenuItem value="walker">Dog Walker</MenuItem>
              <MenuItem value="sitter">Dog Sitter</MenuItem>
            </Select>
          </StyledCard>
        </Box>
        <StyledBox sx={{ mt: 2 }}>
          <label className="font-regular">From</label>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </StyledBox>
        <StyledBox sx={{ mt: 2 }}>
          <label className="font-regular">To</label>
          <DateTimePicker
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
          />
        </StyledBox>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
