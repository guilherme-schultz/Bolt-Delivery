import React, { useEffect } from "react"
import { Grid } from '@material-ui/core';

import ProductItem from "../../componets/ProductItem/ProductItem"
import "./ProductGrid.css"

function ProductGrid({ productData }) {

    useEffect(() => {
        console.log(productData)
    }, [productData]);


    return (
        <div className="ProductGrid">

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
            >
                {productData && productData.map((produto) => (
                    < ProductItem className="Product-Card" info={produto} key={produto.cod_produto + produto.nome}/>
                    ))
                }
                    
            </Grid>
        </div>
        
    )

}

export default ProductGrid