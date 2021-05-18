require('dotenv').config()
const knex = require("../database");
const { v4: uuidv4 } = require('uuid');

module.exports = {
    async new(req, res, next) {
        const Data = req.body
        const uidpedido = uuidv4()
        const codCarinho = uuidv4()
        const codPagamento = uuidv4()

        // console.log(Data)


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
            console.log(parseFloat(Data.produtos[i].value.replace(/[^\d.-]/g, '')))
            ValorCarrinho += parseFloat(Data.produtos[i].value.replace(/[^\d.-]/g, ''))
        }


        const pagamento = `
        INSERT INTO pagamento (Cod_Pagamento, Cartao_Nome, Cartao_CPF, Cartao_Numero, CPF_Cliente)
        VALUES ('${codPagamento}', '${Data.Cartao_Nome}', '${Data.Cartao_CPF}', '${Data.Cartao_Numero}', '${Data.CPF_Cliente}');
        `

        const getEntregadores = await knex.raw("SELECT * from entregador");
        const entregador = getEntregadores.rows[Math.floor(Math.random() * getEntregadores.rows.length)]
        const getEntregador = await knex.raw(`SELECT * from entregador_carteira WHERE CPF_entregador = '${entregador.cpf_entregador}'`);

        const taxaDeEntrega = Data.produtos.length
        const taxaFrete = taxaDeEntrega * 2

        const carteiraEntregado = `
        UPDATE entregador_carteira
        SET Total_Frete = '${parseFloat(getEntregador.rows[0].total_frete.replace(/[^\d.-]/g, ''))  + parseFloat(taxaFrete)}', Total_Gorjeta = '${parseFloat(getEntregador.rows[0].total_gorjeta.replace(/[^\d.-]/g, '')) + parseFloat(Data.gorjeta)}', Taxa_Recebida = '${parseFloat(getEntregador.rows[0].taxa_recebida.replace(/[^\d.-]/g, '')) + parseFloat(taxaDeEntrega)}'
        WHERE cpf_entregador = '${getEntregador.rows[0].cpf_entregador}';
        `
        const taxas = await knex.raw("SELECT * from taxa WHERE cod_taxa = 'Taxa Padrao' ");

        const date = new Date()
        var dateEntrega = new Date()
        dateEntrega.setSeconds(dateEntrega.getSeconds() + 9.58)

        console.log(Math.floor(dateEntrega / 1000))

        const pedido = `
        UPDATE pedido
        SET
        Numero_Total_itens = '${Data.produtos.length}',
        Valor_Gorjeta = '${Data.gorjeta}',
        Valor_Total_Carrinho = '${ValorCarrinho}',
        Valor_Entregador = '${taxaDeEntrega}',
        Valor_Frete = '${taxaFrete}',
        Status = 'Ativo',
        Data_Entrega = '${dateEntrega.toISOString()}',
        Data_Compra = '${date.toISOString()}',
        CPF_Cliente = '${Data.CPF_Cliente}',
        CPF_Entregador = '${getEntregador.rows[0].cpf_entregador}',
        Endereco_Entrega = '${Data.cod_endereco}',
        Supermercado = '${Data.market}',
        Cod_Pagamento = '${codPagamento}',
        Taxas = '${parseFloat(taxas.rows[0].valor_do_app.replace(/[^\d.-]/g, '')) }',
        Carrinho = '${codCarinho}'
        WHERE cod_pedido = '${uidpedido}';
        `
        const query = criarPedido + carrinho + prdsCart + pagamento + carteiraEntregado + pedido
        // console.log(query)
        
		try {
			const results = await knex.raw(query);
			return res.json("");
		} catch (error) {
			console.log(error);
		}
	}
}