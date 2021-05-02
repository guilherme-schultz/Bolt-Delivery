import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

//import StartPage from "./pages/StartPage/StartPage"
import ProductPage from "./pages/ProductPage/ProductPage"

function App() {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#fff8e1"
      },
      secondary: {
        main: "#f1f8e9"
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      < ProductPage />
    </ThemeProvider>
  );
}

export default App;
