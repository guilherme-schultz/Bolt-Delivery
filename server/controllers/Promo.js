require('dotenv').config()
const knex = require("../database");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async new(req, res, next) {
        const promoData = req.body
        const uidpromo = uuidv4()

        const blackFriday = (min, max) => {
            return Math.random() * (max - min) + min;
        }

        if (promoData.isBlackFriday) {
            promoData.valor = blackFriday(parseFloat(promoData.valor), parseFloat(promoData.valor) * 2)
        }

        if (promoData.tipo === "%") {
            promoData.tipo = true
        }

        const query = `
        INSERT INTO promocao (Cod_Promocao, Data_Inicio, Data_Fim, Supermercado, Black_friday)
        VALUES ('${uidpromo}', '${promoData.Data_Inicio}','${promoData.Data_Fim}', '${promoData.cod_supermercado}', '${promoData.isBlackFriday}');

        INSERT INTO produto_promocao (Valor_Desconto, Tipo, Produto, Promocao, Supermercado)
        VALUES ('${promoData.valor}', '${promoData.tipo}', '${promoData.cod_produto}','${uidpromo}', '${promoData.cod_supermercado}');
        `

		try {
			const results = await knex.raw(query);
			return res.json("");
		} catch (error) {
			console.log(error);
		}
	},


    async activePromo(req, res, next) {

        const query = `
        select *
        from promocao p
        where p.data_fim > CURRENT_TIMESTAMP;
        `

		try {
			const results = await knex.raw(query);
			return res.json("");
		} catch (error) {
			console.log(error);
		}
	}
}