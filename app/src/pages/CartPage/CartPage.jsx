import React, { useState, useEffect } from "react"
import {Grid, Typography, TextField, FormControlLabel, Checkbox, Paper} from '@material-ui/core';

// import "./LoginPage.css"

const CartPage = () => {

    const [isCartData, setCartData] = useState([]);

    useEffect(() => {
        
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            setCartData(JSON.parse(localStorage.getItem('cart')))
        } else {
            localStorage.setItem('cart', JSON.stringify(isCartData));
        }

        console.log(cart)
    }, []);



  return (
      <div>
          
        <Paper elevation={2} className="AdressForm">
            <Typography variant="h6" gutterBottom>
                Finalizar Compra
            </Typography>

            <Grid container spacing={3} className="">
            {(isCartData.length > 0) && 
                isCartData.map((product) => (
                    <Paper>
                        <Typography variant="h6" gutterBottom key={product}>
                        {product.marketName}
                        </Typography>

                        {product && 
                            product.map((item) => (
                                <Grid item xs={12} key={item.productId}>
                                    <Paper>
                                        <h4>{item.nome}</h4>
                                        <h4>{item.value}</h4>
                                        <h4>x {item.qtd}</h4>
                                    </Paper>
                                </Grid>
                            ))
                            }
                    </Paper>
                ))
            }

            </Grid>
      </Paper>
	
      </div>
  )
}

export default CartPage