import React from "react"
import { Route, BrowserRouter} from "react-router-dom"

import StartPage from "./pages/StartPage/StartPage"
import ProductPage from "./pages/ProductPage/ProductPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignUp from "./pages/SignUp/SignUp"
import MarketPage from "./pages/MarketPage/MarketPage"
import ProductList from "./pages/ProductList/ProductList"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={StartPage} path="/" exact />
            <Route component={ProductPage} path="/produto" />
            <Route component={LoginPage} path="/login" />
            <Route component={SignUp} path="/cadastro" />
            <Route component={MarketPage} path="/mercado" />
            <Route component={ProductList} path="/produtos" />

        </BrowserRouter>
    )
}


export default Routes