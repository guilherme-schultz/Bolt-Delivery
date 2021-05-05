import React, { useState } from "react"
import { Grid } from '@material-ui/core';

import ProductItem from "../../componets/ProductItem/ProductItem"
import "./ProductGrid.css"

function ProductGrid() {

    const [isProductList] = useState(
        [{
            "nome" : "Teste",
            "preco" : "10.00"
        },
        {
            "nome" : "Teste 2",
            "preco" : "25.00"
        },
        {
            "nome" : "Teste 2",
            "preco" : "25.00"
        },
        {
            "nome" : "Teste 2",
            "preco" : "25.00"
        },
        {
            "nome" : "Teste 2",
            "preco" : "25.00"
        }]
    );

    


    return (
        <div className="ProductGrid">

            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
                xs={10}
            >
                {isProductList && isProductList.map((produto) => (
                    < ProductItem className="Product-Card" info={produto}/>
                    ))
                }
                    
            </Grid>
        </div>
        
    )

}

export default ProductGrid