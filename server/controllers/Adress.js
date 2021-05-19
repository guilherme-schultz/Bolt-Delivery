require('dotenv').config()
const { v4: uuidv4 } = require('uuid');

const knex = require("../database");

module.exports = {
    async create(req, res, next) {
        
        const adressData = req.body
        const uidAdress = uuidv4()

        var query = `
        INSERT INTO endereco (Cod_Endereco, apelido, CEP, Rua, Bairro, Numero, Complemento, Estado, Cidade, Pais, geocode)
        VALUES ('${uidAdress}' , '${adressData.apelido}',  ${adressData.cep}, '${adressData.endereco}', '${adressData.bairro}', '${adressData.numero}', '${adressData.complemento}', '${adressData.estado}', '${adressData.cidade}', '${adressData.pais}', '${adressData.geocode}');

        INSERT INTO endereco_usuario (Cod_Endereco, CPF_Usuario)
        VALUES ('${uidAdress}', '${adressData.cpf}');
        `

		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {

			console.log(error);
            return res.status(400).send({
                message: 'Erro ao criar usuarios'
            });
		}
	},

    async createMarket(req, res, next) {
        
        const adressMarketData = req.body
        const uidAdress = uuidv4()

        console.log(adressMarketData)

        var query = `
        INSERT INTO endereco (Cod_Endereco, apelido, CEP, Rua, Bairro, Numero, Complemento, Estado, Cidade, Pais, geocode)
        VALUES ('${uidAdress}' , '${adressMarketData.apelido}',  ${adressMarketData.cep}, '${adressMarketData.endereco}', '${adressMarketData.bairro}', '${adressMarketData.numero}', '${adressMarketData.complemento}', '${adressMarketData.estado}', '${adressMarketData.cidade}', '${adressMarketData.pais}', '${adressMarketData.geocode}');

        INSERT INTO endereco_supermercado (Cod_Endereco, Cod_Supermercado)
        VALUES ('${uidAdress}', '${adressMarketData.marketID}');
        `

		try {
			const results = await knex.raw(query);
			return res.json(results);
		} catch (error) {
			console.log(error);
		}
	},

    async byUser(req, res, next) {
		const { userId } = req.params

		const query = `
		select * 
		from endereco_usuario eu, endereco e
		where eu.cpf_usuario = '${userId}' and eu.cod_endereco = e.cod_endereco;
		`

		try {
			const results = await knex.raw(query);
			return res.json(results);

		} catch (error) {
			console.log(error);
		}
	}

}