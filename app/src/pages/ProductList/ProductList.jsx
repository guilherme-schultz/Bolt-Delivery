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

    useEffect(() => {
        console.log(getMarketName())
    }, []);

    const [isMarketList, setIsMarketList] = useState([]);
    const [isTrue, setIsTrue] = useState(true);

    useEffect(() => {
        if (isTrue){
            try {
                console.log('Buscando...')
                api.get(`/mercados/produtos/${getMarketName()}`).then((resp) => {
                    console.log(resp)
                    setIsMarketList(resp.data.rows)
                    console.log(isMarketList)
                });
            } catch (error) {
                console.log(error);
            }
            setIsTrue(false)
        }

	}, [isTrue, isMarketList]);

    return (
        <div>
            <h1>NOME MERCADO</h1>

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
            
            <div className="Start-Page">
                <ProductGrid />
            </div>
        </div>
    )
}

export default ProductList