import React from "react"
import { Route, BrowserRouter} from "react-router-dom"

import StartPage from "./pages/StartPage/StartPage"
import ProductPage from "./pages/ProductPage/ProductPage"
// import LoginPage from "./pages/LoginPage/LoginPage"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={StartPage} path="/" exact />
            <Route component={ProductPage} path="/produto" />
        </BrowserRouter>
    )
}


export default Routes