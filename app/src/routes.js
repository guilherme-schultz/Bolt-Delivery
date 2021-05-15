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

import ProductNew from "./pages/ProductNew/ProductNew"
import MarketProduct from "./pages/MarketProduct/MarketProduct"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={StartPage} path="/" exact />
            <Route component={ProductPage} path="/produto" />
            <Route component={LoginPage} path="/login" />
            <Route component={SignUp} path="/cadastro" exact/>
            <Route component={SignUpAdress} path="/cadastro/endereco" exact />
            <Route component={SignUpAdressMarket} path="/cadastro/endereco/mercado" exact />
            <Route component={MarketPage} path="/mercados" exact/>
            <Route component={ProductList} path="/produtos" exact/>

            <Route component={ProductNew} path="/novo/produto" />
            <Route component={MarketProduct} path="/novo/produto/mercado" exact />
        </BrowserRouter>
    )
}


export default Routes