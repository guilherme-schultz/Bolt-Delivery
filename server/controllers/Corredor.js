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
	}
}