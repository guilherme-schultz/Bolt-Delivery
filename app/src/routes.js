import React from "react"
import { Route, BrowserRouter} from "react-router-dom"

import StartPage from "./pages/StartPage/StartPage"
import ProductPage from "./pages/ProductPage/ProductPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import SignUp from "./pages/SignUp/SignUp"
import SignUpAdress from "./pages/SignUpAdress/SignUpAdress"
import SignUpAdressMarket from "./pages/SignUpAdressMarket/SignUpAdressMarket"
import MarketPage from "./pages/MarketPage/MarketPage"
import ProductList from "./pages/ProductList/ProductList"


const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={StartPage} path="/" exact />
            <Route component={ProductPage} path="/produto" />
            <Route component={LoginPage} path="/login" />
            <Route component={SignUp} path="/cadastro" />
            <Route component={SignUpAdress} path="/cadastroEndereco" />
            <Route component={MarketPage} path="/mercados" />
            <Route component={ProductList} path="/produtos" />
            <Route component={SignUpAdressMarket} path="/cadastroEnderecoMercado" />
    

        </BrowserRouter>
    )
}


export default Routes