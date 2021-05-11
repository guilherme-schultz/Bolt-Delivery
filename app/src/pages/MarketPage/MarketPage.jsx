import React from 'react'

import MarketGrid from "../../componets/MarketGrid/MarketGrid"
import { TextField, Grid } from '@material-ui/core';

import "./MarketPage.css"

const MarketPage = () => {

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
                        />
                    </Grid>
            </div>
            
            <div className="Market-Grid">
                <div>
                <   MarketGrid />
                </div>
            </div>

        </>
    )
}

export default MarketPage