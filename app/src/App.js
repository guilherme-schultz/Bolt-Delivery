import React, { useEffect } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

import MenuBar from "./componets/MenuBar/MenuBar"
import Routes from "./routes"

const App = () => {
	
	// #203B57
	// #7AF8FA
	// #00C997
	// #FFEEBA
	// #FF846B

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

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem('cart'))
		if (!cart) {
			localStorage.setItem('cart', JSON.stringify([]));
		}
	}, []);



	return (
		<ThemeProvider theme={theme}>
			<MenuBar />
			<Routes />
		</ThemeProvider>
	);
}

export default App;
