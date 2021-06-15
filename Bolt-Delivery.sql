CREATE TABLE Endereco (
	Cod_Endereco varchar(255) PRIMARY KEY,
	Apelido varchar(255) NOT NULL,
	CEP varchar(255) NOT NULL,
	Rua varchar(255) NOT NULL,
	Bairro varchar(255) NOT NULL,
	Numero varchar(255) NOT NULL,
	Complemento varchar(255),
	Estado varchar(255) NOT NULL,
	Cidade varchar(255) NOT NULL,
	Pais varchar(255) NOT NULL,
	geocode varchar(255) NOT NULL
);

--ALTER TABLE endereco
--ADD Apelido varchar(255);


CREATE TABLE Usuario (
	CPF varchar(255) PRIMARY KEY NOT NULL UNIQUE,
	Email varchar(255) NOT null UNIQUE,
	Senha varchar(255) NOT NULL,
	Celular varchar(255) NOT NULL,
	Nome varchar(255) NOT NULL,
	Tipo Int NOT NULL
);

CREATE TABLE Supermercado (
	Cod_supermercado varchar(255) PRIMARY KEY,
	Nome_supermercado varchar(255) NOT NULL,
	Responsavel varchar(255) REFERENCES Usuario(CPF),
	foto varchar(255)
);

--ALTER TABLE Supermercado
--ADD foto varchar(255);

CREATE TABLE Endereco_Usuario (
	Cod_Endereco varchar(255) REFERENCES Endereco PRIMARY KEY,
	CPF_Usuario varchar(255) REFERENCES Usuario(CPF)
);

CREATE TABLE Endereco_Supermercado (
	Cod_Endereco varchar(255) REFERENCES Endereco,
	Cod_Supermercado varchar(255) REFERENCES Supermercado(Cod_supermercado) PRIMARY KEY
);

CREATE TABLE Cliente (
	Idade Int,
	Sexo varchar(255),
	CPF_Cliente varchar(255) REFERENCES Usuario PRIMARY KEY
);

CREATE TABLE Entregador (
	CPF_Entregador varchar(255) REFERENCES Usuario PRIMARY KEY,
	Foto varchar(255)
);

CREATE TABLE Entregador_Carteira (
	CPF_Entregador varchar(255) REFERENCES Entregador PRIMARY KEY UNIQUE,
	Total_Frete money,
	Total_Gorjeta money,
	Taxa_Recebida money,
	Chave_PIX varchar(255)
);

CREATE TABLE Pagamento (
	Cod_Pagamento varchar(255) PRIMARY KEY UNIQUE,
	Cartao_Nome varchar(255),
	Cartao_Numero varchar(255),
	Cartao_CPF varchar(255),
	CPF_Cliente varchar(255) REFERENCES Cliente(CPF_Cliente)
);

ALTER TABLE Pagamento
ADD Cod_Pag varchar(255) UNIQUE
 
CREATE TABLE Taxa (
	Cod_Taxa varchar(255) PRIMARY KEY UNIQUE,
	Valor_Por_Item money,
	Valor_Por_KM money,
	Valor_Do_APP money
);

CREATE TABLE Corredor (
	Cod_Corredor varchar(255) PRIMARY KEY UNIQUE,
	Nome_Corredor varchar(255)
);

CREATE TABLE Produto (
	Cod_Produto varchar(255) PRIMARY KEY UNIQUE,
	Nome varchar(255),
	Descricao varchar(255),
	Foto varchar(255),
	Unidade_De_Medida varchar(255),
	Cod_Corredor varchar(255) REFERENCES Corredor(Cod_Corredor)
);

--ALTER TABLE Produto
--ADD Cod_Corredor varchar(255) REFERENCES Corredor(Cod_Corredor)

CREATE TABLE Promocao (
	Cod_Promocao varchar(255) PRIMARY KEY UNIQUE,
	Data_Inicio timestamp,
	Data_Fim timestamp,
	Supermercado varchar(255) REFERENCES Supermercado(Cod_supermercado)
);

ALTER TABLE Promocao
ADD black_friday Boolean

CREATE TABLE Produto_Supermercado (
	Valor_Unitario money,
	Supermercado varchar(255) REFERENCES Supermercado(Cod_supermercado),
	Produto varchar(255) REFERENCES Produto(Cod_Produto)
);

CREATE TABLE Produto_Promocao (
	Valor_Desconto float(2),
	Tipo Boolean,
	Produto varchar(255) REFERENCES Produto(Cod_Produto),
	Promocao varchar(255) REFERENCES Promocao(Cod_Promocao)
);

ALTER TABLE Produto_Promocao
ADD Supermercado varchar(255) REFERENCES Supermercado(Cod_supermercado)

CREATE TABLE Carrinho (
	Cod_Carrinho varchar(255) PRIMARY KEY UNIQUE,
	Status varchar(255),
	Observacao varchar(255)
);


CREATE TABLE Produto_Carrinho (
	Quantidade float(2),
	Valor money,
	Produto varchar(255) REFERENCES Produto(Cod_Produto),
	Carrinho varchar(255) REFERENCES Carrinho(Cod_Carrinho)
);

CREATE TABLE Pedido (
	Cod_Pedido varchar(255) PRIMARY KEY UNIQUE,
	Numero_Total_itens Int,
	Valor_Gorjeta money,
	Valor_Total_Carrinho money,
	Valor_Entregador money,
	Valor_Frete money,
	Status varchar(255),
	Data_Entrega timestamp,
	Data_Compra timestamp,
	CPF_Cliente varchar(255) REFERENCES Cliente(CPF_Cliente),
	CPF_Entregador varchar(255) REFERENCES Entregador(CPF_Entregador),
	Endereco_Entrega varchar(255) REFERENCES Endereco_Usuario(Cod_Endereco),
	Supermercado varchar(255) REFERENCES Supermercado(Cod_supermercado),
	Cod_Pagamento varchar(255) REFERENCES Pagamento(Cod_Pagamento),
	Taxas varchar(255),
	Carrinho varchar(255) REFERENCES Carrinho(Cod_Carrinho)
);

ALTER TABLE Carrinho ADD Cod_Pedido varchar(255) REFERENCES Pedido(Cod_Pedido);









