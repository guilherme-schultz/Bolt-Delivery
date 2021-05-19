require('dotenv').config()
const knex = require("../database");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async index(req, res, next) {
		try {
			const results = await knex.raw("SELECT * FROM corredor");
			return res.json(results);
		} catch (error) {
			next(error);
		}
	},

	async create(req, res, next) {
		const { nome } = req.params
		const uidCorredor = uuidv4()
		
		const query = `
		INSERT INTO corredor (Cod_Corredor, nome_corredor)
		VALUES ('${uidCorredor}', '${nome}');
		`
		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {
			next(error);
		}
	},

	async topSales(req, res, next) {
		const { nome } = req.params
		
		const query = `
		select *
		from pedido p, produto_carrinho pc, produto p2, corredor c 
		where p.carrinho = pc.carrinho and pc.produto = p2.cod_produto and c.cod_corredor = p2.Cod_Corredor and c.nome_corredor = '${nome}'
		order by pc.quantidade desc
		`
		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {
			next(error);
		}
	}
}