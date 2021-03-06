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
// import MarketProduct from "./pages/MarketProduct/MarketProduct"


import AdminPage from "./pages/AdminPage/AdminPage"
import CartPage from "./pages/CartPage/CartPage"
import PaymentPage from "./pages/PaymentPage/PaymentPage"

import Login from "./pages/Login/Login"

import PedidoClient from "./pages/PedidoClient/PedidoClient"
import MarketFin from "./pages/MarketFin/MarketFin"
import TopSales from "./pages/TopSales/TopSales"
import PedidoClienteTop from "./pages/PedidoClienteTop/PedidoClienteTop"
import Entregador from "./pages/Entregador/Entregador"

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={StartPage} path="/" exact />
            <Route component={ProductPage} path="/produto" />
            <Route component={Login} path="/login" />
            <Route component={SignUp} path="/cadastro" exact/>
            <Route component={SignUpAdress} path="/cadastro/endereco" exact />
            <Route component={SignUpAdressMarket} path="/cadastro/endereco/mercado" exact />
            <Route component={MarketPage} path="/mercados" exact/>
            <Route component={ProductList} path="/produtos"/>

            <Route component={ProductNew} path="/novo/produto" />
            <Route component={AdminPage} path="/admin" />

            <Route component={CartPage} path="/carrinho" />
            <Route component={PaymentPage} path="/pagamento" />
            <Route component={PedidoClient} path="/pedidos" exact/>
            <Route component={MarketFin} path="/mercado/fin" exact/>
            <Route component={TopSales} path="/corredores/top" exact/>

            <Route component={PedidoClienteTop} path="/pedidos/top" exact/>
            <Route component={Entregador} path="/entregadores" exact/>
        </BrowserRouter>
    )
}


export default Routes