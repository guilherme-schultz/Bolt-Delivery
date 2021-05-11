import React, { useState, useEffect } from "react"
import api from "../../services/api";

import { Grid } from '@material-ui/core';

import ProductItem from "../../componets/ProductItem/ProductItem"
import "./ProductGrid.css"

function ProductGrid() {

    const getMarketName = () => {
        var url = window.location.href
        var urlS = (url.split("/")).slice(-1)[0]
        return urlS
    }

    const [isProductList, setIsProductList] = useState([]);
    const [isTrue, setIsTrue] = useState(true);

    useEffect(() => {
        if (isTrue){
            try {
                console.log('Buscando...')
                api.get(`/mercados/produtos/${getMarketName()}`).then((resp) => {
                    console.log(resp)
                    setIsProductList(resp.data.rows)
                    console.log(isProductList)
                });
            } catch (error) {
                console.log(error);
            }
            setIsTrue(false)
        }

	}, [isTrue, isProductList]);
    

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