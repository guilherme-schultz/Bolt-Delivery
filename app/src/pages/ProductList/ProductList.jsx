import React, {useEffect, useState} from 'react'
import {TextField, Grid} from '@material-ui/core';

import api from "../../services/api";
import ProductGrid from "../../componets/ProductGrid/ProductGrid"
import "./ProductList.css"

function ProductList() {

    const getMarketName = () => {
        var url = window.location.href
        var urlS = (url.split("/")).slice(-1)[0]
        return urlS
    }

    const [isProductList, setIsProductList] = useState([]);
    // const [isSearch, setIsSearch] = useState("");
    const [isTrue, setIsTrue] = useState(true);

    useEffect(() => {
        if (isTrue){
            try {
                api.get(`/mercados/produtos/${getMarketName()}`).then((resp) => {
                    setIsProductList(resp.data.rows)
                    console.log(isProductList)
                });
            } catch (error) {
                console.log(error);
            }
            setIsTrue(false)
        }

	}, [isTrue, isProductList]);

    useEffect(() => {
        console.log(isProductList)
	}, [isProductList]);


    return (
        <div>

            {isProductList[0] && 
                <h1>{isProductList[0].nome_supermercado}</h1>
            }

            <div className="Search">
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                    xs={3}
                >
                    <TextField
                        className="search-box"
                        fullWidth
                        margin="normal"
                        placeholder="Busque um produto"
                        id="filled-basic"
                        label="Busque um produto"
                        variant="filled"
                    />
                </Grid>
            </div>
            
            <div >
                <ProductGrid productData={isProductList}/>
            </div>
        </div>
    )
}

export default ProductList