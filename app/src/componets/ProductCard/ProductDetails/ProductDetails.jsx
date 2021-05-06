import React, { useState } from "react"
import { Paper, Button, ButtonGroup } from '@material-ui/core';

import "./ProductDetails.css"

import ProductSeller from "./ProductSeller/ProductSeller"

function ProductDetails() {

    const [isItensQtd, setItensQtd] = useState(0);

    const handleIncrement = () => {
        setItensQtd(isItensQtd + 1);
    };

    const handleDecrement = () => {
        if (isItensQtd !== 0) {
            setItensQtd(isItensQtd - 1);
        }
    };

    return (
        <>
        <Paper>
            <div className="ProductDetails">
                <span className="Product-Name" >Alface Romana <br/></span>
                <span className="Product-Price-Before">R$ 150,00 <br/></span>
                <span className="Product-Price">R$ 100,00 <br/></span>
                <span className="Product-Saler" >Armandinho Supermercados</span>
            </div>

            <ButtonGroup className="Product-Qtd" size="small" aria-label="small outlined button group">
                <span className="qtd-text">Quantidade</span>
                <Button onClick={handleDecrement}>-</Button>
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
                    variant="outlined">
                    Adicionar ao carrinho
                </Button>
            </div>

    
        </Paper>

        <ProductSeller />

        </>
    )
}

export default ProductDetails