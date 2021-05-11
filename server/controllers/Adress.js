require('dotenv').config()
const knex = require("../database");

module.exports = {
    async create(req, res, next) {
        
        const adressData = req.body
        console.log(userData)

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
        `INSERT INTO supermercado (cod_supermercado, nome_supermercado, responsavel) 
        VALUES ('${encodeURIComponent(userData.nomeMercado)}', '${userData.nomeMercado}', '${userData.cpf}');
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

        console.log(query)

		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {

			console.log(error);
            return res.status(400).send({
                message: 'Erro ao criar usuarios'
            });
		}
	}
}