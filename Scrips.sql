
INSERT INTO usuario (CPF, Email, Senha, Celular, Nome, tipo) 
VALUES ('1235548950', 'renan@renan.renan', 'QueroVerMehacker', '0313131313', 'Kleberson', 0);

INSERT INTO cliente (Idade, Sexo, CPF_cliente)
VALUES (150, 'Homen', '1235548950');

INSERT INTO entregador (CPF_entregador)
VALUES ('1235548950');

INSERT INTO entregador_carteira (CPF_entregador, taxa_recebida)
VALUES ('1235548950', '12.34');

UPDATE entregador_carteira
SET taxa_recebida = '12.34'
WHERE CPF_entregador = '1235548950';

INSERT INTO supermercado (Nome_supermercado, Cod_supermercado, Responsavel)
VALUES ('Armandinho', 'Armandinho', '1235548950');

INSERT INTO pagamento (Cartao_Nome, Cartao_CPF, Cartao_Numero, Tipo, CPF_Cliente)
VALUES ('Bolt Bank', '1235548950', '13213213213', 'Credito', '1235548950');


INSERT INTO taxa (Cod_Taxa, Valor_Por_Item, Valor_Por_KM, valor_do_app)
VALUES ('Taxa Padrao', '1.00', '2.00', '50000.00');

INSERT INTO corredor (Cod_Corredor, nome_corredor)
VALUES ('asd', 'Ronaldo da Costa');

INSERT INTO produto (Cod_Produto, Nome, Descricao,Foto,Unidade_De_Medida)
VALUES ('maminhaToip', 'maminha','Vai fazer vc ficar top', 'link da foto', 'levis');

INSERT INTO promocao (Cod_Promocao,Data_Inicio ,Data_Fim, Supermercado)
VALUES ('Promocao de Maminhas', '2021-04-24 18:00:00','2021-04-30 19:00:00', 'Armandinho');

INSERT INTO produto_supermercado (Valor_Unitario, Supermercado, Produto)
VALUES ('20.1', 'Armandinho','maminhaToip');

INSERT INTO produto_promocao (Valor_Desconto, Tipo, Produto, Promocao)
VALUES ('20', True, 'maminhaToip','Promocao de Maminhas');




----- ENDEREÇO 
INSERT INTO endereco (Cod_Endereco, CEP, Rua, Bairro,Numero,Complemento,Estado,Cidade,Pais,geocode)
VALUES ('oitudobem' ,36570000, 'Rua top', 'Bairro top', '1321', '', 'MG', 'viciosa', 'viciosa', 'lat: 121212, log: 1212');

INSERT INTO endereco (Cod_Endereco, CEP, Rua, Bairro,Numero,Complemento,Estado,Cidade,Pais,geocode)
VALUES ('o' ,36570000, 'Rua do mercad0', 'Bairro top', '1321', '', 'MG', 'viciosa', 'viciosa', 'lat: 121212, log: 1212');


INSERT INTO endereco_usuario (Cod_Endereco, CPF_Usuario)
VALUES ('oitudobem', '1235548950');

INSERT INTO endereco_supermercado (Cod_Endereco, Cod_Supermercado)
VALUES ('o', 'Armandinho');

-----


INSERT INTO carrinho (Cod_Carrinho, Status, Observacao)
VALUES ('asdasdasdsadasdasd', 'Ativo', 'Escolhe uma boa ai');


INSERT INTO Produto_Carrinho (Quantidade, Valor,Produto, Carrinho)
VALUES ('10', '20.1', 'maminhaToip', 'asdasdasdsadasdasd');


INSERT INTO pedido (Cod_Pedido,
	Numero_Total_itens,
	Valor_Gorjeta,
	Valor_Total_Carrinho,
	Valor_Entregador,
	Valor_Frete,
	Status,
	Data_Entrega,
	Data_Compra,
	CPF_Cliente,
	CPF_Entregador,
	Endereco_Entrega,
	Supermercado,
	Pagamento,
	Taxas,
	Carrinho)
VALUES ('654fd65as4f654as64', '1', '100', '200000', '20', '520', 'Entrega', '2021-04-24 18:00:00', '2021-04-24 18:09:58',
'1235548950', '1235548950', 'oitudobem', 'Armandinho', 2, 'Taxa Padrao', 'asdasdasdsadasdasd' );







