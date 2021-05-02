import React from 'react'

import MenuBar from "../../componets/MenuBar/MenuBar"

import ProductCard from "../../componets/ProductCard/ProductCard"
import "./ProductPage.css"


function ProductPage() { 
    return (
        <>
            <MenuBar />
            <div >
                <div>
                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default ProductPage