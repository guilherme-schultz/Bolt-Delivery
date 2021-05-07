require('dotenv').config()
const knex = require("../database");

module.exports = {
    async index(req, res, next) {
		try {
			// const results = await knex("produto");
			const results = await knex.raw("SELECT * FROM produto");
			return res.json(results);
		} catch (error) {
			next(error);
		}
	}
}