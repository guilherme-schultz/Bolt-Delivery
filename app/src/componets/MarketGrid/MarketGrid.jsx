import React from "react"


import { Grid } from '@material-ui/core';

import MarketItem from "./MarketItem/MarketItem"
import "./MarketGrid.css"

const MarketGrid = ({isMarketList}) => {

    return (
        <div className="ProductGrid">

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={3}
                xs={10}
            >
                {isMarketList && isMarketList.map((markets) => (
                    < MarketItem className="Product-Card" info={markets}/>
                    ))
                }
            </Grid>
        </div>
    )
}

export default MarketGrid