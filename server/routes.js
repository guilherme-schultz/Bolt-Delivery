const express = require("express");
const routes = express.Router();

const Produtos = require("./controllers/Products");

routes.get("/produtos", Produtos.index);

module.exports = routes;