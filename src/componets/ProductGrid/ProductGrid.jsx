import React from "react"
import { Grid } from '@material-ui/core';

import ProductItem from "../../componets/ProductItem/ProductItem"
import "./ProductGrid.css"

function ProductGrid() {

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
                        
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />


                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />

                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                < ProductItem className="Product-Card" />
                    
            </Grid>
        </div>
        
    )

}

export default ProductGrid