import React, { useState, useEffect } from "react"
import { Paper, Button, ButtonGroup } from '@material-ui/core';

import "./ProductDetails.css"

import ProductSeller from "./ProductSeller/ProductSeller"

const ProductDetails = ({data}) => {
    
    useEffect(() => {
        console.log(data)
    }, [data]);

    const [isItensQtd, setItensQtd] = useState(1);

    const handleIncrement = () => {
        setItensQtd(isItensQtd + 1);
    };

    const handleDecrement = () => {
        if (isItensQtd !== 0) {
            setItensQtd(isItensQtd - 1);
        }
    };

    const [isCartData, setCartData] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            setCartData(JSON.parse(localStorage.getItem('cart')))
        } else {
            localStorage.setItem('cart', JSON.stringify(isCartData));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(isCartData));
        
    }, [isCartData]);

    const handleAddCart = () => {
        var productList = []
        productList.push(isCartData[data.cod_supermercado])
        productList.push({
            productId: data.cod_produto,
            qtd: isItensQtd,
            market: data.cod_supermercado,
            marketName: data.nome_supermercado,
            name: data.nome,
            value: data.valor_unitario,
            foto: data.foto
        })

        console.log(productList)
        

        setCartData((prevState) => {
			return {
				...prevState,
				[data.cod_supermercado]: [data.cod_supermercado].
			}
		})
    }

    return (
        <>
        <Paper>
            <div className="ProductDetails">
                <span className="Product-Name" >{data.nome}<br/></span>
                <span className="Product-Price">R{data.valor_unitario} / {data.unidade_de_medida}<br/></span>
                <span className="Product-Saler" >{data.nome_supermercado}</span>
            </div>

            <ButtonGroup className="Product-Qtd" size="small" aria-label="small outlined button group">
                <span className="qtd-text">Quantidade</span>
                <Button onClick={handleDecrement} disabled={(isItensQtd === 1) ? true : false}>-</Button>
                <Button>{isItensQtd}</Button>
                <Button onClick={handleIncrement}>+</Button>
            </ButtonGroup>

            <div className="Action-Button">
                <Button
                    className="buy"
                    color="secondary"
                    variant="contained">
                    Comprar
                </Button>

                <Button
                    className="add-Card"
                    color="secondary"
                    variant="outlined"
                    onClick={handleAddCart}
                    >
                    Adicionar ao carrinho
                    
                </Button>
            </div>

    
        </Paper>

        <ProductSeller />

        </>
    )
}

export default ProductDetails