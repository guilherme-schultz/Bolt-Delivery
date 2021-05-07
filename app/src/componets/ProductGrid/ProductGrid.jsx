import React, { useState, useEffect } from "react"
import api from "../../services/api";

import { Grid } from '@material-ui/core';

import ProductItem from "../../componets/ProductItem/ProductItem"
import "./ProductGrid.css"

function ProductGrid() {

    const [isProductList, setIsProductList] = useState([]);

    useEffect(() => {
		try {
            console.log('Buscando...')
			api.get("/produtos").then((resp) => {
                console.log(resp)
                setIsProductList(resp.data.rows)
                console.log(isProductList)
			});
		} catch (error) {
			console.log(error);
		}

	}, [isProductList]);
    

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