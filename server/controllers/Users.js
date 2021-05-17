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

        INSERT INTO entregador_carteira (CPF_entregador, Total_Frete, Total_Gorjeta, Taxa_Recebida)
        VALUES ('${userData.cpf}', 0, 0, 0);
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
	},

	async index(req, res, next) {
		
		try {
			const results = await knex.raw("select * from usuario");
			return res.json(results);
		} catch (error) {
			next(error);
		}
	},

    async byEmail(req, res, next) {
		const { email } = req.params

		const query = `
		select * 
		from usuario u
		where u.email = '${email}'
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);

		} catch (error) {
			next(error);
		}
	}
}