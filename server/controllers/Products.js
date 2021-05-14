require('dotenv').config()
const knex = require("../database");

module.exports = {
    async index(req, res, next) {
		try {
			const results = await knex.raw("SELECT * FROM produto");
			return res.json(results);
		} catch (error) {
			next(error);
		}
	},

	async create(req, res, next) {
		const { id } = req.params
		// .replace(/[^a-zA-Z]/g, "")
		const query = `
		select * 
		from produto_supermercado ps, supermercado s, produto p
		where s.cod_supermercado = ps.supermercado and ps.produto = p.cod_produto and ps.supermercado = s.cod_supermercado and p.cod_produto = '${id}'
		`
		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {
			next(error);
		}
	},

	async byId(req, res, next) {
		const { id } = req.params

		const query = `
		select * 
		from produto_supermercado ps, supermercado s, produto p
		where s.cod_supermercado = ps.supermercado and ps.produto = p.cod_produto and ps.supermercado = s.cod_supermercado and p.cod_produto = '${id}'
		`
		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {
			next(error);
		}
	}
}