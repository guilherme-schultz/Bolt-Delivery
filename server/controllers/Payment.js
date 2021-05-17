require('dotenv').config()
const knex = require("../database");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async new(req, res, next) {
        const Data = req.body
        const uidpedido = uuidv4()
        const codCarinho = uuidv4()
        const codPagamento = uuidv4()


        const criarPedido = `
        INSERT INTO pedido (Cod_Pedido) VALUES ('${uidpedido}');
        `

        const carrinho = `
        INSERT INTO carrinho (Cod_Carrinho, Status, Observacao, Cod_Pedido)
        VALUES ('${codCarinho}', 'Ativo', '${Data.OBS}', '${uidpedido}');
        `

        var ValorCarrinho = 0
    
        var prdsCart = ""    
        for (i = 0; i < Data.produtos.length; i++) {
            prdsCart = prdsCart + `
            INSERT INTO Produto_Carrinho (Quantidade, Valor, Produto, Carrinho)
            VALUES ('${Data.produtos[i].qtd}', '${Data.produtos[i].value}', '${Data.produtos[i].productId}', '${codCarinho}');
            `

            ValorCarrinho += parseFloat(Data.produtos[i].value)
        }


        const pagamento = `
        INSERT INTO pagamento (Cartao_Nome, Cartao_CPF, Cartao_Numero, CPF_Cliente)
        VALUES ('${Data.Cartao_Nome}', '${Data.Cartao_CPF}', '${Data.Cartao_Numero}', '${Data.CPF_Cliente}', '${codPagamento}');
        `

        const getEntregadores = await knex.raw("SELECT * from entregador");
        const entregador = getEntregadores.rows[Math.floor(Math.random() * getEntregadores.rows.length)]
        const getEntregador = await knex.raw(`SELECT * from entregador_carteira WHERE CPF_entregador = '${entregador.cpf_entregador}'`);

        const taxaDeEntrega = Data.produtos.length
        const taxaFrete = taxaDeEntrega * 2

        const carteiraEntregado = `
        UPDATE entregador_carteira
        SET Total_Frete = '${getEntregador.rows[0].total_frete + taxaFrete}', Total_Gorjeta = '${getEntregador.rows[0].total_gorjeta + Data.gorjeta}', Taxa_Recebida = '${getEntregador.rows[0].taxa_recebida + taxaDeEntrega}'
        WHERE cpf_entregador = '${getEntregador.rows[0].cpf_entregador}';
        `
        const taxas = await knex.raw("SELECT * from taxa WHERE cod_taxa = 'Taxa Padrao' ");

        const date = new Date()
        var dateEntrega = new Date()
        dateEntrega.setSeconds(dateEntrega.getSeconds() + 9.58)

        const pedido = `
        UPDATE pedido
        SET
        Numero_Total_itens = '${Data.produtos.length}',
        Valor_Gorjeta = '${Data.gorjeta}',
        Valor_Total_Carrinho = '${ValorCarrinho}',
        Valor_Entregador = '${taxaDeEntrega}',
        Valor_Frete = '${taxaFrete}',
        Status = 'Ativo',
        Data_Entrega = '${dateEntrega}', 
        Data_Compra = '${date}',
        CPF_Cliente = '${Data.CPF_Cliente}',
        CPF_Entregador = '${getEntregador.rows[0].cpf_entregador}',
        Endereco_Entrega = '${Data.cod_endereco}',
        Supermercado = '${Data.market}',
        Cod_Pag = '${codPagamento}',
        Taxas = '${taxas.rows[0].valor_do_app}',
        Carrinho = '${codCarinho}'
        WHERE cod_pedido = '${uidpedido}';
        `
        const query = criarPedido + carrinho + prdsCart + pagamento + carteiraEntregado + pedido
        console.log(query)
        
		try {
			const results = await knex.raw(query);
            console.log(results)
			return res.json("");
		} catch (error) {
			console.log(error);
		}
	}
}