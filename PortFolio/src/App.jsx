import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./Styles/Theme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Router";
import {CssBaseline} from "@mui/material"
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

export default App;
