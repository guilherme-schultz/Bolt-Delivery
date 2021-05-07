import React from "react"

import { Grid } from '@material-ui/core';

import ProductDetails from "./ProductDetails/ProductDetails"
import "./ProductCard.css"

function ProductItem() {

    return (
        <div className="Product-Card">
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
                xs={12}
            >
                <Grid item xs={12} md={5} >
                    <img className="Product-Img" alt="" src="https://organicosdafatima.com.br/wp-content/uploads/2020/06/alface-americana-organica-organicos-da-fatima-horta-urbana-rio-de-janeiro-rj.png"/>
                </Grid>

                <Grid item xs={5}>
                    <ProductDetails />
                </Grid>

            </Grid>
        </div>
    )
}

export default ProductItem