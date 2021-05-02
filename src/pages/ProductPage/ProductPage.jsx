import React from 'react'
import { makeStyles } from '@material-ui/core';

import ProductCard from "../../componets/ProductCard/ProductCard"
import "./ProductPage.css"


function ProductPage() { 
    return (
        <div >
            <h1>BOLT DELIVERY</h1>
            <div>
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductPage