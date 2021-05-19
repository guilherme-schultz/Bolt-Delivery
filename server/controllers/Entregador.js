require('dotenv').config()
const knex = require("../database");

module.exports = {
    async index(req, res, next) {
		const { nameById } = req.params

		const query = `
        select *
        from entregador e, usuario u
        where e.cpf_entregador = u.cpf
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);

		} catch (error) {
			next(error);
		}
	},

	async stats(req, res, next) {

        const { nameById } = req.params

		const query = `
        select *
        from entregador e, entregador_carteira ec, usuario u
        where e.cpf_entregador = ec.cpf_entregador and e.cpf_entregador = '${nameById}' and u.cpf = e.cpf_entregador
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);

		} catch (error) {
			next(error);
		}
	},

    async statsH(req, res, next) {
		const { cpf } = req.params

		const query = `
        select *
        from entregador e, usuario u, pedido p
        where e.cpf_entregador = '${cpf}' and e.cpf_entregador = u.cpf and p.CPF_Entregador = u.cpf
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);

		} catch (error) {
			next(error);
		}
	}
}