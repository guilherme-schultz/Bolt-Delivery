import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

//import StartPage from "./pages/StartPage/StartPage"
// import ProductPage from "./pages/ProductPage/ProductPage"

import LoginPage from "./pages/LoginPage/LoginPage"

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
      < LoginPage />
    </ThemeProvider>
  );
}

export default App;
