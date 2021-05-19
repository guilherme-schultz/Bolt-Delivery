require('dotenv').config()
const knex = require("../database");

module.exports = {

    async index(req, res, next) {

		const query = `
        select * from pedido p, usuario u
        where p.cpf_cliente = u.cpf
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);

		} catch (error) {
			next(error);
		}
	},

	async byEntregador(req, res, next) {
		const { cpf } = req.params

		const query = `
        select * from pedido p, entreador e
        where e.cpf_entregador = p.CPF_Entregador and
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);

		} catch (error) {
			next(error);
		}
	},

	async top(req, res, next) {

		const query = `
		select count(c.cpf_cliente), p.cpf_cliente
		from pedido p, cliente c
		where p.cpf_cliente = c.cpf_cliente
		group by p.cpf_cliente		
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);

		} catch (error) {
			next(error);
		}
	}
}
