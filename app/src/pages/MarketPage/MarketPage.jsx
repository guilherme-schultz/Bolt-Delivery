import React, { useState, useEffect } from 'react'
import api from "../../services/api";

import MarketGrid from "../../componets/MarketGrid/MarketGrid"
import { TextField, Grid } from '@material-ui/core';

import "./MarketPage.css"

const MarketPage = () => {

    const [isMarketList, setIsMarketList] = useState([]);
    const [isMarketListRequested, setIsMarketListRequested] = useState([]);

    const handleSearch = (event) => {

        if (event.target.value.replace(/\s+/g, '') === "") {
            setIsMarketList(isMarketListRequested)
        } else {
            const marketsFilter = isMarketListRequested.filter((market) => 
                market.nome_supermercado.toLowerCase().includes(event.target.value.toLowerCase())
            )
            setIsMarketList(marketsFilter)
        }
    } 

    useEffect(() => {
		try {
			api.get("/mercados").then((resp) => {
                console.log(resp)
                setIsMarketListRequested(resp.data.rows)
                setIsMarketList(resp.data.rows)
                console.log(resp.data.rows);
			});
		} catch (error) {
			console.log(error);
		}
        // eslint-disable-next-line
	}, []);

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