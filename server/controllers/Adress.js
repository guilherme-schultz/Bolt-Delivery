require('dotenv').config()
const { v4: uuidv4 } = require('uuid');

const knex = require("../database");

module.exports = {
    async create(req, res, next) {
        
        const adressData = req.body
        const uidAdress = uuidv4()

        console.log(adressData)

        var query = `
        INSERT INTO endereco (Cod_Endereco, apelido, CEP, Rua, Bairro, Numero, Complemento, Estado, Cidade, Pais, geocode)
        VALUES ('${uidAdress}' , '${adressData.apelido}',  ${adressData.cep}, '${adressData.endereco}', '${adressData.bairro}', '${adressData.numero}', '${adressData.complemento}', '${adressData.estado}', '${adressData.cidade}', '${adressData.pais}', '${adressData.geocode}');

        INSERT INTO endereco_usuario (Cod_Endereco, CPF_Usuario)
        VALUES ('${uidAdress}', '${adressData.cpf}');
        `


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