const express = require("express");
const routes = express.Router();

const User = require("./controllers/Users");
const Adress = require("./controllers/Adress");
const Produtos = require("./controllers/Products");
const Markets = require("./controllers/Markets");
const Corredor = require("./controllers/Corredor");
const Promo = require("./controllers/Promo");


routes.post("/user", User.create);

routes.post("/promo/new", Promo.new);

routes.get("/corredor", Corredor.index);
routes.post("/corredor/:nome", Corredor.create);

routes.post("/adress", Adress.create);
routes.post("/adress/market", Adress.createMarket);

routes.get("/produtos", Produtos.index);
routes.get("/produtos/:id", Produtos.byId);
routes.get("/produtos/:market/:id", Produtos.byMarketId);

routes.post("/produtos/create", Produtos.create);
routes.post("/produtos/market", Produtos.market);

routes.get("/mercados", Markets.index);
routes.get("/mercados/name/:nameById", Markets.nameById);
routes.get("/mercados/produtos/:market", Markets.byMarket);

module.exports = routes;