import React, { useState, useEffect } from 'react'
import api from "../../services/api";

import MarketGrid from "../../componets/MarketGrid/MarketGrid"
import { TextField, Grid } from '@material-ui/core';

import "./MarketPage.css"

const MarketPage = () => {

    const [isMarketList, setIsMarketList] = useState([]);

    const handleSearch = (event) => {
        if (isMarketList) {
            isMarketList.filter((product) => product.nome_supermercado.startsWith(event.target.value) )
        }
    } 

    useEffect(() => {
		try {
            console.log('Buscando...')
			api.get("/mercados").then((resp) => {
                console.log(resp)
                setIsMarketList(resp.data.rows)
                console.log(isMarketList)
			});
		} catch (error) {
			console.log(error);
		}

	}, [isMarketList]);

    return (
        <>
            <h1>Mercados</h1>
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
                            placeholder="Busque um mercado"
                            id="filled-basic"
                            label="Busque um mercado"
                            variant="filled"
                            onChange={handleSearch}
                        />
                    </Grid>
            </div>
            
            <div className="Market-Grid">
                <div>
                    <MarketGrid isMarketList={isMarketList} />
                </div>
            </div>

        </>
    )
}

export default MarketPage