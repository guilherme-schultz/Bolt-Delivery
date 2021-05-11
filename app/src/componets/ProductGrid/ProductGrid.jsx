import React, { useState, useEffect } from "react"
import api from "../../services/api";

import { Grid } from '@material-ui/core';

import ProductItem from "../../componets/ProductItem/ProductItem"
import "./ProductGrid.css"

function ProductGrid({productData}) {
    
    return (
        <div className="ProductGrid">

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
                xs={10}
            >
                {productData && productData.map((produto) => (
                    < ProductItem className="Product-Card" info={produto}/>
                    ))
                }
                    
            </Grid>
        </div>
        
    )

}

export default ProductGrid