require('dotenv').config()
const knex = require("../database");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async index(req, res, next) {
		try {
			const results = await knex.raw("SELECT * FROM produto");
			return res.json(results);
		} catch (error) {
			next(error);
		}
	},

	// async create(req, res, next) {
	// 	const { id } = req.params
	
	// 	const query = `
	// 	select * 
	// 	from produto_supermercado ps, supermercado s, produto p
	// 	where s.cod_supermercado = ps.supermercado and ps.produto = p.cod_produto and ps.supermercado = s.cod_supermercado and p.cod_produto = '${id}'
	// 	`
	// 	try {
	// 		const results = await knex.raw(query);
	// 		console.log(results)
	// 		return res.json(results);
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// },

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
	},

	async byMarketId(req, res, next) {
		const { market, id } = req.params

		const query = `
		select * 
		from produto_supermercado ps, supermercado s, produto p
		where s.cod_supermercado = ps.supermercado and ps.produto = p.cod_produto and ps.supermercado = s.cod_supermercado and s.cod_supermercado = '${market}' and p.cod_produto = '${id}'
		`
		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {
			next(error);
		}
	},
	
	async create(req, res, next) {
		const productData = req.body
		const uidCorredor = uuidv4()
		
		if (productData.codCorredor === "") {
			productData.codCorredo = null
		}

		const query = `
		INSERT INTO produto (Cod_Produto, Nome, Descricao, Foto, Unidade_De_Medida, Cod_Corredor)
		VALUES ('${uidCorredor}', '${productData.name}','${productData.desc}', '${productData.photo}', '${productData.und}', '${productData.codCorredor}');
		`
		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {
			console.log(error)
		}
	},

	async market(req, res, next) {
		const productData = req.body
		const uidCorredor = uuidv4()

		if (productData.codCorredor === "") {
			productData.codCorredo = null
		}

		console.log(productData)

		const query = `
		INSERT INTO produto_supermercado (Valor_Unitario, Supermercado, Produto)
		VALUES ('${productData.valor}', '${productData.cod_supermercado}','${productData.cod_produto}');
		`

		try {
			const results = await knex.raw(query);
			res.status(201);
			return res.json(results);
		} catch (error) {
			console.log(error)
		}
	}
}