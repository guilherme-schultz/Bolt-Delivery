require('dotenv').config()
const knex = require("../database");

module.exports = {
    async create(req, res, next) {
        
        const userData = req.body

        if (userData.tipo === "Cliente") {
            userData.tipo = 0
        } else if (userData.tipo === "Entregador") {
            userData.tipo = 1
        } else {
            userData.tipo = 2
        }

        var query = `
        INSERT INTO usuario (CPF, Email, Senha, Celular, Nome, tipo) 
        VALUES ('${userData.cpf}', '${userData.email}', '${userData.senha}', '${userData.celular}', '${userData.nome}', '${userData.tipo}');
        `

        const cliente = 
        `INSERT INTO cliente (idade, sexo, cpf_cliente) 
        VALUES ('${userData.idade}', '${userData.sexo}', '${userData.cpf}');
        `

        const entregador = 
        `INSERT INTO entregador (cpf_entregador, foto) 
        VALUES ('${userData.cpf}', '${userData.foto}');
        `

        const supermercado = 
        `INSERT INTO supermercado (cod_supermercado, nome_supermercado, responsavel, foto) 
        VALUES ('${userData.nomeMercado.replace(/[^a-zA-Z]/g, "")}', '${userData.nomeMercado}', '${userData.cpf}', '${userData.foto}');
        `

        if (userData.tipo === 0) {
            query = query + cliente
        }

        if (userData.tipo === 1) {
            query = query + entregador
        }

        if (userData.tipo === 2) {
            query = query + supermercado
        }

		try {
			const results = await knex.raw(query);

            if (userData.tipo === 2) {
                res.setHeader("marketId", userData.nomeMercado.replace(/[^a-zA-Z]/g, ""))
                console.log(userData.nomeMercado.replace(/[^a-zA-Z]/g, ""))
                console.log(res)
                return res.json(userData.nomeMercado.replace(/[^a-zA-Z]/g, ""));
            }

			return res.json(results);
		} catch (error) {

			console.log(error);
            return res.status(400).send({
                message: 'Erro ao criar usuarios'
            });
		}
	}

	// async byId(req, res, next) {
	// 	const { id } = req.params
	// 	console.log(id)
	// 	const query = `
	// 	select * 
	// 	from produto_supermercado ps, supermercado s, produto p
	// 	where s.cod_supermercado = ps.supermercado and ps.produto = p.cod_produto and ps.supermercado = s.cod_supermercado and p.cod_produto = '${id}'
	// 	`
	// 	try {
	// 		const results = await knex.raw(query);
	// 		return res.json(results);
	// 	} catch (error) {
	// 		next(error);
	// 	}
	// }
}