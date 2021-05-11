import React, { useState, useEffect } from "react"
import api from "../../services/api";

import { Grid } from '@material-ui/core';

import MarketItem from "./MarketItem/MarketItem"
import "./MarketGrid.css"

function MarketGrid() {

    const [isMarketList, setIsMarketList] = useState([]);

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