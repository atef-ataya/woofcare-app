import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import Routes from "./routes/Routes";
import "date-fns";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

const theme = createTheme({
  palette: {
    primary: {
      main: "#DDF96F",
    },
    secondary: {
      main: "#F1F5F9",
    },
    success: {
      main: "#0F172A",
    },
  },
  typography: {
    button: {
      textTransform: "capitalize",
      padding: "5px auto",
    },
    color: "#0F172A",
    fontFamily: "*",
  },
  mixins: {
    toolbar: {},
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#8bc34a",
      },
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        backgroundColor: "white",
        color: "#1b5e20",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
