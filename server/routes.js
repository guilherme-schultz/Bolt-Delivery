const express = require("express");
const routes = express.Router();

const Produtos = require("./controllers/Products");
const Markets = require("./controllers/Markets");

routes.get("/produtos", Produtos.index);
routes.get("/produtos/:id", Produtos.byId);


routes.get("/mercados", Markets.index);
routes.get("/mercados/produtos/:market", Markets.byMarket);

module.exports = routes;