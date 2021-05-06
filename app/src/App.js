import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Routes from "./routes"

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff8e1"
      },
      secondary: {
        main: "#00B937"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
