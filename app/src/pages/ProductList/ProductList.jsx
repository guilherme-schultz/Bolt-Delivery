import React, {useEffect, useState} from 'react'
import {TextField, Grid} from '@material-ui/core';

import api from "../../services/api";
import ProductGrid from "../../componets/ProductGrid/ProductGrid"
import "./ProductList.css"

const ProductList = () => {

    const getMarketName = () => {
        var url = window.location.href
        var urlS = (url.split("/")).slice(-1)[0]
        return urlS
    }

    const [isProductList, setIsProductList] = useState([]);
    const [isProductListRequested, setIsProductListRequested] = useState([]);
    const [isMarketName, setIsMarketName] = useState([]);

    const handleSearch = (event) => {

        if (event.target.value === "") {
            setIsProductList(isProductListRequested)
            console.log(isProductList)

        } else {
            const productFilter = isProductListRequested.filter((product) => 
                product.nome.toLowerCase().startsWith(event.target.value.toLowerCase())
            )
            setIsProductList(productFilter)
            console.log(isProductList)
        }
    } 

    useEffect(() => {
        try {
            api.get(`/mercados/name/${getMarketName()}`).then((resp) => {
                setIsMarketName(resp.data.rows)
                console.log(resp.data.rows)
            });

            api.get(`/mercados/produtos/${getMarketName()}`).then((resp) => {
                setIsProductList(resp.data.rows)
                setIsProductListRequested(resp.data.rows)
            });

        } catch (error) {
            console.log(error);
        }
     
        // eslint-disable-next-line
	}, []);

    return (
        <div>

            { isMarketName.length > 0 && 
                <h1>{isMarketName[0].nome_supermercado}</h1>
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
                        onChange={handleSearch}
                    />
                </Grid>
            </div>
            
            <div>
                <ProductGrid productData={isProductList}/>
            </div>
        </div>
    )
}

export default ProductList