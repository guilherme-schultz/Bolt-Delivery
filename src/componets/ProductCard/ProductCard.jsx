import React from "react"
import { Paper, Grid } from '@material-ui/core';

import "./ProductCard.css"

function ProductItem() {

    return (
        <div className="Product-Card">
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={3}
                xs={12}
            >

                <Grid item xs={7}>
                    <img className="Product-Img" src="https://organicosdafatima.com.br/wp-content/uploads/2020/06/alface-americana-organica-organicos-da-fatima-horta-urbana-rio-de-janeiro-rj.png"/>
                </Grid>

                <Grid item xs={5}>
                    <Paper>
                        <div className="Product-Desc">
                            <span className="" >Alface Romana <br/></span>
                            <span className="Product-Price-Before">R$ 150,00 <br/></span>
                            <span className="Product-Price">R$ 100,00 <br/></span>
                            <span className="Product-Saler" >Armandinho Supermercados</span>
                        </div>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default ProductItem