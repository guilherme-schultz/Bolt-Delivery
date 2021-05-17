import React from "react"

import { Grid } from '@material-ui/core';

import ProductDetails from "./ProductDetails/ProductDetails"
import "./ProductCard.css"

const ProductItem = ({ data }) => {

    return (
        <div className="Product-Card">
            { data && 
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                    xs={12}
                >
                    <Grid item xs={12} md={5} >
                        <img className="Product-Img" alt="" src={data.foto}/>
                    </Grid>

                    <Grid item xs={5}>
                        <ProductDetails data={data}/>
                    </Grid>

                </Grid>
            }
        </div>
    )
}

export default ProductItem