import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import Routes from "./routes"

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#203B57"
      },
      secondary: {
        main: "#00B937"
      }
    }
  })

// #203B57
// #7AF8FA
// #00C997
// #FFEEBA
// #FF846B

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
