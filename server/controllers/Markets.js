require('dotenv').config()
const knex = require("../database");

module.exports = {
    async index(req, res, next) {
		try {
			const results = await knex.raw("SELECT * FROM supermercado");
			return res.json(results);
		} catch (error) {
			next(error);
		}
	},

	async byMarket(req, res, next) {
		const { market } = req.params

		const query = `
		select * 
		from produto_supermercado ps, supermercado s, produto p
		where s.cod_supermercado = '${market}' and ps.produto = p.cod_produto and ps.supermercado = s.cod_supermercado
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {
			next(error);
		}
	}



}
